import React, { useState } from 'react';
import InstitutionAddModal from '../InstitutionAddModal';
import InstitutionsListModal from '../InstitutionsListModal';

import { Institution } from '../../types/Institution';
import { Container, Content } from './styles';

import { BsBoxArrowInRight as Select } from 'react-icons/bs'
import { MdOutlineLibraryAdd as Add } from 'react-icons/md'

import { useInstitutionContext } from '../../hooks/useInstitutionContext'

interface InstitutionsSectionProps {
  institutions: Institution[]
}

const InstitutionsSection: React.FC<InstitutionsSectionProps> = ({ institutions }) => {

  const { institution, setInstitution } = useInstitutionContext()
  
  if(typeof(institution) === "undefined") {
    setInstitution(institutions[0])
  }

  const [ InstitutionAddModalIsOpen, setInstitutionAddModalIslOpen ] = useState<boolean>(false)
  const [ InstitutionsListModalIsOpen, setInstitutionsListModalIsOpen ] = useState<boolean>(false)

  return (
    <Container>
      <Content>
        <h3>{institution?.name}</h3>
        <nav>
          <button onClick={() => setInstitutionAddModalIslOpen(!InstitutionAddModalIsOpen)}>
            <Add />
          </button>
          <button onClick={() => setInstitutionsListModalIsOpen(!InstitutionsListModalIsOpen)}>
            <Select />
          </button>
        </nav>
      </Content>

      { InstitutionAddModalIsOpen && (
        <InstitutionAddModal
          modalIsOpen={InstitutionAddModalIsOpen}
          handleCloseModal={() => setInstitutionAddModalIslOpen(!InstitutionAddModalIsOpen)}
          />
      )}

      { InstitutionsListModalIsOpen && (
        <InstitutionsListModal
          institutions={institutions}
          modalIsOpen={InstitutionsListModalIsOpen}
          handleCloseModal={() => setInstitutionsListModalIsOpen(!InstitutionsListModalIsOpen)}
        />
      )}
    </Container>
    )
}

export default InstitutionsSection;