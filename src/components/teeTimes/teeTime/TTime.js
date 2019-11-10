import React from 'react'

const TTime = ({ time }) => {
  let newTime = new Intl.DateTimeFormat("en-us", {
        hour: "2-digit",
        minute: "2-digit"
  }).format(time)
  
  return (
    <>{newTime}</>
  )

}

export default TTime