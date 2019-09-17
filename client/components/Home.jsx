import React from 'react'
import { Link } from 'react-router-dom'


const Home = props => {
  return (
    <>
      <p>Coming from Home Component</p>
      <h1>StarWars</h1>
      <ul>
        <li><Link to="/planets">Planets</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/starships">Starships</Link></li>
        <li><Link to="/about/easter-egg">🐇</Link></li>
        <li><Link to="/about/normal-egg">About Normal</Link></li>
      </ul>
    </>
  )
}

export default Home