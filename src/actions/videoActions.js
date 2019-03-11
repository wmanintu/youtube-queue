import { SET_PLAYER } from './types'

export const setPlayer = (event) => {
  return async dispatch => {
    dispatch({
      type: SET_PLAYER,
      payload: event.target
    })
  }
}