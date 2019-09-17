import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { getSatellite } from '../apiClient'
const issId = 25544
// let data = this.state.satellite

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


   handleClick = (e) => {
     e.preventDefault()
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
    console.log(this.state)
    const data = this.state.satellite
    console.log(data)
    console.log(Object.values(data))
    return (
      <>
        <h1>International Space Station</h1>
        <p>Lat: {this.state.satellite.latitude}</p>
        <p>Lng: {this.state.satellite.longitude}</p>
        <button onClick={this.handleClick}>Refresh</button>
        {/* {this.state.satellite.map((satellites, i) => console.log(satellite.text))} */}
        {/* {data.map((satellite, i) => <p>{Object.values(satellite)}</p>)} */}
        {/* {data.map(satellite => {console.log('hello'))}} */}
        {data.map(data => (
          <li>{data.text}</li>
        ))}
      </>
    )
  }
}



export default App
