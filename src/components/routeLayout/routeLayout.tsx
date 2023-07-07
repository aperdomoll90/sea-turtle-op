import { routeLayoutPropsTypes } from './routeLayout.types'
import './styles.css'

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
      <div className='routeLayout-content flex flex-col content-center justify-center items-center h-screen'>{children}</div>
    </div>
  )
}

export default RouteLayout
