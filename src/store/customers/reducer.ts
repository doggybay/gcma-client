import * as types from './types';
import * as constants from './constants'


let initialState = {
  all: [],
  oneCustomer: {},
  err: {}
}
export default (state = initialState, action: types.CustomerActionType) => {
  switch (action.type) {
    case constants.FETCH_ALL_CUSTOMERS_PENDING:
      return state
    
    case constants.FETCH_ALL_CUSTOMERS_FAILED:
      return { ...state, err: action.payload }
    
    case constants.FETCH_ALL_CUSTOMERS_SUCCESS:
      return { ...state, all: action.payload }
    
    default: 
      return state
  }
}