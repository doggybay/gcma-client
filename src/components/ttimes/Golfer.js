import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const Golfer = (props) => {
  const golfer = props.golfer

  return (
    
        
          <Button basic color="green">
            {golfer.name}
          </Button>
        
    
  )
}

export default Golfer