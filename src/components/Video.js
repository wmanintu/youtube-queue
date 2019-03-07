import React, { Component } from 'react'
import './Video.css'

// src="https://www.youtube.com/embed/c6t3bW7kx6E"
class Video extends Component {
  render() {
    return (
        <iframe
        title="youtube"
        width="100%"
        height="500px"
        src=""
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    )
  }
}

export default Video