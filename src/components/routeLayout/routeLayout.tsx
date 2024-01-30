import { routeLayoutPropsTypes } from './routeLayout.types'
import './styles.css'
const trecks = '/assets/trecks.png'
const volunteer = '/assets/volunteer.png'
const membership = '/assets/membership.png'
const donate = '/assets/donate.png'

const RouteLayout: React.FC<routeLayoutPropsTypes> = ({ route, title, comment, children, isContact }) => {
  return (
    <div className='routeLayout-wrapper'>
      <div className='routeLayout-header flex flex-col'>
        <div>
          <p className='routeLayout-route'>{route}</p>
          <p className='routeLayout-title'>{title}</p>
        </div>
        <p className='routeLayout-comment'>{comment}</p>

        {isContact && (
          <div className='home-contact-services-container'>
            <div className='home-contact-services' style={{ '--rotation': 9, '--i': 9 } as React.CSSProperties}>
              <div className='rotation-stabilizer-container'>
                <img className='home-contact-services-icons' data-per='donate' src={trecks} />
                <p className='home-contact-services-text'>TRECKS</p>
              </div>
            </div>
            <div className='home-contact-services' style={{ '--rotation': 9, '--i': 10.1 } as React.CSSProperties}>
              <div className='rotation-stabilizer-container'>
                <img className='home-contact-services-icons' data-per='donate' src={donate} />
                <p className='home-contact-services-text'>DONATE</p>
              </div>
            </div>
            <div className='home-contact-services' style={{ '--rotation': 9.5, '--i': 11.1 } as React.CSSProperties}>
              <div className='rotation-stabilizer-container'>
                <img className='home-contact-services-icons' data-per='donate' src={membership} />
                <p className='home-contact-services-text'>MEMBERSHIP</p>
              </div>
            </div>
            <div className='home-contact-services' style={{ '--rotation': 9, '--i': 12 } as React.CSSProperties}>
              <div className='rotation-stabilizer-container'>
                <img className='home-contact-services-icons' data-per='donate' src={volunteer} />
                <p className='home-contact-services-text'>VOLUNTEER</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='routeLayout-content flex flex-col content-center justify-center items-center h-screen'>{children}</div>
    </div>
  )
}

export default RouteLayout
