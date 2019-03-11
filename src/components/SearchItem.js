import React, { Component } from 'react'
import './SearchItem.css'
import { connect } from 'react-redux'
import { Media } from 'react-bootstrap'
import { addToQueue } from '../actions/queueActions'

class SearchItem extends Component {
  handleClick = () => {
    console.log('videoURL', this.props.videoId)
    this.props.addToQueue({
      title: this.props.title,
      thumbnail: this.props.thumbnail,
      videoId: this.props.videoId
    })
  }
  render() {
    let { thumbnail, title } = this.props
    return (
      <Media onClick={this.handleClick}>
        <img
          width={120}
          height={90}
          className="mr-3"
          src={thumbnail}
          alt="Generic placeholder" />
        <Media.Body className="media-body">
          <h5>{title}</h5>
        </Media.Body>
      </Media>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.results
})

export default connect(mapStateToProps, { addToQueue })(SearchItem)