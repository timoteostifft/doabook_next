import React, { useState } from 'react';
import { Institution } from '../../types/Institution';
import { VscListSelection as Select } from 'react-icons/vsc'

import { Container, Content } from './styles';

interface InstitutionsSectionProps {
  institutions: Institution[]
}

const InstitutionsSection: React.FC<InstitutionsSectionProps> = ({ institutions }) => {
  const [ selectedInstitution, setSelectedInstitution ] = useState(institutions[0])
  return (
    <Container>
      <Content>
        <h3>Instituição: {selectedInstitution.name}</h3>
        <button>
          <Select />
        </button>
      </Content>
    </Container>
    )
}

export default InstitutionsSection;