import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuIcon(props: any) {
    return (
        <Link className="w-fit h-fit" to={props.path}>
            <img className=" transition hover:scale-110 duration-150 self-center w-6" src={props.icon} alt="" />
        </Link>
    )
}
