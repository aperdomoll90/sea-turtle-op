'use client'
import React, { use, useEffect } from 'react'
import './styles.css'

import Link from 'next/link'
const logoRing = '/assets/ring.png'
const trecks = '/assets/trecks.png'
const volunteer = '/assets/volunteer.png'
const membership = '/assets/membership.png'
const donate = '/assets/donate.png'

export default function HomeSectionContactUs() {
  return (
    <div className='home-contact-section-wrapper'>
      <div className='home-contact-section-header flex flex-col'>
        <div>
          <p className='home-contact-section-route'>Contact</p>
          <p className='home-contact-section-title'>Want to be a part of S.T.O.P? You want to help?</p>
        </div>
        <p className='home-contact-section-comment'>There are many ways you can help us keep feet on the sand, buckets in hand, and flippers in the sea.</p>

        <div className='home-contact-services-container'>
          <div className='home-contact-services' style={{ '--rotation': 9, '--i': 9 } as React.CSSProperties}>
            <div className='rotation-stabilizer-container'>
              <img className='home-contact-services-icons' data-per='donate' src={trecks} />
              <p className='home-contact-services-text'>TRECKS</p>
            </div>
          </div>
          <div className='home-contact-services' style={{ '--rotation': 9, '--i': 10.1 } as React.CSSProperties}>
            <div className='rotation-stabilizer-container'>
              <img className='home-contact-services-icons' data-per='donate' src={donate} />
              <p className='home-contact-services-text'>DONATE</p>
            </div>
          </div>
          <div className='home-contact-services' style={{ '--rotation': 9.5, '--i': 11.1 } as React.CSSProperties}>
            <div className='rotation-stabilizer-container'>
              <img className='home-contact-services-icons' data-per='donate' src={membership} />
              <p className='home-contact-services-text'>MEMBERSHIP</p>
            </div>
          </div>
          <div className='home-contact-services' style={{ '--rotation': 9, '--i': 12 } as React.CSSProperties}>
            <div className='rotation-stabilizer-container'>
              <img className='home-contact-services-icons' data-per='donate' src={volunteer} />
              <p className='home-contact-services-text'>VOLUNTEER</p>
            </div>
          </div>
        </div>
      </div>
      <div className='home-contact-section-content flex flex-col content-center justify-center items-center h-screen'>
        <div id='home-contact-section'>
          <Link href='/contact' passHref>
            <button id='home-contact-section-button' className='action-button' onClick={() => setVisible(true)}>
              Contact Us
            </button>
          </Link>
          <img id='home-contact-logo-ring' src={logoRing} />
        </div>
      </div>
    </div>
  )
}
