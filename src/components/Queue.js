import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchItem from './SearchItem'

class Queue extends Component {
  render() {
    const queueList = this.props.queueList.map((element, index) => {
      return <SearchItem title={element.title} thumbnail={element.thumbnail} videoId={element.videoId} key={index} />
      // return <div>element.title</div>
    })
    return (
      <div>
        <div className="search-result">
          {queueList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  queueList: state.queue.list
})

export default connect(mapStateToProps)(Queue)