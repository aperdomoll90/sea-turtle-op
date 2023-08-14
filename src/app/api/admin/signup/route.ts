import { NextResponse } from 'next/server'
import db from '@/utils/mongoConnect'
import bcrypt from 'bcrypt'

const users = db.collection('users')

interface TreqBody {
	email: string
	password: string
}

export async function GET() {
	const allUsers = await users.find().toArray()

	return NextResponse.json(allUsers)
}

// Sign up
export const POST = async (req: Request) => {
	const reqBody = await req.json()

	const { email, password } = reqBody

	try {
		if (email && password) {
			const dupplicateUser = await users.findOne({ email: email })

			if (!dupplicateUser) {
				bcrypt.genSalt(10, (saltError, salt) => {
					if (!saltError) {
						bcrypt.hash(password, salt, async (hashError, hash) => {
							if (!hashError) {
								const userAdded = await users.insertOne({ email: email, password: hash })
								console.log(userAdded)
							} else console.error(hashError)
						})
					} else console.error(saltError)
				})
			} else return NextResponse.json({ error: `Error on '/api/signup': ${email} is already signed up`, status: 400 })
		}
	} catch (err) {
		return NextResponse.json({ error: "Error on '/api/signup': " + err, status: 400 })
	}
	return NextResponse.json({ message: `New User: ${email} was successfully created`, success: true })
}
