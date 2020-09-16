import { FETCH_SEARCH } from './types'
import axios from 'axios'

const youtubeApi = 'https://www.googleapis.com/youtube/v3/search'

const mapSearchResults = (results) => {
  return results.map((element) => {
    return {
      thumbnail: element.snippet.thumbnails.default.url,
      title: element.snippet.title,
      description: element.snippet.description,
      videoId: element.id.videoId
    }
  })
}

export const fetchSearch = (keyword) => {
  console.log('YOUTUBE_API_KEY:', process.env.REACT_APP_YOUTUBE_API_KEY)
  return async dispatch => {
    let params = {
      part: 'snippet',
      q: keyword,
      type: 'video',
      maxResults: 10,
      key: process.env.REACT_APP_YOUTUBE_API_KEY
    }

    try {
      let results = await axios.get(youtubeApi, { params: params})
      let searchResults = mapSearchResults(results.data.items)
      dispatch({
        type: FETCH_SEARCH,
        payload: searchResults
      })
    } catch (error) {
      console.log(error)
    }
  }
}
