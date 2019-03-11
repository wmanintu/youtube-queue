import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import videoReducer from './videoReducer'
import queueReducer from './queueReducer'

export default combineReducers({
  search: searchReducer,
  queue: queueReducer,
  video: videoReducer
})