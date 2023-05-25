import React from "react"
import Todo from "./Todo"
import { ServerContextProvider } from "./contexts/ServerContext"

const App = () => {
  return (
    <ServerContextProvider>
      <Todo />
    </ServerContextProvider>
  )
}

export default App
