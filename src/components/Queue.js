import React, { Component } from 'react'
import './Queue.css'
import axios from 'axios'
import { Input } from 'antd'
const Search = Input.Search;

const searchYoutube = async (keyword) => {
  console.log(keyword)
  let params = {
    part: 'snippet',
    q: keyword,
    type: 'video'
  }
  try {
    let searchResult = await axios.get(youtubeApi, params)
    console.log('searchResult', searchResult)
  } catch (error) {
    console.log(error)
  }
};
const youtubeApi = 'https://www.googleapis.com/youtube/v3/search'
class Queue extends Component {
  render() {
    return (
      <div>
        <Search
          placeholder="input search text"
          onSearch={searchYoutube}
          enterButton
        />
      </div>
    )
  }
}

export default Queue