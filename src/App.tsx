import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from 'semantic-ui-react'
import './App.css'

import * as actions from './store/customers/actionCreators'
import CustomersList from './components/customers/CustomersList'


const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchAllCustomers())
  })


  return (
    <div className="App">
    
        <CustomersList />
      
      
    </div>
  )
}

export default App;
