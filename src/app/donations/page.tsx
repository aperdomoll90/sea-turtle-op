import RouteLayout from '@/components/routeLayout/routeLayout'
import './styles.css'

const Donations = () => {
  return (
    <div className='donations-wrapper'>
      <RouteLayout route='donations' title='Fueled By Donations, Love And Coffee' comment='We Accept All 3 To Helps Keep Us Going, Especially Donations! You Can Set Up One Time Or Recurring Donations From Here.'>
        <p>Donations</p>
      </RouteLayout>
    </div>
  )
}

export default Donations
