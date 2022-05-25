import React, { createContext, ReactNode, useState } from 'react'
import { Institution } from '../types/Institution'

type InstitutionProviderProps = {
  children: ReactNode
}

type InstitutionsContextData = {
  institution: Institution
  setInstitution: (institution: Institution) => void
}

const defaultInstitution: Institution = {
  id: '97c9ea6b-7bf6-424e-bafa-6b8213503080',
  name: 'test',
  address: '',
  admin_id: '',
}

const InstitutionContext = createContext(
  {} as InstitutionsContextData
  )

function InstitutionProvider({ children }: InstitutionProviderProps) {
  const [ institution, setInstitution] = useState<Institution>(defaultInstitution)
  return (
    <InstitutionContext.Provider value={{ institution, setInstitution }}>
      { children }
    </InstitutionContext.Provider>
  )
}

export { InstitutionProvider, InstitutionContext }