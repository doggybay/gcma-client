import React from 'react'
import { Container} from "semantic-ui-react";
import { useSelector } from 'react-redux';

import Customer from './customer/Customer'


const CustomersList = () => {
  const customers = useSelector(state => state.customers.all)

  const listOfCustomers = customers.map(customer => (<Customer customer={customer} />))

  return (
    <Container>
      
      {listOfCustomers}
    </Container>
  );
};

export default CustomersList;