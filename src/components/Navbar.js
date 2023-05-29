import React from "react"
import { useAuth } from "../hooks/useAuth"
import { Link } from "react-router-dom"
const Navbar = () => {
  const { user } = useAuth()
  console.log(user)
  return (
    <div>
      <nav className='flex justify-center text-xl mt-3'>
        {user && "Hello " + user.email.split("@")[0].toUpperCase()}
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

          {!user && (
            <li className='mx-6'>
              <Link to='/'>Home</Link>
            </li>
          )}

          {user && (
            <li className='mx-6'>
              <Link to='/logout'>Logout</Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
