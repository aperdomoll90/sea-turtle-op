import Link from 'next/link'
import './styles.css'
import { useState } from 'react'
interface CardProps {
  src: string
  price: number
  title: string
  link: string
  contentList: JSX.Element
}

const PlusSVG = () => (
  <svg className='plus-svg' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 5.5V18.5' stroke='#333333' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.5 12H18.5' stroke='#333333' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export const Card: React.FC<CardProps> = ({ src, price, title, link, contentList }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='name-hatchling-alt-card' data-visible={visible} style={{ backgroundImage: `url(${src})` }}>
      <h3>{title}</h3>
      <div className='name-hatchling-alt-card-content' data-visible={visible} aria-hidden={!visible}>
        {contentList}
      </div>
      <Link href={link} className='name-hatchling-alt-button-position' data-visible={visible} aria-hidden={!visible}>
        <button className='name-hatchling-alt-button' role='button'>
          <p>
            Give <span>${price}</span>
          </p>
        </button>
      </Link>
      <button className='circular-button' data-visible={visible} onClick={() => setVisible(!visible)}>
        <PlusSVG />
      </button>
    </div>
  )
}
