import React from "react";

const TDate = ({ time }) => {
  let newDate = new Intl.DateTimeFormat("en-us", {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
  }).format(time)
  
  return (
    <>{newDate}</>
  )

}

export default TDate