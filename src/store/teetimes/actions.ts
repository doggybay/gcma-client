import * as constants from './constants'
import * as types from './types'

export const FetchAllTeeTimesPending = (): types.TeeTimeActionType => ({
  type: constants.FETCH_ALL_TEETIMES_PENDING
})

export const FetchAllTeeTimesSuccess = (teetimes: types.TeeTime[]): types.TeeTimeActionType => ({
  type: constants.FETCH_ALL_TEETIMES_SUCCESS,
  payload: teetimes
})

export const FetchAllTeeTimesFailed = (err: any): types.TeeTimeActionType => ({
  type: constants.FETCH_ALL_TEETIMES_FAILED,
  payload: err
})