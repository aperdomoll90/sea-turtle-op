import React from 'react'
import { ContentModel } from '../ContentModel/ContentModel'
import './styles.css'
const volunteers = '../../assets/volunteers.jpg'
const release = '../../assets/release.jpg'
const whiteclouds = '../../assets/Whiteclouds.jpg'

const OurBeginning = () => {
  const [visible, setVisible] = React.useState(false)
  const modelContent = (
    <p className='our-beginnings-modal-text'>
      Like so many things in life, it just began, without looking for it or even knowing about it.
      <br />
      On an early July morning in 2007, Siouxzen WhiteCloud made her way through the humid darkness to a Deerfield Beach to teach yoga. As she crossed A1A a sight awaited her. It was not a new sight, it had happened a thousand times before, but this time the right person was looking... <br />
      Stretched in front of her, covering the four-lane beach road, lifeless in the darkness of the fading night, were hundreds of run over baby loggerhead sea turtles. Following their perfect instinct to go towards the light of the moon and the stars reflecting on the sea, they had poured into A1A
      pulled west by its glaring street lights and were killed at just a few minutes old. <br />
      That day Siouxzen and her husband, Richard, called every sea turtle organization in the country, looking for help, guidance, reasons, answers. And that night they took their three-year-old daughter, Teakahla, and went out on the beach and sat next to a loggerhead sea turtle nest. Of the
      thousands in Broward County, they could cover at least one. Scheduled to move to New Mexico in two days, they changed their life plans and decided they could not leave Florida until the sea turtle hatchlings of Broward County were safe. <br />
      Richard launched into intense research of the coastal lighting problems and infractions, of the shortcomings of the Broward County contractor (under previous mismanagement) assigned to oversee the sea turtle conservation program, and started a grassroots group of volunteers who were willing to
      not sleep. It took several more summers of walking the beach all night with our red lights, buckets and FWC permit to get to where we are now. It took hundreds and thousands of more baby sea turtle hatchlings dying in streets, parking lots and dune vegetation before S.T.O.P. began to change
      things. Before we found an amazing network of support and die-hard volunteers. Before we got the attention of FWC, FWS, the news media, national conservation groups, and the world. Before we got our first four infrared night vision cameras and caught in real time the nightly disorientation of
      sea turtle hatchlings. Before using smartphones to compile volumes of never before collected, real-time data. <br />
      But it took much longer than several summers. It took decades before someone said, on the most important loggerhead nesting beach in the world, The endless, nightly slaughter of sea turtle hatchlings on Florida beaches has got to STOP!
    </p>
  )
  return (
    <div className='home-section our-beginnings-section'>
      <div className='our-beginnings-section-content'>
        <h2 className='our-beginnings-section-title'>Our Beginnings</h2>
        <p className='our-beginnings-section-comment'>
          Sea Turtle Oversight Protection (STOP) was founded in 2007 by the WhiteCloud Family, Richard, Siouxzen and their daughter Teakahla. STOP was the first program of its kind to rescue and release sea turtle hatchlings disoriented by coastal lighting in Broward County. STOP now has the highest
          number of FWCC Marine Turtle Permitted staff of any organization in Florida!
        </p>
        <button className='action-button our-beginnings-button' onClick={() => setVisible(true)}>
          Read More
        </button>
        {/* <img src={release} alt='photography of release of a baby turtle' className='fadeIn our-beginnings-image' />
        <img src={volunteers} alt='Volunteer team photography' className='fadeIn our-beginnings-image rotated' />
        <img src={whiteclouds} alt='whiteclouds volunteer team photography' className='fadeIn our-beginnings-image bottom' /> */}
      </div>
      <ContentModel title='How STOP Started' content={modelContent} setVisible={setVisible} visible={visible} />
    </div>
  )
}

export default OurBeginning
