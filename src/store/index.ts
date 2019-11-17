import { createStore, combineReducers, applyMiddleware } from 'redux'

//dev tools
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

//individual reducers
import customers from './customers/reducer'
import teetimes from './teetimes/reducer'

//combined reducer
const rootReducer = combineReducers({ customers, teetimes })

//middleware array
const middleware = [thunk, logger]

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))