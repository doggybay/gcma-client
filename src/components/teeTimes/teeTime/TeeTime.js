import React from "react";
import { useSelector } from "react-redux";
import { Feed } from "semantic-ui-react";

import TeeTimesList from "../TeeTimesList"
import TTime from "./TTime"
import TDate from "./TDate"

const TeeTime = () => {
  const teetimes = useSelector(state => state.teetimes.all)

  const listOfTeetimes = teetimes.map(teetime => {
    const timeToFormat = new Date(teetime.time)
    console.log(teetime.customers)
    return (
      <div className="content">
        <div className="header">Scheduled tee time for:</div>
        <div className="description">
          <TDate time={timeToFormat} /> at <TTime time={timeToFormat} />
        </div>
        <div className="description">
          
        </div>
      </div>
    );
  })

  return <div className="ui card">{listOfTeetimes}</div>;
}

export default TeeTime