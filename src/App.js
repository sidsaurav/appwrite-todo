import React from "react"
import { Client } from "appwrite"
import Todo from "./Todo"

const client = new Client()
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("retromedia")

const App = () => {
  return (
    <>
      <Todo />
    </>
  )
}

export default App
