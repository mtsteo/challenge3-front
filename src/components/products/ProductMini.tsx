import React from 'react'

export default function ProductMini(props: any) {
    return (
        <div onClick={()=>props.setImage(props.img)} className='w-20 hover:cursor-pointer'>
            <img className='rounded-2xl w-[80px] h-[80px]' src={props.img} alt="" />
        </div>
    )
}
