import React from 'react'
import { getSatellite } from '../apiClient'
const issId = 25544


class DisplayData extends React.Component {
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
        <h1>International Space Station</h1>
        <p>Lat: {data.latitude}</p>
        <p>Lng: {data.longitude}</p>
        <button onClick={this.handleClick}>Refresh</button>
      </>
    )
  }
}

export default DisplayData