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
interface FetchAllTeeTimesPendingAction {
  type: typeof constants.FETCH_ALL_TEETIMES_PENDING
}
interface FetchAllTeeTimesSuccessAction {
  type: typeof constants.FETCH_ALL_TEETIMES_SUCCESS
  payload: TeeTime[]
}
interface FetchAllTeeTimesFailedAction {
  type: typeof constants.FETCH_ALL_TEETIMES_FAILED
  payload: any
}

//Fetch one tee time
interface FetchOneTeeTimePendingAction {
  type: typeof constants.FETCH_ONE_TEETIME_PENDING
}

interface FetchOneTeeTimeSuccessAction {
  type: typeof constants.FETCH_ONE_TEETIME_SUCCESS
  payload: TeeTime
}

interface FetchOneTeeTimeFailedAction {
  type: typeof constants.FETCH_ONE_TEETIME_FAILED
  payload: any
}

//Update tee times
interface UpdateOneTeeTimePendingAction {
  type: typeof constants.UPDATE_ONE_TEETIME_PENDING
}

interface UpdateOneTeeTimeSuccessAction {
  type: typeof constants.UPDATE_ONE_TEETIME_SUCCESS
  paylod: TeeTime
}

interface UpdateOneTeeTimeFailedAction {
  type: typeof constants.UPDATE_ONE_TEETIME_FAILED
  payload: any
}

//Remove tee time
interface RemoveTeeTimePendingAction {
  type: typeof constants.REMOVE_TEETIME_PENDING
}

interface RemoveTeeTimeSuccessAction {
  type: typeof constants.REMOVE_TEETIME_SUCCESS
  payload: TeeTime
}

interface RemoveTeeTimeFailedAction {
  type: typeof constants.REMOVE_TEETIME_FAILED
  payload: any
}

//Add tee time
interface AddNewTeeTimePendingAction {
  type: typeof constants.ADD_NEW_TEETIME_PENDING
}

interface AddNewTeeTimeSuccessAction {
  type: typeof constants.ADD_NEW_TEETIME_SUCCESS
  payload: TeeTime
}

interface AddNewTeeTimeFailedAction {
  type: typeof constants.ADD_NEW_TEETIME_FAILED
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