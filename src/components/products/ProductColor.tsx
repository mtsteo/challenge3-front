import React from 'react'

export default function ProductColor(props: any) {
  return (
    <button className={`rounded-full ${props.color} w-10 h-10` }></button>
  )
}
