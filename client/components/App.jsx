import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './Nav'
import DisplayData from './DisplayData'

const App = () => (
  <div className='app'>
    <Nav/>
    <DisplayData />

  </div>
)



export default App