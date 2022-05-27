/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Institution } from '../../types/Institution';
import { AiFillEdit as Edit} from 'react-icons/ai'


import { Container, Content } from './styles';
import { useInstitutionContext } from '../../hooks/useInstitutionContext';
import InstitutionEditModal from '../InstitutionEditModal';

interface InstitutionCardProps {
  institution: Institution
  handleUseModal: () => void
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({ institution, handleUseModal }) => {
  const { setInstitution } = useInstitutionContext()

  function useInstitution(institution: Institution) {
    setInstitution(institution)
    handleUseModal()
  }

  const [ institutionEditModalIsOpen, setInstitutionEditModalIsOpen ] = useState<boolean>(false)


  return (
    <Container>
      <Content onClick={() => useInstitution(institution)}>
        <h5>{institution.name}</h5>
      </Content>
      <button onClick={() => setInstitutionEditModalIsOpen(!institutionEditModalIsOpen)}>
        <Edit />
      </button>
      {(institutionEditModalIsOpen) && (
      <InstitutionEditModal 
        institution={institution}
        modalIsOpen={institutionEditModalIsOpen}
        handleCloseModal={() => setInstitutionEditModalIsOpen(!institutionEditModalIsOpen)}/>
      )}
    </Container>  
  )
}

export default InstitutionCard;