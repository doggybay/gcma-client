import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from "semantic-ui-react"

import TeeTime from './TeeTime'


const TeeTimeList = () => {

  const teeTimes = useSelector(state => state.teetimes.all)

  let listOfTeeTimes = teeTimes.map(teetime => (<TeeTime teetime={teetime} />))

  return (
    <Container>
      {listOfTeeTimes}
    </Container>
  );
}

export default TeeTimeList