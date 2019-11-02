import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './App.css'

import * as actions from './store/customers/actionCreators'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchAllCustomers())
  })
  return (
    <div className="App">
      
    </div>
  )
}

export default App;
