import { Client, Databases, Account } from "appwrite"

const endpoint = process.env.REACT_APP_ENDPOINT
const projectId = process.env.REACT_APP_PROJECT_ID
const databaseId = process.env.REACT_APP_DATABASE_ID
const collectionId = process.env.REACT_APP_COLLECTION_ID

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk
    }
    let appwrite = new Client()
    appwrite.setEndpoint(endpoint).setProject(projectId)
    const account = new Account(appwrite)
    const database = new Databases(appwrite)

    api.sdk = { database, account }
    return api.sdk
  },

  createAccount: (email, password, name) => {
    return api.provider().account.create("unique()", email, password, name)
  },

  getAccount: () => {
    let account = api.provider().account
    return account.get()
  },

  createSession: (email, password) => {
    return api.provider().account.createEmailSession(email, password)
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession("current")
  },

  createDocument: (data, permissions) => {
    return api
      .provider()
      .database.createDocument(
        databaseId,
        collectionId,
        "unique()",
        data,
        permissions
      )
  },

  listDocuments: () => {
    return api.provider().database.listDocuments(databaseId, collectionId)
  },

  updateDocument: (documentId, data) => {
    return api
      .provider()
      .database.updateDocument(databaseId, collectionId, documentId, data)
  },

  deleteDocument: (documentId) => {
    return api
      .provider()
      .database.deleteDocument(databaseId, collectionId, documentId)
  },
}

export default api
