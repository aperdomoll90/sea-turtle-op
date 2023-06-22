'use client'
import './styles.css'
import { useState } from 'react'
import { NavBarPropsTypes, menuItemsArrayPropsTypes } from './NavBar.type'
import { ToggleButton } from '../ToggleButton'
const logo = '/assets/logoW.png'

export const NavBar: React.FC<NavBarPropsTypes> = () => {
  const [visible, setVisible] = useState(false)

  const menuItemsArray = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Shop',
      link: '/shop',
    },
    {
      label: 'Events',
      link: '/turtletreks',
    },
    {
      label: 'How to help',
      link: '/donations',
    },
    {
      label: 'Whats new',
      link: '/news',
    },
  ]

  const renderSingleMenuLink = (index: number, link: string, children: string) => (
    <li key={`${children}-${index}`} className='NavBar-active'>
      <a className='NavBar-link' href={link}>
        <span aria-hidden='true'>0{index}</span>
        {children}
      </a>
    </li>
  )

  const renderSubMenuLink = (index: number, link: string, children: string, submenu?: boolean) => {
    const [visible, setVisible] = useState(false)
    return (
      <li key={`${children}-${index}`} className='NavBar-active'>
        <a className='NavBar-link' onClick={() => setVisible(!visible)}>
          <span aria-hidden='true'>0{index}</span>
          {children}
        </a>
        {visible && <ul className='NavBar-submenu'></ul>}
      </li>
    )
  }

  return (
    <section id='primary-header' className='primary-header flex-row'>
      <div>{logo && <img src={logo} className='primary-logo' />}</div>
      <ToggleButton
        top={1}
        right={1}
        customClass='mobile-nav-toggle'
        ariaControls='primary-navigation'
        ariaExpanded={visible}
        active={visible}
        setActive={() => {
          setVisible(!visible)
        }}
        buttonBackgroundColor='transparent'
      />
      <nav>
        <ul id='primary-navigation' aria-expanded={visible} data-visible={visible} className='primary-navigation uppercase ff-sans-cond flex-row'>
          {renderSingleMenuLink(0, menuItemsArray[0].link, menuItemsArray[0].label)}
          {renderSingleMenuLink(1, menuItemsArray[1].link, menuItemsArray[1].label)}
          {renderSingleMenuLink(2, menuItemsArray[2].link, menuItemsArray[2].label)}
          {renderSingleMenuLink(3, menuItemsArray[3].link, menuItemsArray[3].label)}
          {renderSingleMenuLink(4, menuItemsArray[4].link, menuItemsArray[4].label)}
        </ul>
      </nav>
    </section>
  )
}
