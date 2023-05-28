import { createContext, useEffect, useState } from "react"
import api from "../server/api"

const userContext = createContext()

export default userContext

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  console.log("state change", user)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.getAccount()
        setUser(res)
      } catch (error) {
        console.error("Error occurred:", error)
      }
    }
    fetchUser()
    //ue is called only once when the app is loaded first
  }, [])

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  )
}
