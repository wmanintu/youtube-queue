import { ADD_TO_QUEUE, REMOVE_FROM_QUEUE } from './types'

export const addToQueue = (data) => {
  return async dispatch => {
    dispatch({
      type: ADD_TO_QUEUE,
      payload: data
    })
  }
}

export const removeFromQueue = (videoId) => {
  return async dispatch => {
    dispatch({
      type: REMOVE_FROM_QUEUE,
      payload: videoId
    })
  }
}
