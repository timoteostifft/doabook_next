import React, { useState } from 'react';
import InstitutionsModal from '../InstitutionsModal';

import { Institution } from '../../types/Institution';
import { Container, Content } from './styles';

import { VscListSelection as Select } from 'react-icons/vsc'

import { useInstitutionContext } from '../../hooks/useInstitutionContext'

interface InstitutionsSectionProps {
  institutions: Institution[]
}

const InstitutionsSection: React.FC<InstitutionsSectionProps> = ({ institutions }) => {

  const { institution, setInstitution } = useInstitutionContext()

  const [ isModalOpen, setIsModalOPen ] = useState<boolean>(false)

  return (
    <Container>
      <Content>
        <h3>Instituição: {institution.name}</h3>
        <button onClick={() => setIsModalOPen(!isModalOpen)}>
          <Select />
        </button>
      </Content>

      {isModalOpen && (
        <InstitutionsModal institution={institution} institutions={institutions} />
      )}
    </Container>
    )
}

export default InstitutionsSection;