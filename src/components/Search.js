import React, { Component } from 'react'
import './Search.css'
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchSearch } from '../actions/searchActions'
import SearchItem from './SearchItem'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { keyword: '' }
  }
  handleButton = () => {
    this.props.fetchSearch(this.state.keyword)
  }
  handleInput = (event) => {
    this.setState({ keyword: event.target.value })
  } 
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.fetchSearch(this.state.keyword)
    }
  }
  pause = () => {
    this.props.player.pauseVideo()
  }
  render() {
    const searchResults = this.props.searchResults.map((element, index) => {
      return <SearchItem title={element.title} thumbnail={element.thumbnail} videoId={element.videoId} key={index} />
    })
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search video"
            onChange={this.handleInput}
            onKeyPress={this.handleKeyPress}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.handleButton}>Button</Button>
          </InputGroup.Append>
        </InputGroup>
        <button onClick={this.pause}>pause</button>
        <div className="search-result">
        { searchResults }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchResults: state.search.results,
  player: state.video.player
})

export default connect(mapStateToProps, { fetchSearch })(Search)