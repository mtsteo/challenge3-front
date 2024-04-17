import React from 'react'

export default function ProductMini(props: any) {
    return (
        <div className='w-20'>
            <img className='rounded-2xl' src={props.img} alt="image" />
        </div>
    )
}
