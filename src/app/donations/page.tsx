'use client'
import RouteLayout from '@/components/routeLayout/routeLayout'
import './styles.css'
import React, { use, useEffect } from 'react'

interface TForm {
  name: string
  lastName: string
  email: string
  phone: string
}

const Donations = () => {
  const [form, setForm] = React.useState<TForm>({ name: '', lastName: '', email: '', phone: '' })

  useEffect(() => {
    console.log('form', form)
  }, [form])

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
  }

  const handleFormInput = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement

    setForm({ ...form, [target.name]: target.value })
  }
  return (
    <div className='donations-wrapper'>
      <RouteLayout route='donations' title='Fueled By Donations, Love And Coffee' comment='We Accept All 3 To Helps Keep Us Going, Especially Donations! You Can Set Up One Time Or Recurring Donations From Here.'>
        <h1>Donations</h1>
        {/* <form action='submit' method='post' className='donations-form' onSubmit={handleFormSubmit}>
          <div className='donations-form-row personal-info'>
            <div className='z-0'>
              <input
                name='name'
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

            <div className='z-0'>
              <input
                name='lastName'
                type='text'
                id='floating_standard'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                onChange={(e: React.ChangeEvent) => handleFormInput(e)}
              />
              <label
                htmlFor='floating_standard'
                className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Last Name
              </label>
            </div>

            <div className='z-0'>
              <input
                name='email'
                type='email'
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

            <div className='z-0'>
              <input
                name='phone'
                type='tel'
                id='floating_standard'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                onChange={(e: React.ChangeEvent) => handleFormInput(e)}
              />
              <label
                htmlFor='floating_standard'
                className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                Phone
              </label>
            </div>
          </div>

          <div className='donations-form-row donation-info'>
            <div className='donations-form-checkbox'>
              <input
                name='anonymous'
                type='checkbox'
                id='floating_standard'
                className='donations-form-checkbox-box px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                placeholder=' '
                onChange={(e: React.ChangeEvent) => handleFormInput(e)}
              />
              <label htmlFor='floating_standard' className='checkbox-label'>
                Anonymous
              </label>
            </div>

            <div className='donations-form-monetary donations-form-column'>
              <div className='z-0 relative donation-amount-container'>
                <div className='relative w-full'>
                  <div className='absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none'>
                    <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 16'>
                      <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
                    </svg>
                  </div>
                  <input
                    name='donation-amount'
                    type='number'
                    id='currency-input'
                    className='block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 appearance-none dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600'
                    placeholder='USD'
                    required
                  />
                </div>
              </div>
              <div className='donation-period donations-form-column'>
                <div className='donations-form-checkbox'>
                  <input
                    name='one-time'
                    type='checkbox'
                    id='floating_standard'
                    className='donations-form-checkbox-box px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    onChange={(e: React.ChangeEvent) => handleFormInput(e)}
                  />
                  <label htmlFor='floating_standard' className='checkbox-label'>
                    One Time
                  </label>
                </div>

                <div className='donations-form-checkbox'>
                  <input
                    name='six-months'
                    type='checkbox'
                    id='floating_standard'
                    className='donations-form-checkbox-box px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    onChange={(e: React.ChangeEvent) => handleFormInput(e)}
                  />
                  <label htmlFor='floating_standard' className='checkbox-label'>
                    6 Months
                  </label>
                </div>

                <div className='donations-form-checkbox'>
                  <input
                    name='one-year'
                    type='checkbox'
                    id='floating_standard'
                    className='donations-form-checkbox-box px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-4 border-gray-300 dark:text-white dark:border-white-600 dark:focus:border-[#0B1939] focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    onChange={(e: React.ChangeEvent) => handleFormInput(e)}
                  />
                  <label htmlFor='floating_standard' className='checkbox-label'>
                    1 Year
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='donations-form-row'>
            <label htmlFor='card-number-input' className='sr-only'>
              Card number:
            </label>
            <div className='relative w-8/12'>
              <input
                type='text'
                id='card-number-input'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='4242 4242 4242 4242'
                pattern='^4[0-9]{12}(?:[0-9]{3})?$'
                required
              />
              <div className='absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none'>
                <svg fill='none' className='h-6 text-[#1434CB] dark:text-white' viewBox='0 0 36 21'>
                  <path
                    fill='currentColor'
                    d='M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z'
                  />
                </svg>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-4 my-4'>
              <div className='relative max-w-sm col-span-2'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
                  <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </div>
                <label htmlFor='card-expiration-input' className='sr-only'>
                  Card expiration date:
                </label>
                <input
                  datepicker={true}
                  datepicker-format='mm/yy'
                  id='card-expiration-input'
                  type='text'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='12/23'
                  required
                />
              </div>
              <div className='col-span-1'>
                <label htmlFor='cvv-input' className='sr-only'>
                  Card CVV code:
                </label>
                <input
                  type='number'
                  id='cvv-input'
                  aria-describedby='helper-text-explanation'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='CVV'
                  required
                />
              </div>
            </div>
            <button type='submit' className=' basic-button font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'>
              Pay now
            </button>

            <h3>This is to be substituted for paying Api component</h3>
          </div>

          <button className='basic-button donations-form-button   font-bold py-2 px-4 rounded-full' type='submit'>
            Send
          </button>
        </form> */}
      </RouteLayout>
    </div>
  )
}

export default Donations
