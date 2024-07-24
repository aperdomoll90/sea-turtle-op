'use client'
/* eslint-disable */
import React from 'react'
import './styles.css'
import RouteLayout from '@/components/routeLayout/routeLayout'

export default function Lights() {
  return (
    <RouteLayout route='Sea Turtles & Lights' title='the brightest unobstructed horizon' comment='Artificial lights cause sea turtle hatchlings to wander away from the ocean and towards the brightest lights'>
      <div className='lights-container'>
        <h3>Sea Turtles & Lights</h3>
        <p>
          Not so long ago, it was easy for a nesting sea turtle to finding a quiet, dark beach to make her nest. Now, Florida's coast is now lined with infrastructure (condominiums, businesses, hotels and private residences) and more people on the beach after dark, especially in areas of high
          tourism. Lights from these developments and human presence (including flashlights) can be dangerous for nesting female sea turtles and hatchlings. Lights and loud noises discourage female turtles from coming ashore to nest. For hatchlings, they have evolved to follow "the brightest
          unobstructed horizon", which, for thousands of years was the moon and stars shining on the surface of the ocean. Now, artificial lights along the coast lights cause sea turtle hatchlings to become disoriented, wandering away from the ocean and towards the brightest lights. Disoriented
          hatchlings die from dehydration, exhaustion, are killed by terrestrial predators and passing cars in parking lots and roadways. Since 2007, Sea Turtle Oversight protection has rescued over 260,000 sea turtle hatchlings from artificial light disorientation.
        </p>
        <h3> What is Light Pollution? </h3>
        <p>
          Light pollution is the introduction of artificial light into the environment and is one of the largest threats to sea turtle survival in developed areas along the coast. Light pollution also threatens many nocturnal and migratory animals, harms sensitive habitats, wastes electricity and
          destroys the beauty of the night sky. More research is showing that light (in our homes and smartphones) can impact our normal circadian rhythms, which allow our bodies the ability to rest and restore.
        </p>
        <h3>Balancing Safety & Sea Turtles </h3>
        <p>
          Sea turtle nesting beaches are special places where careful management of artificial lighting is needed. Research and new technology are now providing us with the tools to manage coastal lighting so it's safe for both people and sea turtles. There are three main rules for sea turtle
          friendly lighting:
        </p>
        <ul>
          <li>1. Keep it low. Mount the fixtures as low to the ground as possible and use low bulb wattage. </li>

          <li>2. Keep it shielded. Use full cut off fixtures that direct light down to the ground or shield fixtures so that you cannot see the bulb lamp or the glowing lens. </li>

          <li>
            3. Keep it long. Sea turtles are less disturbed by long wavelengths of light (570 nanometers or longer). Studies have shown that sea turtles do not perceive or they are not attracted to the long wavelengths of light, which appear to us as Red and Amber (or orange). However, white, blue,
            purple, green and yellow lights will attract sea turtle hatchlings.
          </li>
        </ul>
        <p>
          What you can do? All Broward County coastal municipalities have passed lighting ordinances which require lights to follow the above 3 rules or be turned off during sea turtle season, which is March to October on Florida's East Coast. Being informed is the first step in making a difference.
          Vote with your dollars!
        </p>
        <ul>
          <li>
            Always choose businesses that use sea turtle friendly lights. If you're staying at a beachfront hotel, close your blinds and curtains at night. If the condo or resort you were staying at does not have sea turtle friendly lights, Let the hotel management know that that's a concern for
            you.
          </li>
          <li>Don't shop or dine at establishments that are not following the sea turtle lighting ordinances.</li>
        </ul>
        <h3> Resources for Sea Turtle Friendly Lighting</h3>
        <p>Our fellow sea turtle advocates at Sea Turtle Conservancy provide comprehensive information regarding sea turtle friendly lighting and where to acquire products appropriate for your property or establishment.</p>

        <a href='https://conserveturtles.org/beachfront-lighting-turtle-friendly-fixtures-lights/' target='_blank'>
          https://conserveturtles.org/beachfront-lighting-turtle-friendly-fixtures-lights/
        </a>
        <br />
        <p>Further information, including ordinances by municipality can be found on Florida Wildlife Conservation Commission's website at</p>
        <a href='https://myfwc.com/conservation/you-conserve/lighting/' target='_blank'>
          https://myfwc.com/conservation/you-conserve/lighting/
        </a>
      </div>
    </RouteLayout>
  )
}
