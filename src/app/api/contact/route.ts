import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
	return NextResponse.json('test here')
}

export async function POST(req: Request) {
	const reqBody = await req.json()

	console.log('here is req -> ', reqBody)

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: 'questions@seaturtleop.net',
			pass: process.env.EMAIL_PASSWORD,
		},
	})

	const emailData = await transporter.sendMail({
		from: ' "Sea Turtles Op 🐢" <questions@seaturtleop.net>', // sender address
		to: 'questions@seaturtleop.net',
		subject: `Message from ${reqBody.name}`,
		text: reqBody.message + ' | sent from: ' + reqBody.email,
		html: `<div> ${reqBody.message}</div><p>Sent From: ${reqBody.email}</p>`,
	})

	transporter.sendMail(emailData, (err, info) => {
		if (err) {
			console.log(err)
		} else {
      console.log(info)
      return NextResponse.json('message was sent successfully 😎')
		}
	})

	
}
