import { createContext, useEffect, useState } from "react"
import api from "../server/api"

const userContext = createContext()

export default userContext

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.getAccount()
        setUser(res)
        console.log("inside async", user)
        // Continue with further processing of the user data
      } catch (error) {
        console.error("Error occurred:", error)
        // Handle the error
      }
    }
    fetchUser()
  }, [])

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}
