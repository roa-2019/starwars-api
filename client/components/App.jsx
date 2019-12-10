import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './Nav'
import DisplayData from './DisplayData'
import Weather from './Weather'

const App = () => (
  <Router>
    <div className='app'>
      <div className='header'>
        {/* <Nav /> */}
      </div>
      <DisplayData />
    </div>
    <Route path="/weather" component= {Weather} /> 
  </Router>
)



export default App