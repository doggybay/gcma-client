import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from 'semantic-ui-react'
import './App.css'

import * as customerActions from './store/customers/actionCreators'
import * as teetimesActions from './store/teetimes/actionCreators'

import CustomersList from './components/customers/CustomersList'
import TeeTime from './components/teeTimes/teeTime/TeeTime'
import TeeTimeList from './components/ttimes/TeeTimeList'


const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(customerActions.fetchAllCustomers())
    dispatch(teetimesActions.fetchAllTeeTimes())
  })


  return (
    <div className="App">
    
        <TeeTimeList />
      
      
    </div>
  )
}

export default App;
