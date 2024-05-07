import React from 'react'
import './styles.css'
import { ContentModel } from '../ContentModel/ContentModel'

const AboutUs = () => {
  const [visible, setVisible] = React.useState(false)
  const modelContent = (
    <p>
      Incorrect coastal lighting causes sea turtle hatchings to go towards the City instead of to the sea! <br />
      STOP is a non-profit sea turtle conservation organization made up of local volunteers who conduct nighttime nest surveys and monitoring to rescue and release disoriented sea turtle hatchlings in Broward County, Florida.
      <br />
      STOP rescues disoriented hatchlings as well as sick or injured juvenile and adult marine turtles in all of Broward County Florida; Deerfield Beach, Hillsboro Beach, Pompano, Lauderdale by the Sea, Fort Lauderdale, Dania, Hollywood, and Hallandale. <br />
      Our program has reduced the hatchling mortality rate by over 50% in Broward County. Our FWCC certified nighttime survey volunteers monitor sea turtle nests and count the number of hatchlings that emerge. Hatchlings that go east to the ocean are left alone. Hatchlings that disorient to lights
      are documented and recovered in buckets. Rescued hatchlings are released into the sea or taken to Gumbo Limbo Nature Center in Boca Raton. We record the data with mobile devices in real-time using an app. Since 2007, STOP volunteers have bucketed over 240,000 hatchlings that disoriented to
      lights on Broward County beaches. However, STOP’s all night, volunteer rescue campaign is not the solution; correct, safe and night-healthy lighting is. Therefore, the focus of our program is to ensure the turtles do not lose their lives until municipalities to adhere to and enforce the
      existing coastal light ordinances, as required by the Endangered Species Act and the Marine Turtle Protection Act. <br />
      We help to educate the public by hosting sea turtle nesting habitat awareness and lighting workshops and offer presentations to schools, organizations and local businesses to increase sea turtle awareness. With our feet on the sand, we interact with tens of thousands of beach-goers each year
      during our nightly campaigns, providing them with helpful tips to avoid being a disturbance while on the nesting habitat. We also provide carefully controlled, guided eco-tours to reduce incidental interactions, that could have negative consequences for the animals. <br />
      We aim to provide solutions, to balance the scales and give the hatchlings a chance to begin their life.
    </p>
  )
  return (
    <div className='home-section about-us-section flex flex-col content-center justify-center items-center h-screen'>
      <div className='about-us-section-content flex flex-col justify-start items-start'>
        <h2 className='about-us-section-title'>About Us</h2>
        <p className='about-us-section-comment'>
          We are all volunteers. Regular people from all walks of life who have chosen to make a difference. <br />
          <br />
          For five to eight months out of the year, we re-arrange our lives to save disoriented sea turtle hatchlings. Sea Turtle People have to be a little crazy to get through the long nights, but the dedication of our volunteer staff is second to none.
          <br />
          <br />
          Being a STOP volunteer is the toughest job you will ever love.
        </p>
        <button className='action-button about-us-button' onClick={() => setVisible(true)}>
          Read More
        </button>
      </div>
      <div className='about-us-section-content flex flex-col items-end justify-end'>
        <h2 className='about-us-section-title'>Our Mission</h2>
        <p className='about-us-section-comment'>
          Our program has reduced the hatchling mortality rate by almost 50% in Broward County!
          <br />
          <br />
          We aim to provide a solution to a complex problem, to create awareness through education, to balance the scales and give the hatchlings a chance to begin their life.
        </p>
      </div>
     <ContentModel title='What Is STOP?' content={modelContent} setVisible={setVisible} visible={visible} />
    </div>
  )
}
export default AboutUs
