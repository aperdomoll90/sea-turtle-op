'use client'
import './styles.css'
import { useState } from 'react'
import { NavBarPropsTypes, menuItemsArrayPropsTypes } from './NavBar.types'
import { ToggleButton } from '../navigation/ToggleButton'
const logo = '/assets/logo.svg'

export const NavBar: React.FC<NavBarPropsTypes> = () => {
  const [visible, setVisible] = useState(false)

  const shop = 'https://SeaTurtleOP.square.site/s/order'
  const donation = 'https://square.link/u/dlO6GG5f'
  const turtleTrek = 'https://seaturtleop.square.site/turtle-treks'

  const renderAccordionBullet = (link: string, label: string) => {
    return (
      <a className='NavBar-link NavBar-active' href={link}>
        {label}
      </a>
    )
  }

  return (
    <section id='primary-header' className='primary-header flex-row'>
      <a href='/'>{logo && <img src={logo} className='primary-logo' />}</a>
      <ToggleButton
        top={1}
        right={4}
        customClass='mobile-nav-toggle'
        ariaControls='primary-navigation'
        ariaExpanded={visible}
        active={visible}
        setActive={() => {
          setVisible(!visible)
        }}
        buttonBackgroundColor='transparent'
      />
      <div className='navbar'>
        <div id='primary-navigation' aria-expanded={visible} data-visible={visible} className='primary-navigation uppercase ff-sans-cond flex-row'>
          {renderAccordionBullet('/', 'Home')}
          {renderAccordionBullet(shop, 'Shop')}
          <p className='navbar-dividers'>How to support Us</p>
          {renderAccordionBullet(donation, 'Donations')}
          {renderAccordionBullet('/hatchling', 'Name a hatchling')}
          {renderAccordionBullet('/volunteer', 'Volunteer')}
          {renderAccordionBullet('/membership', 'Membership')}
          {renderAccordionBullet(turtleTrek, 'Turtle Treks')}
          <p className='navbar-dividers'>Get to Know us</p>
          {/* {renderAccordionBullet('/gallery', 'Gallery')} */}
          {renderAccordionBullet('/contact', 'Contact')}
        </div>
      </div>
    </section>
  )
}
