import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import People from './People'
import Planets from './Planets'
// import { getFruits } from '../apiClient'
// import { CustomConsole } from '@jest/console'

const App = () => {
  return (
    <Router>
      <>
        <ul>
          <li><Link to="/planets">Planets</Link></li>
          <li><Link to="/people">People</Link></li>

        </ul>
        <Route path="/planets" component={Planets} />
        <Route path="/people" component={People} />
      </>
    </Router>
  )
}

export default App
