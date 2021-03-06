import React from 'react'
import { List, Container } from 'semantic-ui-css'

import TDate from "./teeTime/TDate";
import TTime from "./teeTime/TTime";

const TeeTimesList = (props) => {
  const { teeTimesArr } = props

  const listOfTeeTimes = teeTimesArr.map(teeTime => {
    const timeToFormat = new Date(teeTime.time);
    
    return (
      <div className="content">
        <div className="header">Scheduled tee time for:</div>
        <div className="description">
          <TDate time={timeToFormat} />  at <TTime time={timeToFormat} />
        </div>
      </div>
    );
  });

  return (
    <div className="ui card">
      {listOfTeeTimes}
    </div>
  );
}

export default TeeTimesList

// <List.Item key="teeTime.id" as="ol">
//       <List.Item as="li">
//         <TDate time={timeToFormat} /> at <TTime time={timeToFormat} />
//       </List.Item>
//     </List.Item>