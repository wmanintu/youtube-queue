import { FETCH_SEARCH } from '../actions/types'

const initialState = {
  results: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        results: action.payload
      }
    default:
      return state
  }
}