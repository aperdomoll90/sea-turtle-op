'use client'
import './styles.css'
import { useState } from 'react'
import { NavBarPropsTypes, menuItemsArrayPropsTypes } from './NavBar.types'
import { ToggleButton } from '../ToggleButton'
const logo = '/assets/logoW.png'

export const NavBar: React.FC<NavBarPropsTypes> = () => {
  const [visible, setVisible] = useState(false)

  const helpLinks = [
    {
      id: 1,
      label: 'Donations',
      link: '/donations',
    },
    {
      id: 2,
      label: 'Membership',
      link: '/membership',
    },
    {
      id: 3,
      label: 'Name a hatchling',
      link: '/hatchling',
    },
    {
      id: 4,
      label: 'Volunteer',
      link: '/volunteer',
    },
  ]
  const eventsLinks = [
    {
      id: 1,
      label: 'Turtle Treks',
      link: '/turtletreks',
    },
    {
      id: 2,
      label: 'Tablings',
      link: '/tablings',
    },
  ]

  const newsLinks = [
    {
      id: 1,
      label: 'News',
      link: '/news',
    },
    {
      id: 2,
      label: 'Gallery',
      link: '/gallery',
    },
  ]

  const contactLinks = [
    {
      id: 1,
      label: 'News',
      link: '/news',
    },
  ]

  const renderSingleMenuLink = (index: number, link: string, children: string) => (
    <li className='NavBar-active'>
      <a className='NavBar-link' href={link}>
        <span aria-hidden='true'>0{index}</span>
        {children}
      </a>
    </li>
  )

  const renderAccordionBullet = (indicator: number, label: string, content: any) => {
    const renderBullet = content?.map((item: menuItemsArrayPropsTypes, index: number) => (
      <a key={item.id} className='accordion-link' href={item.link}>
        {item.label}
      </a>
    ))
    return (
      <li className='accordion'>
        <a className='accordion-button uppercase ff-sans-cond'>
          <span aria-hidden='true'>0{indicator}</span>
          {label}
        </a>
        <ul className='accordion-content'>{renderBullet}</ul>
      </li>
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
        <ul
          id='primary-navigation'
          aria-expanded={visible}
          data-visible={visible}
          className='primary-navigation uppercase ff-sans-cond flex-row'>
          {renderSingleMenuLink(0, '/', 'Home')}
          {renderSingleMenuLink(1, '/shop', 'shop')}
          {renderAccordionBullet(2, 'Events', eventsLinks)}          {renderAccordionBullet(3, 'How to help', helpLinks)}
          {renderAccordionBullet(4, 'Whats new', newsLinks)}
          {renderSingleMenuLink(5, '/contact', 'Contact')}
        </ul>
      </nav>
    </section>
  )
}
