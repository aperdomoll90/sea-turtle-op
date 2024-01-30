import RouteLayout from '@/components/routeLayout/routeLayout'
import './styles.css'

import { Client, Environment, ApiError } from 'square'

const client = new Client({
  accessToken: process.env.SQUARE_UP_KEY,
  environment: Environment.Production,
})

const getProducts = async () => {
  try {
    const response = await client.catalogApi.listCatalog()

    return response.result.objects
  } catch (error) {
    console.log(error)
  }
}

export default async function Shop() {
  const products = await getProducts()
  console.log('products', products)
  return (
    <div className='shop-wrapper'>
      <RouteLayout route='shop' title='Welcome To The S.T.O.P. Shop!' comment='The Most Environmental And Sustainable Products We Could Find From Around The World.'>
        <div id='shop-wrapper'>
          <ul id='shop-card-container'>
            {products?.map((product: any) => {
              return (
                <li key={product.id} className='shop-card'>
                  <h3>{product.itemData?.name ? product.itemData.name : ''}</h3>
                  <p>{product.itemData?.description ? product.itemData.description : ''}</p>
                  <hr />
                </li>
              )
            })}
          </ul>
          <div id="shop-detail-container"></div>
        </div>
      </RouteLayout>
    </div>
  )
}
