import React from 'react'
import './styles.css'
import Marquee from 'react-fast-marquee'

interface IMarqueeProps {
  children: any
  label: string
  direction?: 'left' | 'right'
}

const SupporterMarquee: React.FC<IMarqueeProps> = ({ children, direction, label }) => {
  return (
    <div className='marquee-wrapper flex flex-col justify-center items-center'>
      <h3>{label}</h3>
      <Marquee  speed={40} pauseOnHover direction={direction}>
        {children}
      </Marquee>
    </div>
  )
}

export default SupporterMarquee
