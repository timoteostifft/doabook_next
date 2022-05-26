import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { User } from '../types/User'

type UsersProviderProps = {
  children: ReactNode
}

type UsersContextData = {
  users: User[] | undefined
  setUsers: Dispatch<SetStateAction<User[]>>
}

const UsersContext = createContext(
  {} as UsersContextData
  )

function UsersProvider({ children }: UsersProviderProps) {
  const [ users, setUsers ] = useState<User[]>([])
  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      { children }
    </UsersContext.Provider>
  )
}

export { UsersProvider, UsersContext }