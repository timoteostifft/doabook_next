/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Institution } from '../../types/Institution';
import { AiFillEdit as Edit} from 'react-icons/ai'


import { Container, Content } from './styles';
import { useInstitutionContext } from '../../hooks/useInstitutionContext';

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

  return (
    <Container>
      <Content onClick={() => useInstitution(institution)}>
        <h5>{institution.name}</h5>
        <button>
          <Edit />
        </button>
      </Content>
    </Container>
  )
}

export default InstitutionCard;