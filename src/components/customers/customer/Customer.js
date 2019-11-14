import React from "react";
import { Card, List } from "semantic-ui-react";

import TeeTimesList from '../../teeTimes/TeeTimesList'

const Customer = ({ customer }) => {

  return (
    <Card>
      <Card.Content>
        <Card.Header>{customer.name}</Card.Header>
        <Card.Meta>
          <span className="date">{customer.email}</span>
        </Card.Meta>
        <Card.Description as="ol">{customer.company}</Card.Description>
      </Card.Content>
      <Card.Content>
        <TeeTimesList teeTimesArr={customer.tee_times} />
      </Card.Content>
    </Card>
  );
}

export default Customer
