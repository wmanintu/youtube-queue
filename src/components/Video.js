import React, { Component } from 'react'
import './Video.css'
import { connect } from 'react-redux'
import { addToQueue } from '../actions/queueActions'

class SearchItem extends Component {
  handleClick = () => {
    if (this.props.options.add) {
      this.props.addToQueue({
        title: this.props.title,
        thumbnail: this.props.thumbnail,
        videoId: this.props.videoId
      })
    }
  }
  render() {
    let { thumbnail, title } = this.props
    return (
      <div className="media" onClick={this.handleClick}>
        <img
          width={120}
          height={90}
          className="mr-3"
          src={thumbnail}
          alt="Generic placeholder" />
        <div className="media-body">
          <div className="video-text">{title}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.results,
  queueList: state.queue.list,
  player: state.video.player
})

export default connect(mapStateToProps, { addToQueue })(SearchItem)