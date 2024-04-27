'use client'
import RouteLayout from '@/components/routeLayout/routeLayout'
import './styles.css'
import { useEffect, useState } from 'react'
import { Card } from '@/components/turtleCard/turtleCard'

const green = '../../assets/greenbackground.jpg'
const loggerhead = '../../assets/loggerheadbackground.jpg'
const leatherback = '../../assets/leatherbackbackground.png'

const hatchlingLoggerhead = 'https://square.link/u/i8pYLEto'
const hatchlingGreen = 'https://square.link/u/3BbrdvzF'
const hatchlingLeatherback = 'https://square.link/u/SMhMVdGX'

const Hatchling = () => {
  const hatchlingDetails = (
    <ul>
      <li>Your hatchling is given its name after its rescued and released into the ocean</li>
      <li>We prepare a digital birth certificate and email it to you.</li>
      <li>The birth certificate shows the date of emergence, the nurse number and the name you selected.</li>
    </ul>
  )
  return (
    <RouteLayout route='name a hatchling' title='Give them a name and save their lives' comment='Every membership is a voice for the sea turtles and helps keep feet on the sand with buckets in hand!'>
      <div className='name-hatchling-container'>
        <Card contentList={hatchlingDetails} title='loggerhead' src={loggerhead} price={5} link={hatchlingLoggerhead} />
        <Card contentList={hatchlingDetails} title='green' src={green} price={10} link={hatchlingGreen} />
        <Card contentList={hatchlingDetails} title='leatherback' src={leatherback} price={15} link={hatchlingLeatherback} />
      </div>
    </RouteLayout>
  )
}

export default Hatchling
