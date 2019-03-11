import React, { Component } from 'react'
import './Video.css'
import YouTube from 'react-youtube'
import { connect } from 'react-redux'
import { setPlayer } from '../actions/videoActions'

class Video extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoId: 'qpxWoAsYS2I'
    }
  }
  onReady = (event) => {
    this.props.setPlayer(event)
    this.props.player.playVideo()
  }
  onPlayerStateChange = (event) => {
    switch (event.data) {
      case -1:
        console.log('unstarted')
        break
      case 0:
        console.log('ended')
        event.target.playVideo()
        //remove first queue
        //play next video
        break
      case 1:
        console.log('playing')
        break
      case 2:
        console.log('paused')
        break
      case 3:
        console.log('buffering')
        break
      case 5:
        console.log('video cued')
        break
      default:
        break
    }
  }
  render() {
    return (
      <div className="resp-container">
        <YouTube className="resp-iframe"
          videoId={this.state.videoId}
          onReady={this.onReady}
          onStateChange={this.onPlayerStateChange}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  player: state.video.player
})

export default connect(mapStateToProps, { setPlayer })(Video)