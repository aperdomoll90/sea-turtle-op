import React from 'react'
import './styles.css'
import { Model } from '@/components/model/Model'

const copyRight = (
  <>
    <p className='copy-right-text bold m-t-06 '>
      Founded In 2007, STOP Is A Non-Profit, Sea Turtle Conservation Organization Of Volunteers With No Paid Staff. STOP Rescues Hatchlings, Documents Hatchling Disorientation, And Records And Publishes Hatch Data For Research And Educational Purposes In Accordance With The Freedom Of Information
      Act.
    </p>
    <p className='copy-right-text t-07 m-t-06 '>
      STOP works within the law and explicitly for the law under a special marine turtle permit issued by FWC to recover disoriented hatchlings, collect hatch data and documentation which is then provided to the appropriate authorities, research institutions and the general public. While STOP
      advocates that citizens communicate with their city officials, STOP does NOT support, endorse or tolerate any harassment, inappropriate or unbecoming behavior of any kind within its volunteer organization or on its behalf.
      <br />
    </p>
    <ul className='copy-right-text t-07 copy-right-list m-t-06 ' aria-label='With respect to each individuals rights of freedom of speech, STOP encourages these guidelines and common courtesy:'>
      <li>Please do not contact homeowners and businesses directly or encourage others to do so. Leave code enforcement issues to the proper authorities. It is your right to report code violations, but not to enforce compliance.</li>
      <li>Many homeowners and businesses are in fact victims of misinformation, poor code education, lack of code enforcement and years of misdirection from their municipalities and code departments. In other words... Don't bark up the wrong tree.</li>
      <li>STOP advocates enforcement of the law. Please show the same respect to the rights of others and the laws that you demand be enforced.</li>
      <li>It is your right to contact public officials to voice your opinion. Please to do so with respect and with factually accurate information. Please represent yourself and the turtles well. Please do not speak on behalf of STOP, but rather as a citizen.</li>
      <li> Please do not use STOP materials, logos or data inappropriately. Read the copyright and Terms of Use Agreement below.</li>
    </ul>
    <p className='copy-right-text t-07 m-t-06 '>
      Copyright and Legal Notice <br />
      <br />
      Unless otherwise noted, all logos, images, content, videos, links and pages contained in this site, seaturtleop.org or related social media sites are copyrighted ©2007-2015 by Sea Turtle Oversight Protection. All content and material is for educational and scientific research purposes only and
      not to be used in any manner which may be perceived as inappropriate, negative, harassing, threatening, unlawful or in violation of anyone's rights. By posting or sharing any content published by Sea Turtle Oversight Protection you agree to these terms. For questions regarding our privacy &
      security policy, copyright or website, in general, please contact us by phone 954-404-0025 or e-mail website@seaturtleop.org .
    </p>
  </>
)

const disclosure = (
  <>
    <p className='copy-right-text bold t-07'>
      Sea Turtle Oversight Protection, Inc is a 501(c)3 organization Florida Charitable Registration # CH33894 | FEIN#: 90-0609123
      <br />
      "A COPY OF THE OFFICIAL REGISTRATION AND FINANCIAL INFORMATION MAY BE OBTAINED FROM THE DIVISION OF CONSUMER SERVICES BY CALLING TOLL-FREE WITHIN THE STATE. REGISTRATION DOES NOT IMPLY ENDORSEMENT, APPROVAL, OR RECOMMENDATION BY THE STATE."
    </p>
    <br />
    <p className='copy-right-text t-07'>The Division of Consumer Services may be used to obtain registration information. They may be contacted at:</p>
    <br />
    <ul className='copy-right-text t-07 copy-right-list' aria-label='With respect to each individuals rights of freedom of speech, STOP encourages these guidelines and common courtesy:'>
      <li>1-800-HELP-FLA (435-7352)</li>
      <li>www.FloridaConsumerHelp.com</li>
    </ul>
  </>
)
export const Footer = () => {
  const [visible, setVisible] = React.useState(false)
  const [modelContent, setModelContent] = React.useState({ tittle: '', content: <></> })

  const getModelInfo = (type: 'copyRight' | 'disclosure') => {
    if (type === 'copyRight') {
      setModelContent({ tittle: 'Copyright And Legal Notice', content: copyRight })
      setVisible(true)
    } else if (type === 'disclosure') {
      setModelContent({ tittle: 'Disclosure Requirements', content: disclosure })
      setVisible(true)
    }
  }

  return (
    <footer className='center'>
      <div className='footer-links'>
        <a className='footer-icon instagram-link' href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' />
        <a className='footer-icon twitter-link' href='https://www.twiter.com' target='_blank' rel='noopener noreferrer' />
        <a className='footer-icon facebook-link' href='https://www.facebook.com/SeaTurtleOversightProtection' target='_blank' rel='noopener noreferrer' />
      </div>
      <div className='footer-text center'>
        <p>Sea Turtle Oversight Protection, Inc 2015 - Ft. Lauderdale Florida USA</p>
        <button className='footer-button' onClick={() => getModelInfo('copyRight')}>| Copyright and Legal Notice</button>
        <button className='footer-button' onClick={() => getModelInfo('disclosure')}>| Disclosure Requirements</button>
      </div>

      {visible && <Model tittle={modelContent.tittle} content={modelContent.content} setVisible={setVisible} />}
    </footer>
  )
}
