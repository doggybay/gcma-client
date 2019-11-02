import axios from 'axios'
import * as actions from './actions'
import { Dispatch } from 'redux'

export const fetchAllCustomers = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(actions.fetchAllCustomersPending())

      const res = await axios.get('http://localhost:8000/api/customers')
      dispatch(actions.fetchAllCustomersSuccess(res.data))
    } catch (err) {
      dispatch(actions.fetchAllCustomersFailed(err))
    }
  }
}