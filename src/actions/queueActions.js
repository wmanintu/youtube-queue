import { ADD_TO_QUEUE } from './types'

export const addToQueue = (data) => {
  return async dispatch => {
    dispatch({
      type: ADD_TO_QUEUE,
      payload: data
    })
  }
}