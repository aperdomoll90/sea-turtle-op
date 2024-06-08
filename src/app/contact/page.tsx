'use client'
import * as React from 'react'
import './styles.css'
import RouteLayout from '@/components/routeLayout/routeLayout'

const Contact = () => {
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
            <h4 className='contact-us-secondary-title'>Sea Turtle Emergency Contacts:</h4>
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
