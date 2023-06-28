import React, { useEffect } from 'react'
import api from '../server/api'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
const Logout = () => {
  const navigate = useNavigate()
  const { setUser } = useAuth()
  useEffect(() => {
    const logout = async () => {
      try {
        const res = await api.deleteCurrentSession()
        setUser(null)
        navigate("/")
      } catch (err) {
        console.log(err.message)
      }
    }
    logout()
  }, [])

  return (
    <div className='flex justify-center mt-12'>
      <Spinner />
    </div>
  )
}

export default Logout
