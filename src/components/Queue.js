import React, { Component } from 'react'
import './Queue.css'
import axios from 'axios'
import { Input, message, List } from 'antd'
import SearchItem from './SearchItem'
const Search = Input.Search;

const key = 'AIzaSyA4HzEj8jUbv3LlYBASlXbyqLZFfanoUhk'

const youtubeApi = 'https://www.googleapis.com/youtube/v3/search'
class Queue extends Component {
  constructor() {
    super()
    this.state = {
      searchList: []
    }
  }
  searchYoutube = async (keyword) => {
    let params = {
      part: 'snippet',
      q: keyword,
      type: 'video',
      maxResults: 10,
      key: key
    }
    try {
      let results = await axios.get(youtubeApi, { params: params})
      let searchList = this.setSearchResults(results.data.items)
      this.setState({searchList: searchList})
    } catch (error) {
      console.log(error)
      message.error('Loading search failed')
    }
  }
  setSearchResults = (results) => {
    return results.map((element) => {
      console.log(element)
      return {
        thumbnail: element.snippet.thumbnails.default.url,
        title: element.snippet.title,
        description: element.snippet.description,
        videoId: element.id.videoId
      }
    })
  }
  render() {
    return (
      <div>
        <Search
          placeholder="input search text"
          onSearch={this.searchYoutube}
          enterButton
        />
        <div className="search-result">
        {
          this.state.searchList.map(element => {
            return (
              <SearchItem 
              title={element.title}
              thumbnail={element.thumbnail}/>
            )
          })
        }
        </div>
        
        {/* <List
          itemLayout="vertical"
          dataSource={this.state.searchList}
          renderItem={item => (
            <List.Item
            extra={<img width={120} alt="logo" src={item.thumbnail} />}>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        /> */}
      </div>
    )
  }
}

export default Queue