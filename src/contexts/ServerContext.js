import { createContext } from "react"
import { Account, Client, Databases } from "appwrite"

const client = new Client()
client
  .setEndpoint(process.env.REACT_APP_ENDPOINT)
  .setProject(process.env.REACT_APP_PROJECT_ID)

const account = new Account(client)
const database = new Databases(client)

export const ServerContext = createContext()

export const ServerContextProvider = ({ children }) => {
  return (
    <ServerContext.Provider value={{ account, database }}>
      {children}
    </ServerContext.Provider>
  )
}
