import axios from 'axios'
import { Dispatch } from 'redux'

import * as actions from './actions'
import { home, local } from '../location'

export const fetchAllCustomers = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(actions.fetchAllCustomersPending())

      const res = await axios.get(`${local}customers`)
      console.log(res.data)
      dispatch(actions.fetchAllCustomersSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchAllCustomersFailed(err))
    }
  }
}