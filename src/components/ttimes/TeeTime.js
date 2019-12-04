import React from "react"
import { Card } from "semantic-ui-react"

import TDate from "../teeTimes/teeTime/TDate"
import TTime from "../teeTimes/teeTime/TTime"
import GolfersList from './GolfersList'

const TeeTime = (props) => {

  const teetime = props.teetime
  const golfers = teetime.customers

  const timeToFormat = new Date(teetime.time)

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <TDate time={timeToFormat} />
        </Card.Header>
        <Card.Header>
          <TTime time={timeToFormat} />
        </Card.Header>
        <Card.Description>
          
          <GolfersList golfers={golfers} />
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default TeeTime