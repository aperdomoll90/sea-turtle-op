import { Login } from '@/components/admin/login'
import { Signup } from '@/components/admin/signup'
import { Users } from '@/components/admin/users'

const Admin = () => {
	return (
		<div className='flex flex-col h-full'>
			<Users />
			<Signup />
      <Login /> 
		</div>
	)
}

export default Admin
