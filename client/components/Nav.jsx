import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export default function Nav() {
  return (
    <Router>
      <div className = 'nav'>
        <ul>
          <li><Link to = '/weather'>Weather</Link></li>
        </ul>
      </div>
    </Router>
  )
}