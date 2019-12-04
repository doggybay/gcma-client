import React from 'react'
import { Feed } from 'semantic-ui-react'

import Golfer from './Golfer'

const GolfersList = (props) => {

  const golfers = props.golfers

  let listOfGolfers = golfers.map(golfer => {
    return (
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Golfer golfer={golfer} />
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    )
  })

  return (
    <Feed>
      {listOfGolfers}
    </Feed>
  )
}

export default GolfersList