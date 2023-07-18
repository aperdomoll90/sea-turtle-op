'use client'
import * as React from 'react'

interface TForm {
  name: string
  email: string
  message: string
}

const Contact = () => {
  const [form, setForm] = React.useState<TForm>({ name: '', email: '', message: '' })

  const handleFormInput = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement

    setForm({ ...form, [target.name]: target.value })
  }

  const handleFormSubmit = () => {
    fetch('/path', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
  }

  return (
    <section className='flex justify-evenly w-screen'>
      <div className='w-2/12'>
        <legend>Contact</legend>
        <h2 className='text-4xl'>
          Have any questions? <br />
          Or perhaps a way to help?
        </h2>
        <p className='text-'>
          Would you like to get in touch to ask a question, tell us about how you could help or simply because you’d
          like to hear more about what we do?
        </p>
      </div>

      <form action='submit' method='post' className='flex flex-col w-5/12' onSubmit={handleFormSubmit}>
        <div className='relative z-0 my-10 my-10'>
          <input
            type='text'
            id='floating_standard'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            onChange={(e: React.ChangeEvent) => handleFormInput(e)}
          />
          <label
            htmlFor='floating_standard'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Name
          </label>
        </div>
        <div className='relative z-0 my-10'>
          <input
            type='text'
            id='floating_standard'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            onChange={(e: React.ChangeEvent) => handleFormInput(e)}
          />
          <label
            htmlFor='floating_standard'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            Email
          </label>
        </div>
        <div className='relative z-0 my-10'>
          <textarea
            id='floating_standard'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            onChange={(e: React.ChangeEvent) => handleFormInput(e)}
          />
          <label
            htmlFor='floating_standard'
            className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
            What would you like to know?
          </label>
        </div>
        <button
          className='bg-[#060117] hover:bg-[#F1EEEE] border-[#F1EEEE] text-white font-bold py-2 px-4 rounded-full'
          type='submit'>
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
