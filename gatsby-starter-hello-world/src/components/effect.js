import React, { useState, useEffect } from "react"

const Effect = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 3000)
    return () => setTimeout(timer)
  })

  return (
    <>
      <h1> Current Time: {time.toLocaleTimeString()} </h1>
    </>
  )
}

export default Effect
