import * as constants from './constants';

export interface TeeTime {
  id: number
  time: string
  
}

export interface TeeTimeState {
  all: TeeTime[],
  one: TeeTime,
  err: {}
}

//All Tee Time Actions

//Fetch all tee times
export interface FetchAllTeeTimesPendingAction {
  type: typeof constants.FETCH_ALL_TEETIMES_PENDING
}
export interface FetchAllTeeTimesSuccessAction {
  type: typeof constants.FETCH_ALL_TEETIMES_SUCCESS
  payload: TeeTime[]
}
export interface FetchAllTeeTimesFailedAction {
  type: typeof constants.FETCH_ALL_TEETIMES_FAILED
  payload: any
}

//Fetch one tee time
export interface FetchOneTeeTimePendingAction {
  type: typeof constants.FETCH_ONE_TEETIME_PENDING
}

export interface FetchOneTeeTimeSuccessAction {
  type: typeof constants.FETCH_ONE_TEETIME_SUCCESS
  payload: TeeTime
}

export interface FetchOneTeeTimeFailedAction {
  type: typeof constants.FETCH_ONE_TEETIME_FAILED
  payload: any
}

//Update tee times
export interface UpdateOneTeeTimePendingAction {
  type: typeof constants.UPDATE_ONE_TEETIME_PENDING
}

export interface UpdateOneTeeTimeSuccessAction {
  type: typeof constants.UPDATE_ONE_TEETIME_SUCCESS
  paylod: TeeTime
}

export interface UpdateOneTeeTimeFailedAction {
  type: typeof constants.UPDATE_ONE_TEETIME_FAILED
  paylod: any
}

//Remove tee time
export interface RemoveTeeTimePendingAction {
  type: typeof constants.REMOVE_TEETIME_PENDING
}

export interface RemoveTeeTimeSuccessAction {
  type: typeof constants.REMOVE_TEETIME_SUCCESS
  payload: TeeTime
}

export interface RemoveTeeTimeFailedAction {
  type: typeof constants.REMOVE_TEETIME_FAILED
  payload: any
}

//Add tee time
export interface AddNewTeeTimePendingAction {
  type: typeof constants.ADD_NEW_TEETIME_PENDING
}

export interface AddNewTeeTimeSuccessAction {
  type: typeof constants.ADD_NEW_TEETIME_PENDING
  payload: TeeTime
}

export interface AddNewTeeTimeFailedAction {
  type: typeof constants.ADD_NEW_TEETIME_PENDING
  payload: any
}

//Group the different types of actions
type FetchAllTeeTimesType = | FetchAllTeeTimesPendingAction | FetchAllTeeTimesSuccessAction | FetchAllTeeTimesFailedAction

type FetchOneTeeTimeType = | FetchOneTeeTimePendingAction | FetchOneTeeTimeSuccessAction | FetchOneTeeTimeFailedAction

type UpdateOneTeeTimeType = | UpdateOneTeeTimePendingAction | UpdateOneTeeTimeSuccessAction | UpdateOneTeeTimeFailedAction

type RemoveTeeTimeType = | RemoveTeeTimeFailedAction | RemoveTeeTimePendingAction | RemoveTeeTimeSuccessAction

type AddNewTeeTimeType = | AddNewTeeTimePendingAction | AddNewTeeTimeSuccessAction | AddNewTeeTimeFailedAction

//Export all-inclsuive type
export type TeeTimeActionType = | FetchAllTeeTimesType | FetchOneTeeTimeType | UpdateOneTeeTimeType | RemoveTeeTimeType | AddNewTeeTimeType