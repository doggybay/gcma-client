import React from 'react'

export const TeeTime = ({ time }) => {
  let newTime = new Intl.DateTimeFormat("en-us", {
        hour: "2-digit",
        minute: "2-digit"
  }).format(time)
  
  return (
    <div>{newTime}</div>
  )

}