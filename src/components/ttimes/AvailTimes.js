import React from "react";
import { useSelector } from "react-redux";
import { Container, Header, Card, Feed } from "semantic-ui-react";

import TDate from "../teeTimes/teeTime/TDate";
import TTime from "../teeTimes/teeTime/TTime";
import Golfer from "./Golfer";
import TeeTime from "./TeeTime";


const AvailTimes = () => {
  const teeTimes = useSelector(state => state.teetimes.all);

  const filteredTeeTimes = teeTimes.filter(teetime => teetime.customers.length < 4)
  const lessThan3 = teeTimes.filter(teetime => teetime.customers.length < 3)
  const lessThan2 = teeTimes.filter(teetime => teetime.customers.length < 2)
  const lessThan1 = teeTimes.filter(teetime => teetime.customers.length < 1)

  
  let listOfTeeTimes = lessThan1.map(teetime => <TeeTime teetime={teetime} />);

  return (
    <Container>
      {listOfTeeTimes}
    </Container>
  );
}

export default AvailTimes