import React from 'react';
import Modal from 'react-modal'
import { Institution } from '../../types/Institution';
import { IoMdClose as Close } from 'react-icons/io'

import InstitutionCard from '../InstitutionCard';
import { Container, Content, Header } from './styles';

interface InstitutionsListModalProps {
  modalIsOpen: boolean
  handleCloseModal: () => void
  institutions: Institution[]
}

const InstitutionsListModal: React.FC<InstitutionsListModalProps> = ({ modalIsOpen, handleCloseModal, institutions }) => {
  return (
    <Modal
      ariaHideApp={false}
      isOpen={modalIsOpen}
      onRequestClose={() => handleCloseModal()}
      overlayClassName='react-modal-overlay'
      className='preventDefault'
    >
      <Container>
        <Header>
          <h3>Instituições:</h3>
          <button onClick={() => handleCloseModal()}>
            <Close />
          </button>
        </Header>
        <Content>
          {institutions.map(institution => (
            <InstitutionCard 
              key={institution.id} 
              institution={institution}
              handleUseModal={() => handleCloseModal()}
            />
          ))}
        </Content>
      </Container>
    </Modal>
  );
}

export default InstitutionsListModal;