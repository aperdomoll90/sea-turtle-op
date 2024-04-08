import './styles.css'
interface CardProps { 
    src: string
    price: number
    title: string
    link: string
    contentList: JSX.Element
}

export const Card: React.FC<CardProps>  = ({ src, price, title, link, contentList }) => {
  return (
    <span className='name-hatchling-card'>
      <img src={src} alt={`sea-turtle-hatchling`} className='hatchling-image' />
      <h3>{title}</h3>
      {contentList}
      <div className='name-hatchling-details'>
        <p>
          Price: <span>${price}</span>
        </p>
        <a className='name-hatchling-button' href={link}>
          Sign up
        </a>
      </div>
    </span>
  )
}
