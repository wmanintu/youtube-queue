import React, { Component } from 'react'
import './Queue.css'
import axios from 'axios'
import { Input } from 'antd'
const Search = Input.Search;

const key = 'AIzaSyA4HzEj8jUbv3LlYBASlXbyqLZFfanoUhk'
// const ClientID = '171101422964-h0ilpnqbm8ejqqjm6jqt9hn6o8skp11p.apps.googleusercontent.com'
let searchList = null
const searchYoutube = async (keyword) => {
  console.log(keyword)
  let params = {
    part: 'snippet',
    q: keyword,
    type: 'video',
    maxResults: 25,
    key: key
  }
  try {
    let results = await axios.get(youtubeApi, { params: params})
    searchList = setSearchResults(results.data.items)
  } catch (error) {
    console.log(error)
  }
}
const setSearchResults = (results) => {
  return results.map((element) => {
    return {
      channelTitle: element.snippet.channelTitle,
      videoId: element.id.videoId,
      thumbnail: element.snippet.thumbnails.default.url
    }
  })
}

const youtubeApi = 'https://www.googleapis.com/youtube/v3/search'
class Queue extends Component {
  constructor() {
    super()

    this.state = {
      isEnabled: false
    }
  }
  render() {
    return (
      <div>
        <Search
          placeholder="input search text"
          onSearch={searchYoutube}
          enterButton
        />
        <pre>{searchList}</pre>
      </div>
    )
  }
}

export default Queue