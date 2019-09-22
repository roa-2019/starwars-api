import React from 'react'
import { recieveSatellite , leapFrog } from '../apiClient'
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

  handleClick = (e) => {
    e.preventDefault()
    this.getSatelliteData()
  }

  getSatelliteData = () => {
    return recieveSatellite()
      .then(satellite => {
        this.setState({
          satellites: JSON.parse(satellite.text).satellite

        })
      })
  }


  render() {

    const {satellites} = this.state
    console.log(satellites)
    return (
      <>
      {satellites.map((satellite) => <li>{satellite.latitude}{satellite.longitude}</li>)}
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