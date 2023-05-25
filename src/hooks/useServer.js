import { ServerContext } from "../contexts/ServerContext"
import { useContext } from "react"

const useServer = () => {
  return useContext(ServerContext)
}

export default useServer
