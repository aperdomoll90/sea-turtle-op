import { NextResponse } from 'next/server'
import db from '@/utils/mongoConnect'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

const users = db.collection('users')

export async function GET() {
	const allUsers = await users.find().toArray()

	return NextResponse.json(allUsers)
}

// Login
export const POST = async (req: Request) => {
	const reqBody = await req.json()

	const { email, password } = reqBody

	let user
	try {
		if (email && password) {
			const userFound = await users.findOne({ email: email })

			if (userFound) {
				const passwordVerified = await bcrypt.compare(password, userFound.password)

				const jwtToken = jwt.sign(userFound, process.env.JWT_SECRET as string)

				user = { token: jwtToken, email: userFound.email, _id: userFound._id }
			} else return NextResponse.json({ error: `Error on '/api/login': ${email} is not signed up`, status: 400 })
		}
	} catch (err) {
		return NextResponse.json({ error: "Error on '/api/signup': " + err, status: 400 })
	}
	return NextResponse.json(user)
}
