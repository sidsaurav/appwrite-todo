import React from "react"
import Todo from "./components/Todo"
import { Route, Routes, Link, Navigate } from "react-router-dom"
import api from "./server/api"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { useAuth } from "./hooks/useAuth"
import Logout from "./components/Logout"
import Navbar from "./components/Navbar"
const App = () => {
  const { user } = useAuth()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
    </>
  )
}

export default App
