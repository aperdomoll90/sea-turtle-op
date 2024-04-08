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

  const renderAllAccordionBullet = (indicator: number, label: string, content: any) => {
    return (
      <>
        {content?.map((item: menuItemsArrayPropsTypes, index: number) => (
          <li key={item.id} className='NavBar-active'>
            <a className='NavBar-link' href={item.link}>
              <span aria-hidden='true'>{index < 10 ? `0${index}` : index}</span>
              {item.label}
            </a>
          </li>
        ))}
      </>
    )
  }

  const renderAccordionBullet = (link: string, label: string) => {
    return (
      <div className='NavBar-active'>
        <a className='NavBar-link' href={link}>
          {label}
        </a>
      </div>
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
      <nav className='navbar'>
        <div id='primary-navigation' aria-expanded={visible} data-visible={visible} className='primary-navigation uppercase ff-sans-cond flex-row'>
          {/* {renderAllAccordionBullet(0, 'All', allLinks)} */}
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
      </nav>
    </section>
  )
}
