import React, { useEffect } from "react"
import api from "../server/api"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Spinner from "./Spinner"
const Logout = () => {
  const navigate = useNavigate()
  const { setUser } = useAuth()
  useEffect(() => {
    const logout = async () => {
      try {
        const res = await api.deleteCurrentSession()
        console.log(res)
        setUser(null)
        navigate("/")
      } catch (err) {
        toast.error(err.message)
      }
    }
    logout()
  }, [])

  return (
    <div>
      <Spinner />
      <ToastContainer />
    </div>
  )
}

export default Logout
