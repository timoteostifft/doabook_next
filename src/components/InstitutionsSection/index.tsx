import React, { useState } from 'react';
import InstitutionEditModal from '../InstitutionEditModal';
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

  const [ InstitutionEditModalIsOpen, setInstitutionEditModalIslOpen ] = useState<boolean>(false)
  const [ InstitutionsListModalIsOpen, setInstitutionsListModalIsOpen ] = useState<boolean>(false)

  return (
    <Container>
      <Content>
        <h3>{institution?.name}</h3>
        <nav>
          <button onClick={() => setInstitutionEditModalIslOpen(!InstitutionEditModalIsOpen)}>
            <Add />
          </button>
          <button onClick={() => setInstitutionsListModalIsOpen(!InstitutionsListModalIsOpen)}>
            <Select />
          </button>
        </nav>
      </Content>

      { InstitutionEditModalIsOpen && (
        <InstitutionEditModal
          institution={institution} 
          modalIsOpen={InstitutionEditModalIsOpen}
          handleCloseModal={() => setInstitutionEditModalIslOpen(!InstitutionEditModalIsOpen)}
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