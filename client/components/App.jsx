import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { getSatellite } from '../apiClient'
const issId = 25544

import People from './People'
import Planets from './Planets'
import Starships from './Starships'
import About from './About'
import Home from './Home'


// const App = () => {

//   return (
//     <Router>
//       <>
//         <Route path="/" component={Home} />
//         <Route path="/planets" component={Planets} />
//         <Route path="/people" component={People} />
//         <Route path="/starships" component={Starships} />
//         <Route path="/about/:egg" component={About} />
//       </>
//     </Router>
//   )
// }


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      satellite: {}
    }
  }

  componentDidMount() {
    this.getSatelliteData()
  }

  getSatelliteData = () => {
    return getSatellite(issId)
      .then(satellite => {
        this.setState({
          satellite: JSON.parse(satellite.text)
        })
      })
  }

  render() {
    return (
      <>
        <h1>Internation Space Station</h1>
        Lat: {this.state.satellite.latitude}
      </>
    )
  }
}



export default App
