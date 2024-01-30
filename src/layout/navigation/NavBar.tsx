'use client'
import './styles.css'
import { useState } from 'react'
import { NavBarPropsTypes, menuItemsArrayPropsTypes } from './NavBar.types'
import { ToggleButton } from '../navigation/ToggleButton'
const logo = '/assets/logoW.png'

export const NavBar: React.FC<NavBarPropsTypes> = () => {
  const [visible, setVisible] = useState(false)

  const allLinks = [
    {
      id: 0,
      label: 'Home',
      link: '/',
    },
    {
      id: 1,
      label: 'Shop',
      link: '/shop',
    },
    {
      id: 2,
      label: 'Donations',
      link: '/donations',
    },
    {
      id: 3,
      label: 'Membership',
      link: '/membership',
    },
    {
      id: 4,
      label: 'Name a hatchling',
      link: '/hatchling',
    },
    {
      id: 5,
      label: 'Volunteer',
      link: '/volunteer',
    },
    {
      id: 6,
      label: 'Turtle Treks',
      link: '/turtletreks',
    },
    {
      id: 7,
      label: 'Tablings',
      link: '/tablings',
    },
    {
      id: 8,
      label: 'News',
      link: '/news',
    },
    {
      id: 9,
      label: 'Gallery',
      link: '/gallery',
    },
    {
      id: 10,
      label: 'News',
      link: '/news',
    },
    {
      id: 11,
      label: 'Contact',
      link: '/contact',
    },
  ]

  const renderAllAccordionBullet = (indicator: number, label: string, content: any) => {
    return (
      <>
        {content?.map((item: menuItemsArrayPropsTypes, index: number) => (
          <li className='NavBar-active'>
            <a key={item.id} className='NavBar-link' href={item.link}>
            <span aria-hidden='true'>{(index < 10) ? `0${index}` : index}</span>
              {item.label}
            </a>
          </li>
        ))}
      </>
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
        <ul id='primary-navigation' aria-expanded={visible} data-visible={visible} className='primary-navigation uppercase ff-sans-cond flex-row'>
          {renderAllAccordionBullet(0, 'All', allLinks)}
        </ul>
      </nav>
    </section>
  )
}
