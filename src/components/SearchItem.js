import React, { Component } from 'react'
import './SearchItem.css'
import { Media } from 'react-bootstrap'

class SearchItem extends Component {
  handleClick = () => {
    console.log('videoURL', this.props.videoId)
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

export default SearchItem