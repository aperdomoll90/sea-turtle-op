'use client'
import * as React from 'react'
import { UserContext } from '@/app/layout'
import { TUser } from '@/app/layout'

export const Users = () => {
	const [users, setAdmins] = React.useState([])
	const { user, setUser } = React.useContext(UserContext)

	React.useEffect(() => {
		fetch('/api/admin', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		})
			.then(res => res.json())
			.then(data => setAdmins(data))
			.catch(err => console.error(err))
	}, [])

	console.log(user.token)

	return (
		<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
			<div className='mx-auto mb-10 lg:max-w-xl sm:text-center'>
				<p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-600 uppercase rounded-full bg-teal-accent-400'>
					Dream Team
				</p>
				<p className='text-base text-gray-500 md:text-lg'>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
				</p>
			</div>
			<div className='flex justify-between mx-auto mb-12 '>
				{users &&
					users.map((admin: TUser) => {
						return (
							<div key={admin._id} className='flex flex-col items-center'>
								<img
									className='object-cover w-20 h-20 mb-2 rounded-full shadow'
									src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
									alt='Person'
								/>
								<div className='flex flex-col items-center'>
									<p className='text-lg font-bold'>{admin.email ? admin.email : 'Full Name'}</p>
									<p className='text-sm text-slate-400'>{admin.email}</p>
									{/* <p className='text-xs text-slate-400'>id: {admin.uid}</p> */}
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}
