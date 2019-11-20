import React, { useState } from "react"

const Title = () => {
  const [description, setDescription] = useState("Picture description")

  return (
    <input
      onChange={e => setDescription(e.target.value)}
      type="text"
      value={description}
    ></input>
  )
}

export default Title
