import React, { useEffect, createRef } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Grid, Segment, Sticky, Ref } from 'semantic-ui-react'
import './App.css'

import * as customerActions from './store/customers/actionCreators'
import * as teetimesActions from './store/teetimes/actionCreators'

import CustomersList from './components/customers/CustomersList'
import TeeTime from './components/teeTimes/teeTime/TeeTime'
import TeeTimeList from './components/ttimes/TeeTimeList'
import AvailTimes from './components/ttimes/AvailTimes'

//Layout 
import TopNav from './components/layout/TopNav'
import SideNav from './components/layout/SideNav'


const App: React.FC = () => {
  const dispatch = useDispatch()
  const innerRef = createRef()

  useEffect(() => {
    dispatch(customerActions.fetchAllCustomers())
    dispatch(teetimesActions.fetchAllTeeTimes())
  })


  return (
    <div className="App">
      <TopNav />
      <Ref innerRef={innerRef}>
        <Grid columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <Sticky context={innerRef}>
                <Segment>
                  <SideNav />
                </Segment>
              </Sticky>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <AvailTimes />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Ref>
    </div>
  );
}

export default App;
