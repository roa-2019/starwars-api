import React from 'react'

const About = props => {
  return (
    <>
      <h1>About {props.match.params.egg.toUpperCase()}</h1>
    </>
  )
}

export default About