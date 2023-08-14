'use client'
import './globals.css'
import * as React from 'react'
import { Abel } from 'next/font/google'
import { Footer } from '@/layout/footer/Footer'
import { NavBar } from '@/layout/navigation/NavBar'

const abel = Abel({ subsets: ['latin'], weight: '400' })

// export const metadata = {
// 	title: 'Sea Turtle Oversight Protection',
// 	description: 'Resist Extinction',
// }

export interface TUser {
	_id?: string
	email?: string
	token?: string
}

export const UserContext = React.createContext({
	user: { _id: '', email: '', token: '' },
	setUser: (user: TUser) => {
		user
	},
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [user, setUser] = React.useState<TUser>({})

	React.useEffect(() => {
		const loggedInUser = localStorage.getItem('sea_op_user')
		if (loggedInUser) setUser(JSON.parse(loggedInUser))
	}, [])

	console.log(user)

	return (
		<html lang='en'>
			{/* @ts-ignore */}
			<UserContext.Provider value={{ user, setUser }}>
				<body className={abel.className}>
					<NavBar />
					<div className='layout-page-container'>{children}</div>
					<Footer />
				</body>
			</UserContext.Provider>
		</html>
	)
}
