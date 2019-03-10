import { FETCH_SEARCH } from './types'
import axios from 'axios'

const key = 'AIzaSyA4HzEj8jUbv3LlYBASlXbyqLZFfanoUhk'
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
  return async dispatch => {
    let params = {
      part: 'snippet',
      q: keyword,
      type: 'video',
      maxResults: 10,
      key: key
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

// export default function fetchSearch (keyword) {
//   console.log('before dispatch function')
//   return async dispatch => {
//     console.log('call fetch search =>', keyword)
//     let params = {
//       part: 'snippet',
//       q: keyword,
//       type: 'video',
//       maxResults: 10,
//       key: key
//     }

//     try {
//       let results = await axios.get(youtubeApi, { params: params})
//       let searchResults = mapSearchResults(results.data.items)
//       dispatch({
//         type: FETCH_SEARCH,
//         payload: searchResults
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

