import React from "react"
import Todo from "./components/Todo"
import { Route, Routes, Link, Navigate } from "react-router-dom"
import api from "./server/api"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { useAuth } from "./hooks/useAuth"
const App = () => {
  const { user, setUser } = useAuth()
  console.log(user)
  return (
    <>
      <nav className='flex justify-center text-xl mt-3'>
        <ul className='flex'>
          {!user && (
            <li className='mx-6'>
              <Link to='/login'>Login</Link>
            </li>
          )}

          {!user && (
            <li className='mx-6'>
              <Link to='/signup'>Signup</Link>
            </li>
          )}

          {user && (
            <li className='mx-6'>
              <Link to='/logout'>Logout</Link>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
