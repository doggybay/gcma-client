import React from 'react'
import { Image, Item, Container, List } from "semantic-ui-react";
import { useSelector } from 'react-redux';

const CustomersList = () => {
  const customers = useSelector(state => state.customers.all);
  

  const listOfCustomers = customers.map(customer => {
    const teeTimes = customer.tee_times.map(teeTime => {

      const time = new Date(teeTime.time)

      const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(time)

      const formattedTime = new Intl.DateTimeFormat("en-us", {
        hour: "2-digit",
        minute: "2-digit"
      }).format(time);
      
      return (
      <List.Item key="" as="li" value="-">
        {formattedDate} at {formattedTime}
      </List.Item>
    )})
    
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