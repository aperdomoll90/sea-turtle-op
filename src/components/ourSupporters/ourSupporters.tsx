import React from 'react'
import './styles.css'
import SupporterMarquee from '../SupporterMarquee/SupporterMarquee'

const companiesArray = [
  '/assets/duck-logo.png',
  '/assets/FWCC-logo.png',
  '/assets/starbrite-logo.png',
  '/assets/turtle-logo.png',
  '/assets/duck-logo.png',
  '/assets/FWCC-logo.png',
  '/assets/starbrite-logo.png',
  '/assets/turtle-logo.png',
  '/assets/duck-logo.png',
  '/assets/FWCC-logo.png',
  '/assets/starbrite-logo.png',
  '/assets/turtle-logo.png',
]
const donorsArray = [
  {
    name: 'Jonathan Sanchez',
    donationAmount: 22200,
    date: '2 weeks',
  },
  {
    name: 'Bob Dylan',
    donationAmount: 222,
    date: '2 weeks',
  },
  {
    name: 'Joshua Ruiz',
    donationAmount: 50,
    date: '2 weeks',
  },
  {
    name: 'Laura Olive',
    donationAmount: 222,
    date: '2 weeks',
  },
  {
    name: 'Rose Smith',
    donationAmount: 222,
    date: '2 weeks',
  },
]

export default function OurSupporters() {
  return (
    <div className='home-section our-supporters-section flex justify-end items-center'>
      <div className='our-supporters-section-content flex flex-col justify-around items-center'>
        <SupporterMarquee label='Our Supporters' direction='left'>
          {companiesArray && companiesArray.map((card, index) => <img key={index} className='supporter-company-logo' alt={`supporter company logo ${index}`} src={card} />)}
        </SupporterMarquee>
        <SupporterMarquee label='Thank You Donors!' direction='right'>
          <div className='donor-card-group'>
            {donorsArray &&
              donorsArray.map((donor, index) => (
                <div key={index} className='donor-card flex flex-col justify-center items-center'>
                  <h5>{donor.name}</h5> <div className='donor-card-amount'>{donor.donationAmount}</div> <div className='donor-card-date'>{donor.date}</div>
                </div>
              ))}
          </div>
        </SupporterMarquee>
      </div>
    </div>
  )
}
