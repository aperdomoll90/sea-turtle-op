'use client'
import RouteLayout from '@/components/routeLayout/routeLayout'
import './styles.css'
import { useState } from 'react'
import Link from 'next/link'

const volunteerFormLink = 'https://forms.office.com/r/cMvZwGvqMm'

const accordionData = [
  {
    title: 'Rescue Personnel (June - October) ',
    content: (
      <ul>
        <li>Not for the faint of heart. This requires dedication and commitment. If you want to be on the FRONT LINES of sea turtle conservation, this is it.</li>
        <li>Minimum 8 hours per week for at least 8 weeks 4 to 8 hour nighttime shifts available shifts (8pm-4am)</li>
        <li>Mandatory training is initially conducted by the Florida Wildlife Conservation Commission (FWCC) with more detailed training by us, including 40 hours in the field with senior staff before managing your own nest assignments on the habitat (beach).</li>
        <li>
          Responsibilities include: Conduct night patrols of approximately 2 miles of habitat monitoring multiple nests in your assigned area for your shift, rescue, recover and release disoriented hatchlings. Collect statistical data of nesting habitat and hatchling disorientation. Engage with and
          educate the general public on the nesting habitat.
        </li>
      </ul>
    ),
  },
  {
    title: 'Events & Educational Outreach (Year-round)',
    content: (
      <ul>
        <li>
          Throughout the year, S.T.O.P. hosts tables at ocean conservation events and festivals for educational and awareness purposes to raise awareness, recruit more volunteers and fundraise (through the sale of earth-friendly products). If you love to interact with people and can be available on
          the weekends, we’d love your support.
        </li>
      </ul>
    ),
  },
  {
    title: 'Lighting Committee (Year-round)',
    content: (
      <ul>
        <li>
          A new committee formed to engage with the costal communities (hotels, condos, businesses) to educate them of the dangers of artificial lights with the ultimate goal of educating and getting everyone in compliance (or better) with existing lighting ordinances. This is a pivotal committee;
          if we can mitigate the lighting issues, less staff need to be on the beach. If you are organized, tenacious, like speaking in pubic and to local authorities (including City Council meetings), this is for you.
        </li>
      </ul>
    ),
  },
  {
    title: 'Marketing & Social Media (Year-round)',
    content: (
      <ul>
        <li>This multi-faceted committee looks after our website, our follower engagement (on social media, newsletters, etc.) and so much more. Persons with brand marketing, social media, graphic design and video editing experience are highly coveted.</li>
      </ul>
    ),
  },
  {
    title: 'Grant Writing & Fundraising (Year-round)',
    content: (
      <ul>
        <li>As a non-profit, fundraising and securing grants are the foundation to achieve our Mission. This team seeks grant opportunities and files the applications as well as brainstorms ways to raise funds and awareness of S.T.O.P.</li>
      </ul>
    ),
  },
  {
    title: 'Retail (Our physical and virtual STOP Shop)',
    content: (
      <ul>
        <li>Another way we raise funds is to sell earth &amp; sea turtle friendly products as our Headquarters, as well as our on-line store- S.T.O.P. Shop. If you have retail experience, like educating the public and seeking sustainable products that customers desire, this is the role for you.</li>
      </ul>
    ),
  },
]
const PlusSVG = () => (
  <svg className='plus-svg' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 5.5V18.5' stroke='#333333' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.5 12H18.5' stroke='#333333' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Volunteer = () => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)

  const handleAccordionClick = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? undefined : index))
  }
  const getOpenValue = (index: number) => {
    return activeIndex === index ? true : false
  }
  return (
    <RouteLayout
      route='Volunteer'
      title='Sea Turtle Volunteer Opportunities'
      comment='As a local, grassroots non-profit, we’re only as strong as our volunteer team! It takes a village to keep Sea Turtle Oversight Protection operational, so we have many opportunities available- both on and off the beach. How would you like to serve?'>
      <div id='volunteer-wrapper'>
        <div className='accordion'>
          {accordionData.map((item, index) => (
            <div className='accordion-item' key={index}>
              <div data-active={getOpenValue(index)} className='accordion-header' onClick={() => handleAccordionClick(index)}>
                <button data-open={getOpenValue(index)} className='accordion-button' role='button'>
                  <PlusSVG />
                </button>
                {item.title}
              </div>
              <div aria-hidden={!getOpenValue(index)} data-open={getOpenValue(index)} className='accordion-content'>
                {item.content}
              </div>
            </div>
          ))}
        </div>
        <p>
          Each position requires a very unique set of skills and stamina, but each serve the sea turtles in a meaningful way. Many of our rescue staff also support one (or more) of the above missions.
          <br />
          NOTE: Rescue Personnel have a defined enrollment period, as dictated by the Florida Wildlife Conservation Commission (FWCC). If you are interested in being a member of our rescue staff, complete your application ASAP. Training sessions are very limited.
        </p>

        <Link href={volunteerFormLink}>
          <button className='volunteer-form-button' role='button'>
            Apply Now!
          </button>
        </Link>
      </div>
    </RouteLayout>
  )
}

export default Volunteer
