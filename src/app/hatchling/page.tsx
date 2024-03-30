'use client'
import RouteLayout from '@/components/routeLayout/routeLayout'
import './styles.css'
import { useEffect, useState } from 'react'

const green = '../../assets/green.png'
const loggerhead = '../../assets/loggerhead.png'
const leatherback = '../../assets/leatherback.png'

const hatchlingLoggerhead = 'https://square.link/u/i8pYLEto'
const hatchlingGreen = 'https://square.link/u/3BbrdvzF'
const hatchlingLeatherback = 'https://square.link/u/SMhMVdGX'


const membershipLeatherback = 'https://square.link/u/riJRxRGX'
const membershipGreen= 'https://square.link/u/G2ICZnbL'
const membershipLoggerhead = 'https://square.link/u/P21EBpAM'
const membershipLeatherbackNest = 'https://square.link/u/zVareWNU'
const membershipGreenNest = 'https://square.link/u/7yfLp7Ui'
const membershipLoggerheadNest = 'https://square.link/u/UWoXbkOl'
const oceanHabitat = 'https://square.link/u/XVwe4KO0'
const resistExtinction = 'https://square.link/u/wpPhIZP5'
const Hatchling = () => {
  const [details, setDetails] = useState()

  useEffect(() => {
    console.log('details', details)
  }, [details])

  const Card = ({src,price,specie,link}) => {
    return (
      <span className='name-hatchling-card'>
        <img src={src} alt={`${specie}-hatchling`} className='hatchling-image' />
        <h3>{specie} Birth Certificate</h3>
        <ul>
          <li>Certificate of Birth</li>
          <li>This certificate shows the nest number, the date and the name of your hatchling.</li>
          <li>You are able to go on our website and find the nest using the map system.</li>
          <li>Your hatchling is given their name when released into the ocean.</li>
        </ul>
        <div className='name-hatchling-details'>
          <p>
            Price: <span>${price}</span>
          </p>
          <a className='name-hatchling-button' href={link}>
            Sign up
          </a>
        </div>
      </span>
    )
  }

  return (
    <div id='name-hatchling-wrapper'>
      <RouteLayout route='name a hatchling' title='Give them a name and save their lifes' comment='Every membership is a voice for the sea turtles and helps keep feet on the sand with buckets in hand!'>
        <div className='name-hatchling-container'>
          {/* <HatchlingForm /> */}
          <Card specie="loggerhead" src={loggerhead} price={5} link={hatchlingLoggerhead} />
          <Card specie="green" src={green} price={10} link={hatchlingGreen} />
          <Card specie="leatherback" src={leatherback} price={15} link={hatchlingLeatherback} />
    
        </div>
      </RouteLayout>
    </div>
  )
}

export default Hatchling
