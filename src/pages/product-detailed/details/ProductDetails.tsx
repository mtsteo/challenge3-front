import React from 'react'
import ProductMini from '../../../components/products/ProductMini'

export default function () {

  const images = []

  
  return (
    <section className='mt-12'>
      <div className='grid grid-cols-2'>
        <div className='flex justify-center items-center ml-10'>
          <div className='flex flex-row'>
            <div className='flex flex-col gap-4'>
              {Array.from({length : 4}, ()=>(<ProductMini img="https://i.postimg.cc/KYM5wx34/sofas.png"/>))}
            </div>
            <div className='flex justify-center items-center'>
              <img className='rounded-2xl' src="https://i.postimg.cc/KYM5wx34/sofas.png" alt="" />
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center  bg-red-600' >details</div>
      </div>
    </section>
  )
}
