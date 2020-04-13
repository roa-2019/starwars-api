import React from 'react'
import { deleteSatelliteData, recieveSatellite, leapFrog } from '../apiClient'
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
  }

  handleClick = (e) => {
    e.preventDefault()
    this.getSatelliteData()
  }

  handleDelete = (e) => {
    return deleteSatelliteData()
    .then(() => {
      this.setState({satellites: []})
    })
  }

  getSatelliteData = () => {
    return leapFrog()
    .then(() => {
      return recieveSatellite()
      .then(satellite => {
        console.log(satellite.body)
        this.setState({
          satellites: JSON.parse(satellite.text).satellite
        })
      })
    })
      
  }


  render() {

    const { satellites } = this.state
    return (
      <>
        <button onClick={this.handleClick}>Get Co-ordinates</button>
        <button onClick={this.handleDelete}>Delete</button>
          
          {satellites.map((satellite) =>
          <div key={satellite.id} className='tile'>
            <h3>Timestamp: {satellite.created_at}</h3>
            <li >
              Lat.{satellite.latitude}<br></br>
              Long.{satellite.longitude}<br></br>
            </li>
            <br></br>
          </div>
        )}
      </>
    )
  }
}

export default DisplayData