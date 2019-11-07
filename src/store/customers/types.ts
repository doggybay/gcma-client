import { FetchAllCustomersSuccessAction } from './types';
import { FETCH_ALL_CUSTOMERS_PENDING, FETCH_ALL_CUSTOMERS_SUCCESS, FETCH_ALL_CUSTOMERS_FAILED } from './constants';

export interface Customer {
  id: number
  name: string
  company: string
  email: string
  phone: string
  address: string
  created_at: string
  updated_at: string
}

export interface CustomerState {
  all: Customer[],
  one: Customer,
  err: {}
}

//All Customer Actions

//Fetch All Customers
export interface FetchAllCustomersPendingAction {
  type: typeof FETCH_ALL_CUSTOMERS_PENDING
}
export interface FetchAllCustomersSuccessAction {
  type: typeof FETCH_ALL_CUSTOMERS_SUCCESS
  payload: Customer[]
}
export interface FetchAllCustomersFailedAction {
  type: typeof FETCH_ALL_CUSTOMERS_FAILED
  payload: any
}


//Group the different types of actions
type FetchAllCustomersType = | FetchAllCustomersPendingAction | FetchAllCustomersSuccessAction | FetchAllCustomersFailedAction



export type CustomerActionType = | FetchAllCustomersType