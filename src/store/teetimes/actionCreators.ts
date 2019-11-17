import axios from 'axios'
import { Dispatch } from 'redux'

import * as actions from './actions'

import { home, local, outside } from '../location'

export const fetchAllTeeTimes = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(actions.fetchAllTeeTimesPending())

      const res = await axios.get(`${local}teetimes`)
      
      dispatch(actions.fetchAllTeeTimesSuccess(res.data))
      
    } catch (err) {
      dispatch(actions.fetchAllTeeTimesFailed(err))
    }
  }
}

export const fetchOneTeeTime = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(actions.fetchOneTeeTimePending())

      const res = await axios.get(`${local}tee`)
    } catch (err) {
      dispatch(actions.fetchOneTeeTimeFailed(err))
    }
  } 
}