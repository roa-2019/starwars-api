import React from 'react'
import { recieveSatellite, leapFrog } from '../apiClient'
const issId = 25544


class DisplayData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      satellites: []
    }
  }

  componentDidMount() {
    this.getSatelliteData()
    leapFrog()

  }

  // handleClick = (e) => {
  //   e.preventDefault()
  //   this.getSatelliteData()
  // }

  getSatelliteData = () => {
    return recieveSatellite()
      .then(satellite => {
        this.setState({
          satellites: JSON.parse(satellite.text).satellite

        })
      })
  }


  render() {

    const { satellites } = this.state
    return (
      <>
        {satellites.map((satellite) =>
          <div key ={satellite.id} className = 'tile'>
            <h4>Logged: {satellite.created_at}</h4>
            <li >
              Lat.{satellite.latitude}<br></br>
              Long.{satellite.longitude}
            </li>
            <br></br>
          </div>
        )}
        {/* <h1>International Space Station</h1>
        <p>Lat: {data.latitude}</p>
        <p>Lng: {data.longitude}</p>
        <p>Logged: {data.timestamp}</p> */}



        <button onClick={this.handleClick}>Refresh</button>
      </>
    )
  }
}

export default DisplayData