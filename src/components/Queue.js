import React, { Component } from 'react'
import { connect } from 'react-redux'
import Video from './Video'

class Queue extends Component {
  render() {
    const queueList = this.props.queueList.map((element, index) => {
      return <Video
      title={element.title}
      thumbnail={element.thumbnail}
      videoId={element.videoId}
      key={index}
      options={{
        add: false,
        remove: true
      }} />
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