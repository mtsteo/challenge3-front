import React from 'react'
import ProductMini from '../../../components/products/ProductMini'

export default function () {


  return (
    <section className='mt-12'>
      <div className='grid grid-cols-2'>
        <div className='flex justify-center items-center ml-10'>
          <div className='flex flex-row ml-10'>
            <div className='flex flex-col gap-4'>
              {Array.from({ length: 4 }, () => (<ProductMini img="https://i.postimg.cc/KYM5wx34/sofas.png" />))}
            </div>
            <div className='flex justify-center items-center'>
              <img className='rounded-2xl' src="https://i.postimg.cc/KYM5wx34/sofas.png" alt="" />
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-red-600 ' >
          <h1>Product Name</h1>
          <h1>Product price</h1>
          <div className='flex flex-row gap-4'>
            <div>stars</div>
            <h1>Costumer review</h1>
          </div>
          <h1>Product Description</h1>
          <h1>Size</h1>
          <div className=' flex flex-row gap-4'>
            <div>L</div>
            <div>XL</div>
            <div>XS</div>
          </div>
          <h1>color</h1>
          <div className=' flex flex-row gap-4'>
            <div>color1</div>
            <div>color2</div>
            <div>color3</div>
          </div>
          <div className='flex flex-row gap-3'>
            <div>amount</div>
            <div>add to cart</div>
            <div>compare</div>
          </div>
        </div>
      </div>
    </section>
  )
}
