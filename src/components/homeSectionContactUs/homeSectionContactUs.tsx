'use client'
import React, { use, useEffect } from 'react'
import './styles.css'
import RouteLayout from '../routeLayout/routeLayout'
import Contact from '@/app/contact/page'
import { ContentModel } from '../ContentModel/ContentModel'
const logoRing = '/assets/ring.png'

export default function HomeSectionContactUs() {
  const [visible, setVisible] = React.useState(false)

  useEffect(() => {
    console.log('visible', visible)
  }, [visible])

  return (
    <RouteLayout isContact route='Contact' title='Want to be a part of S.T.O.P? You want to help?' comment='There are many ways you can help us keep feet on the sand, buckets in hand, and flippers in the sea.'>
      <div id='home-contact-section'>
        <button id='home-contact-section-button' className='action-button' onClick={() => setVisible(true)}>
          Contact Us
        </button>
        <img id='home-contact-logo-ring' src={logoRing} />
      </div>
      {visible && <ContentModel title='' content={<Contact />} setVisible={setVisible} />}
    </RouteLayout>
  )
}
