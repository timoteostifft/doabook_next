import React, { createContext, ReactNode, useState } from 'react'
import { Institution } from '../types/Institution'

type InstitutionProviderProps = {
  children: ReactNode
}

type InstitutionsContextData = {
  institution: Institution | undefined
  setInstitution: (institution: Institution) => void
}

const InstitutionContext = createContext(
  {} as InstitutionsContextData
  )

function InstitutionProvider({ children }: InstitutionProviderProps) {
  const [ institution, setInstitution] = useState<Institution>()
  return (
    <InstitutionContext.Provider value={{ institution, setInstitution }}>
      { children }
    </InstitutionContext.Provider>
  )
}

export { InstitutionProvider, InstitutionContext }