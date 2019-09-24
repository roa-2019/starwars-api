import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Weather from './Weather'

export default function Nav() {
  return (
    <nav>
      <div className='nav'>
        <ul>
          <li><Link to='/weather'>Weather</Link></li>
        </ul>
      </div>
    </nav>
  )
}