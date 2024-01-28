import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav(Props) {
  let keys = Object.keys(Props.value)
  console.log(keys)
  return (
    <div>
      <ul>
       { keys.map((key)=><li><Link className='navLink' to={Props.value[key]}>{key.replace("_"," ")}</Link></li>)}
      </ul>
    </div>
  )
}
