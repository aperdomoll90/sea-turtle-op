'use client'
/* eslint-disable */
import React from 'react'
import './styles.css'
import RouteLayout from '@/components/routeLayout/routeLayout'

export default function Learn() {
  return (
    <RouteLayout route='Learn' title='About Sea Turtles' comment='They survived that mass extinction. Yet today all 7 species of sea turtle in the world are Threatened, Endangered, or Critically Endangered'>
      <div className='learn-container'>
        <h3>About Sea Turtles</h3>
        <p>Sea turtles have been an important part of ocean ecosystems for over 100 million years- since the time of dinosaurs! They survived that mass extinction. Yet today all 7 species of sea turtle in the world are Threatened, Endangered, or Critically Endangered due to human related causes.</p>
        <p>
          Sea turtles have an incredibly long life cycle, estimated to be 100 years or more. Sexual maturity does not occur until 25 to 30 years old, which varies by species. This means they must survive against insurmountable odds in order to just reproduce for the first time. Research has yet to
          determine how long they can reproduce.
        </p>
        <p>
          The survival of sea turtles under natural circumstances, is estimated to be 1 in 1,000. When adding human related threats such as sea level rise, commercial fishing, the ingestion of plastics, boat strikes, water pollution and so much more, their survival rate is now estimated to be 1 in
          7,000 to 10,000.
        </p>
        <p>
          Sea Turtles are protected under Federal Law- the Endangered Species Act of 1973, as well as Florida Marine Turtle Protection (Chapter 370) introduced in 1997. These protections include hatchlings, adults, eggs and their nests. Violations can result in fines up to $50,000 and imprisonment
          for up to 1 year.
        </p>
        <h3>Species</h3>
        <p>There are 3 sea turtle species that nest on Florida's East Coast: Leatherback, Loggerhead and Green.</p>
        <h4>Leatherback:</h4>
        <ul data-doted={true}>
          <li>Listed as CRITICALLY ENDANGERED</li>
          <li>The largest sea turtle species</li>
          <li>Named for it's soft, leathery shell</li>
          <li>Pelagic (lives and feeds in the deepest parts of the open ocean)</li>
          <li>Feeds exclusively on jellyfish</li>
          <li>4-7 feet long</li>
          <li>Major threats include ocean pollution (plastic bags & balloons look like jellyfish!), commercial fishing and coastal development</li>
        </ul>

        <h4>Loggerhead:</h4>
        <ul data-doted={true}>
          <li>Atlantic population is listed as THREATENED</li>
          <li>Most common nesting turtle on Florida's east coast</li>
          <li>Mature adults have amber skin and large head </li>
          <li>Lives between the reef systems and deep sea</li>
          <li>Powerful jaws are used for crushing shellfish, it's primary diet</li>
          <li>3-4 feet long</li>
          <li>150-375 lbs.</li>
          <li>Major threats include plastic ingestion (post hatchling stage), commercial fishing, coastal development, red tide and boat strikes</li>
        </ul>

        <h4>Green:</h4>
        <ul data-doted={true}>
          <li>De-Listed from ENDANGERED to THREATENED in 2019</li>
          <li>Mature adults have green muscle & fat</li>
          <li>Adults are vegetarian, consuming sea grasses, algae and seaweed</li>
          <li>Live between the coast and coral reef systems</li>
          <li>3.5-5 feet long</li>
          <li>250-450 lbs.</li>
          <li>Major threats include water pollution, decreased food availability, marine plastics, boat strikes and coastal development</li>
        </ul>
      </div>
    </RouteLayout>
  )
}
