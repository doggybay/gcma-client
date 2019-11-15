import * as types from './types';
import * as constants from './constants'


let initialState = {
  all: [],
  one: {
    id: 0,
    time: ''
  },
  err: {}
}
export default (state: types.TeeTimeState = initialState, action: types.TeeTimeActionType) => {
  switch (action.type) {
    case constants.FETCH_ALL_TEETIMES_PENDING:
    case constants.FETCH_ONE_TEETIME_PENDING:
    case constants.REMOVE_TEETIME_PENDING:
    case constants.ADD_NEW_TEETIME_PENDING:
      return state
    
    case constants.FETCH_ALL_TEETIMES_FAILED:
    case constants.FETCH_ONE_TEETIME_FAILED:
    case constants.REMOVE_TEETIME_FAILED:
    case constants.ADD_NEW_TEETIME_FAILED:
      return { ...state, err: action.payload }
    
    case constants.FETCH_ALL_TEETIMES_SUCCESS:
      return { ...state, all: action.payload }
    
    case constants.FETCH_ONE_TEETIME_SUCCESS:
      return { ...state, one: action.payload }
    
    default: 
      return state
  }
}