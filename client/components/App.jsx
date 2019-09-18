import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { getSatellite } from '../apiClient'
import DisplayData from './DisplayData'
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

    const data = this.state.satellite

    return (
      <>
        <DisplayData data={data} />
        <h1>International Space Station</h1>
        <p>Lat: {data.latitude}</p>
        <p>Lng: {data.longitude}</p>
        <button onClick={this.handleClick}>Refresh</button>
      </>
    )
  }
}

// const App = () => {
// <div className = 'app'>

// </div>
// }



export default App
