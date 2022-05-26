/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, ReactNode, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import api from '../services/api'
import { Authentication } from '../types/Authentication'
import postToLocalStorage from '../utils/postToLocalStorage'

interface ILoginProps {
  email: string,
  password: string
}

type AuthenticationProviderProps = {
  children: ReactNode
}

type AuthenticationContextData = {
  authentication: Authentication | undefined
  login: ({ email, password }: ILoginProps) => void
}

const AuthenticationContext = createContext({} as AuthenticationContextData)

function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [ authentication, setAuthentication ] = useState<Authentication>()
  const router = useRouter()

  const login = async ({ email, password }: ILoginProps) => {
    try {
      const authenticated = await api.post('/sessions', { email, password })
        .then(response => response.data)

        setAuthentication(authenticated)
        postToLocalStorage('token', authenticated.token)

        router.push("/")
    } catch(err: any) {
      alert(`${err.response.data.message}`)
    }
  }
  return (
    <AuthenticationContext.Provider value={{ authentication, login }}>
      { children }
    </AuthenticationContext.Provider>
  )
}

export { AuthenticationContext, AuthenticationProvider }
