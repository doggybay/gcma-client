import React from "react";

export const TeeDate = ({ time }) => {
  let newDate = new Intl.DateTimeFormat("en-us", {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
  }).format(time)
  
  return (
    <div>{newDate}</div>
  
  )

}