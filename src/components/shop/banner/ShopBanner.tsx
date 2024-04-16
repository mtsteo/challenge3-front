import React from 'react'
import ShopBanner from '../../../assets/images/ShopBanner.jpg'
import { Link } from 'react-router-dom'


export default function () {
    return (
        <div className='relative '>
            <img className='blur-[3px] opacity-60 ' src={ShopBanner} alt="" />
            <div className='absolute top-[50%] right-[50%]'>
                <div className='text-5xl font-medium'>Shop</div>
                <div className='flex gap-2 mt-4 justify-center items-center'>
                    <Link to="/home" className='text-lg font-medium'>Home</Link>
                    <h1 className='font-medium text-2xl'>&gt;</h1>
                    <h1 className='font-normal'>Shop</h1>
                </div>
            </div>
        </div>
    )
}
