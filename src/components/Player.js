import React, { Component } from 'react'
import './Player.css'
import YouTube from 'react-youtube'
import { connect } from 'react-redux'
import { setPlayer } from '../actions/videoActions'
import { removeFromQueue } from '../actions/queueActions'

class Video extends Component {
  onReady = (event) => {
    this.props.setPlayer(event)
  }
  onPlayerStateChange = (event) => {
    switch (event.data) {
      case -1:
        console.log('unstarted')
        break
      case 0:
        console.log('ended')
        //remove first queue
        if (this.props.queueList.length !== 0) {
          this.props.removeFromQueue(this.props.queueList[0].videoId)
          event.target.playVideo()
        }
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
        if (this.props.queueList.length !== 0) {
          this.props.player.playVideo()
        }
        break
      default:
        break
    }
  }
  handleVideoId () {
    if (this.props.queueList.length !== 0) {
      return this.props.queueList[0].videoId
    } else {
      return 'qpxWoAsYS2I'
    }
  }
  render() {
    let videoId = this.handleVideoId()
    return (
      <div className="resp-container">
        <YouTube className="resp-iframe"
          videoId={videoId}
          onReady={this.onReady}
          onStateChange={this.onPlayerStateChange}
          />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  player: state.video.player,
  queueList: state.queue.list
})

export default connect(
  mapStateToProps, {
    setPlayer,
    removeFromQueue
  })(Video)