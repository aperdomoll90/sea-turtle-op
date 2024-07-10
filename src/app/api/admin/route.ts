import { NextResponse } from 'next/server'
import db from '@/utils/mongoConnect'

const users = db.collection('users')

export async function GET() {
	return NextResponse.json('test here ')
}

export const POST = async () => {
	const userAdded = await users.insertOne({ email: 'Jonathans199@gmail.com', password: '112314' })

	return NextResponse.json('Posting here ')
}
