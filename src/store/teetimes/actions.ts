import * as constants from './constants'
import * as types from './types'

//Fetch all tee times
export const fetchAllTeeTimesPending = (): types.TeeTimeActionType => ({
  type: constants.FETCH_ALL_TEETIMES_PENDING
})

export const fetchAllTeeTimesSuccess = (teetimes: types.TeeTime[]): types.TeeTimeActionType => ({
  type: constants.FETCH_ALL_TEETIMES_SUCCESS,
  payload: teetimes
})

export const fetchAllTeeTimesFailed = (err: any): types.TeeTimeActionType => ({
  type: constants.FETCH_ALL_TEETIMES_FAILED,
  payload: err
})

//Fetch one tee time
export const fetchOneTeeTimePending = (): types.TeeTimeActionType => ({
  type: constants.FETCH_ONE_TEETIME_PENDING
})

export const fetchOneTeeTimeSuccess = (teetime: types.TeeTime): types.TeeTimeActionType => ({
  type: constants.FETCH_ONE_TEETIME_SUCCESS,
  payload: teetime

})

export const fetchOneTeeTimeFailed = (err: any): types.TeeTimeActionType => ({
  type: constants.FETCH_ONE_TEETIME_FAILED,
  payload: err
})

//Update tee time
export const updateOneTeeTimePending = (): types.TeeTimeActionType => ({
  type: constants.UPDATE_ONE_TEETIME_PENDING
})

export const updateOneTeeTimeSuccess = (teetime: types.TeeTime): types.TeeTimeActionType => ({
  type: constants.UPDATE_ONE_TEETIME_SUCCESS,
  payload: teetime
})

export const updateOneTeeTimeFailed = (err: any): types.TeeTimeActionType => ({
  type: constants.UPDATE_ONE_TEETIME_FAILED,
  payload: err
})
//Remove tee time
export const removeTeeTimePending = (): types.TeeTimeActionType => ({
  type: constants.REMOVE_TEETIME_PENDING
})

export const removeTeeTimeSuccess = (teetime: types.TeeTime): types.TeeTimeActionType => ({
  type: constants.REMOVE_TEETIME_SUCCESS,
  payload: teetime
})

export const removeTeeTimeFailed = (err: any): types.TeeTimeActionType => ({
  type: constants.REMOVE_TEETIME_FAILED,
  payload: err
})

//Add tee time
export const addNewTeeTimePending = (): types.TeeTimeActionType => ({
  type: constants.ADD_NEW_TEETIME_PENDING
})

export const addNewTeeTimeSuccess = (teetime: types.TeeTime): types.TeeTimeActionType => ({
  type: constants.ADD_NEW_TEETIME_SUCCESS,
  payload: teetime
})

export const addNewTeeTimeFailed = (err: any): types.TeeTimeActionType => ({
  type: constants.ADD_NEW_TEETIME_FAILED,
  payload: err
})