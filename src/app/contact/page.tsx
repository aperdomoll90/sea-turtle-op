'use client'
import * as React from 'react'
import './styles.css'
import RouteLayout from '@/components/routeLayout/routeLayout'

interface TForm {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form, setForm] = React.useState<TForm>({ name: '', email: '', message: '' })

  // const handleFormSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   fetch('/api/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(form),
  //   })
  // }

  // const handleFormInput = (e: React.FormEvent) => {
  //   const target = e.target as HTMLInputElement

  //   setForm({ ...form, [target.name]: target.value })
  // }

  // const formContent = (
  //   <form action='submit' method='post' className='flex flex-col w-5/12' onSubmit={handleFormSubmit}>
  //     <div className='relative z-0 my-10 my-10'>
  //       <input
  //         name='name'
  //         type='text'
  //         id='floating_standard'
  //         className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
  //         placeholder=' '
  //         onChange={(e: React.ChangeEvent) => handleFormInput(e)}
  //       />
  //       <label
  //         htmlFor='floating_standard'
  //         className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
  //         Name
  //       </label>
  //     </div>
  //     <div className='relative z-0 my-10'>
  //       <input
  //         name='email'
  //         type='email'
  //         id='floating_standard'
  //         className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
  //         placeholder=' '
  //         onChange={(e: React.ChangeEvent) => handleFormInput(e)}
  //       />
  //       <label
  //         htmlFor='floating_standard'
  //         className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
  //         Email
  //       </label>
  //     </div>
  //     <div className='relative z-0 my-10'>
  //       <textarea
  //         name='message'
  //         id='floating_standard'
  //         className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
  //         placeholder=' '
  //         onChange={(e: React.ChangeEvent) => handleFormInput(e)}
  //       />
  //       <label
  //         htmlFor='floating_standard'
  //         className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
  //         What would you like to know?
  //       </label>
  //     </div>
  //     <button className='basic-button  text-white font-bold py-2 px-4 rounded-full' type='submit'>
  //       Send
  //     </button>
  //   </form>
  // )

  return (
    <section id='contact-us-wrapper'>
      <RouteLayout route='Contact us' title={`Have any questions? Or perhaps a way to help?`} comment='Would you like to get in touch to ask a question, tell us about how you could help or simply because you’d like to hear more about what we do?'>
        <div className='contact-us-container'>
          <h3 className='contact-us-title'>Sea Turtle Oversight Protection - Turtle Emergency Hotline</h3>
          <div className='contact-us-column'>
            <h4 className='contact-us-secondary-title'>Contact S.T.O.P. Headquarters</h4>
            <ul>
              <li>Address:</li>
              <li>3104 NE 9th Street, Suite A</li>
              <li>Fort Lauderdale, Florida, 33304</li>
            </ul>
            <ul>
              <li>Email:</li>
              <li>questions@seaturtleop.net</li>
            </ul>
            <ul>
              <li>Phone:</li>
              <li>1 (954) 404-0025</li>
            </ul>
          </div>
          <div className='contact-us-column'>
            <h4 className='contact-us-secondary-title'>Other primary contact & emergency numbers:</h4>
            <ul>
              <li>STOP 24/7 Hatchling Emergency</li>
              <li>(954) 404-0025</li>
            </ul>
            <ul>
              <li>Broward County</li>
              <li>(954) 404-0025</li>
            </ul>
            <ul>
              <li>FWCC</li>
              <li>(888) 404-3922</li>
            </ul>
          </div>
        </div>
      </RouteLayout>
    </section>
  )
}

export default Contact
