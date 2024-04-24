import React from 'react'
import { data } from '../../../mock-data'
import ProductCard from '../../../components/products/product-card/ProductCard'

export default function RelatedProduct(props :any) {

  
  return (
    <section className='mt-20'>
      <div className='flex justify-center items-center'>
        <h1 className='text-4xl font-medium'>Related Products</h1>
      </div>
      <div className='flex flex-row gap-10 justify-center item-center'>
        {data.slice(0, 4).map((prod)=>{
          return <ProductCard data={prod}/>
        })}
      </div>
    </section>
  )
}
