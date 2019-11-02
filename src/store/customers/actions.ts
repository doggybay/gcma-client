import * as constants from './constants'
import * as types from './types'

export const fetchAllCustomersPending = (): types.FetchAllCustomersPendingAction => ({ type: constants.FETCH_ALL_CUSTOMERS_PENDING })

export const fetchAllCustomersSuccess = (customers: types.Customer[]): types.FetchAllCustomersSuccessAction => ({
  type: constants.FETCH_ALL_CUSTOMERS_SUCCESS,
  payload: customers
})

export const fetchAllCustomersFailed = (err: any): types.FetchAllCustomersFailedAction => ({
  type: constants.FETCH_ALL_CUSTOMERS_FAILED,
  payload: err
})