import { useContext } from "react"
import userContext from "../context/userContext"

export const useAuth = () => {
  return useContext(userContext)
}
