'use client'
import RouteLayout from '@/components/routeLayout/routeLayout'
import './styles.css'
import { useEffect, useState } from 'react'
import { Card } from '@/components/turtleCard/turtleCard'

const green = '../../assets/green.png'
const loggerhead = '../../assets/loggerhead.png'
const leatherback = '../../assets/leatherback.png'

const membershipLeatherback = 'https://square.link/u/riJRxRGX'
const membershipGreen = 'https://square.link/u/G2ICZnbL'
const membershipLoggerhead = 'https://square.link/u/P21EBpAM'
const membershipLeatherbackNest = 'https://square.link/u/zVareWNU'
const membershipGreenNest = 'https://square.link/u/7yfLp7Ui'
const membershipLoggerheadNest = 'https://square.link/u/UWoXbkOl'
const oceanHabitat = 'https://square.link/u/XVwe4KO0'
const resistExtinction = 'https://square.link/u/wpPhIZP5'

const Membership = () => {
  const [details, setDetails] = useState()

  useEffect(() => {
    console.log('details', details)
  }, [details])

  const loggerheadDetails = (
    <ul>
      <li>Certificate of Membership</li>
      <li>One Loggerhead Sea Turtle Hatchling Birth Certificate.</li>
    </ul>
  )

  const greenDetails = (
    <ul>
      <li>Certificate of Membership</li>
      <li>One Green Sea Turtle Hatchling Birth Certificate.</li>
    </ul>
  )

  const leatherbackDetails = (
    <ul>
      <li>Certificate of Membership</li>
      <li>One Leatherback Sea Turtle Hatchling Birth Certificate.</li>
    </ul>
  )

  const loggerheadNest = (
    <ul>
      <li>Certificate of Membership</li>
      <li>Five Loggerhead Sea Turtle Hatchling Birth Certificates</li>
    </ul>
  )
  const greenNest = (
    <ul>
      <li>Certificate of Membership</li>
      <li>Five Green Sea Turtle Hatchling Birth Certificates</li>
    </ul>
  )

  const leatherbackNest = (
    <ul>
      <li>Certificate of Membership</li>
      <li>Five Leatherback Sea Turtle Hatchling Birth Certificates</li>
    </ul>
  )

  const oceanHabitatContent = (
    <ul>
      <li>An honorable mention in a rescue video</li>
      <li>Ten Loggerhead Sea Turtle Hatchling Birth Certificates</li>
    </ul>
  )

  const resistExtinctionContent = (
    <ul>
      <li>Lifetime Membership</li>
      <li>4 "Resist Extinction" organic cotton T shirts</li>
      <li>15 Loggerhead Sea Turtle Hatchling Birth Certificates</li>
    </ul>
  )
  return (
    <div id='membership-wrapper'>
      <RouteLayout route='membership' title='Become A Supporting Member Of S.T.O.P.' comment='Every membership is a voice for the sea turtles and helps keep feet on the sand with buckets in hand!'>
        <div className='membership-container'>
          <Card contentList={loggerheadDetails} title='Threatened Loggerhead Membership' src={loggerhead} price={25} link={membershipLeatherback} />
          <Card contentList={greenDetails} title='Endangered Green Membership' src={green} price={50} link={membershipGreen} />
          <Card contentList={leatherbackDetails} title='Critically Endangered Leatherback Membership' src={leatherback} price={75} link={membershipLoggerhead} />
          <Card contentList={loggerheadNest} title='Sponsor Loggerhead nest' src={loggerhead} price={100} link={membershipLeatherbackNest} />
          <Card contentList={greenNest} title='Sponsor Green nest' src={green} price={150} link={membershipGreenNest} />
          <Card contentList={leatherbackNest} title='Sponsor Leatherback nest' src={leatherback} price={200} link={membershipLoggerheadNest} />
          <Card contentList={oceanHabitatContent} title='Ocean Habitat Sponsor' src={leatherback} price={500} link={oceanHabitat} />
          <Card contentList={resistExtinctionContent} title='Resist Extinction Earth Endowment' src={leatherback} price={1000} link={resistExtinction} />
        </div>
      </RouteLayout>
    </div>
  )
}

export default Membership
