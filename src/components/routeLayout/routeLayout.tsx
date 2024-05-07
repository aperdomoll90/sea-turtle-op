import { Footer } from '@/layout/footer/Footer'
import { routeLayoutPropsTypes } from './routeLayout.types'
import './styles.css'
const trecks = '/assets/trecks.png'
const volunteer = '/assets/volunteer.png'
const membership = '/assets/membership.png'
const donate = '/assets/donate.png'

const RouteLayout: React.FC<routeLayoutPropsTypes> = ({ route, title, comment, children }) => {
  return (
    <div className='routeLayout-wrapper'>
      <div className='routeLayout-header flex flex-col'>
        <div>
          <p className='routeLayout-route'>{route}</p>
          <p className='routeLayout-title'>{title}</p>
        </div>
        <p className='routeLayout-comment'>{comment}</p>
      </div>
      <div className='routeLayout-content'>{children}</div>
      <Footer />
    </div>
  )
}

export default RouteLayout
