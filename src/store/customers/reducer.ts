import * as types from './types';
import * as constants from './constants'


let initialState = {
  all: [],
  one: {
    id: 0,
    company: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    created_at: '',
    updated_at: ''
  },
  err: {}
}
export default (state: types.CustomerState = initialState, action: types.CustomerActionType) => {
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