import React from 'react'
import { Image, Item, Container, List } from "semantic-ui-react";
import { useSelector } from 'react-redux';

import { TeeDate } from '../teeTimes/TeeDate'
import { TeeTime } from '../teeTimes/TeeTime'
import {TeeTimesList} from '../teeTimes/TeeTimesList'

const CustomersList = () => {
  const customers = useSelector(state => state.customers.all);
  

  const listOfCustomers = customers.map(customer => {

    const teeTimes = customer.tee_times.map(teeTime => {

      const timeToFormat = new Date(teeTime.time)
      
      return (
        <List.Item key="" as="li" value="-">
          <TeeDate time={timeToFormat} />
          <> at</> <TeeTime time={timeToFormat} />
        </List.Item>
      );
    })
    
    return (
      <List.Item as="li" value="*">
        {customer.name}
        <List.Item as="ol">
          {teeTimes}
        </List.Item>
      </List.Item>
    );
  })

  return (
  
    <Container>
      
        <List as="ol">
          {listOfCustomers}
        </List>
      
    </Container>
  )
};

export default CustomersList;