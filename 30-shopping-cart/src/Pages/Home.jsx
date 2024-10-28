import React from 'react'
import { products } from '../Products'
import ProductCart from '../Components/ProductCart'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>List Products</h1>
      <div className="grid lg:grid-col-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((product, key) => {
          return <div>
            <ProductCart key={key} data={product}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default Home
