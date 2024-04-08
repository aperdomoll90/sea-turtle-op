'use client'
import RouteLayout from '@/components/routeLayout/routeLayout'
import './styles.css'
import { useEffect, useState } from 'react'
import { Card } from '@/components/turtleCard/turtleCard'

const green = '../../assets/green.png'
const loggerhead = '../../assets/loggerhead.png'
const leatherback = '../../assets/leatherback.png'

const hatchlingLoggerhead = 'https://square.link/u/i8pYLEto'
const hatchlingGreen = 'https://square.link/u/3BbrdvzF'
const hatchlingLeatherback = 'https://square.link/u/SMhMVdGX'

const Hatchling = () => {
  const hatchlingDetails = (
    <ul>
      <li>Certificate of Birth</li>
      <li>This certificate shows the nest number, the date and the name of your hatchling.</li>
      <li>You are able to go on our website and find the nest using the map system.</li>
      <li>Your hatchling is given their name when released into the ocean.</li>
    </ul>
  )
  return (
    <div id='name-hatchling-wrapper'>
      <RouteLayout route='name a hatchling' title='Give them a name and save their lifes' comment='Every membership is a voice for the sea turtles and helps keep feet on the sand with buckets in hand!'>
        <div className='name-hatchling-container'>
          <Card contentList={hatchlingDetails} title='loggerhead Birth Certificate' src={loggerhead} price={5} link={hatchlingLoggerhead} />
          <Card contentList={hatchlingDetails} title='green Birth Certificate' src={green} price={10} link={hatchlingGreen} />
          <Card contentList={hatchlingDetails} title='leatherback Birth Certificate' src={leatherback} price={15} link={hatchlingLeatherback} />
        </div>
      </RouteLayout>
    </div>
  )
}

export default Hatchling
