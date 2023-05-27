import React from "react"
import Todo from "./components/Todo"
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
