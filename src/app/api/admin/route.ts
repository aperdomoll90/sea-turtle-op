import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import db from '@/utils/mongoConnect'
import { authMiddleware } from '@/utils/authMiddleware'

const users = db.collection('users')

interface TreqBody {
	email: string
	password: string
}

export const GET = async () => {
	const headersInstance = headers()
	const authorization = headersInstance.get('authorization')

	let allUsers
	if (authorization === 'Bearer undefined') {
		console.log('not logged in')
		return NextResponse.json({ error: 'not logged in' })
	} else {
		allUsers = await users.find().toArray()
		return NextResponse.json(allUsers)
	}

	return NextResponse.json(allUsers ? allUsers : null)
}
