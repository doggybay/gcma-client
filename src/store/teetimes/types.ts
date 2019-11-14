import { FetchAllCustomersSuccessAction } from './types';
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

//All Customer Actions

//Fetch All Customers
export interface FetchAllCustomersPendingAction {
  type: typeof constants.FETCH_ALL_TEETIMES_PENDING
}
export interface FetchAllCustomersSuccessAction {
  type: typeof constants.FETCH_ALL_TEETIMES_SUCCESS
  payload: TeeTime[]
}
export interface FetchAllCustomersFailedAction {
  type: typeof constants.FETCH_ALL_TEETIMES_FAILED
  payload: any
}


//Group the different types of actions
type FetchAllCustomersType = | FetchAllCustomersPendingAction | FetchAllCustomersSuccessAction | FetchAllCustomersFailedAction



export type CustomerActionType = | FetchAllCustomersType