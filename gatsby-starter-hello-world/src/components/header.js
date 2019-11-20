import React, { Component } from "react"

const Header = props => {
  return (
    <div style={{ color: "teal" }}>
      <h1>{props.text}</h1>
      <p>Such and Amazing Gatsby</p>
      {props.children}
    </div>
  )
}

export default Header
