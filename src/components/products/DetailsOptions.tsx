import React from 'react'

export default function DetailsOptions(props : any) {
    return (
        <div className="flex flex-row gap-2 hover:cursor-pointer">
            <img className="" src={props.icon} alt="" />
            <h1 className="text-white font-semibold">{props.name}</h1>
        </div>
    )
}
