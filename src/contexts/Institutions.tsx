import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { Institution } from '../types/Institution'

type InstitutionsProviderProps = {
  children: ReactNode
}

type InstitutionsContextData = {
  institutions: Institution[]
  setInstitutions: Dispatch<SetStateAction<Institution[]>>
}

const InstitutionsContext = createContext(
  {} as InstitutionsContextData
  )

function InstitutionsProvider({ children }: InstitutionsProviderProps) {
  const [ institutions, setInstitutions ] = useState<Institution[]>([])
  return (
    <InstitutionsContext.Provider value={{ institutions, setInstitutions }}>
      { children }
    </InstitutionsContext.Provider>
  )
}

export { InstitutionsProvider, InstitutionsContext }