import React, { Component } from 'react'
import './SearchItem.css'

class SearchItem extends Component {
  render() {
    return (
      <div className="item-container">
        <img className="video-image" src={this.props.thumbnail} alt=""/>
        <b className="video-title">{this.props.title}</b>
      </div>
    )
  }
}

export default SearchItem