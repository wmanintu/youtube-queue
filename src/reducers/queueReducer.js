import { ADD_TO_QUEUE } from '../actions/types'

const initialState = {
  list: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_TO_QUEUE:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}