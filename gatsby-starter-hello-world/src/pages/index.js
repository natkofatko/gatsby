import React from "react"
import Title from "./../components/title"
import Effect from "./../components/effect"
import Header from "../components/header"

const IMAGE = "https://source.unsplash.com/random/400x200"
export default () => {
  return (
    <div
      style={{
        color: "pink",

        marginTop: 20,
        fontSize: "33px",
      }}
    >
      <Header text="Just created">
        <Effect></Effect> <button>Hello</button>
      </Header>

      <h1>Hello Gatsby</h1>
      <h2>What a World</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={IMAGE} alt=""></img>

        <img src={IMAGE} alt=""></img>
        <img src={IMAGE} alt=""></img>
      </div>
      <Title></Title>
    </div>
  )
}
