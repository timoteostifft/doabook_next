import React, { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { Institution } from '../../types/Institution';

import { Container, Header, Content } from './styles';
import { IoMdClose as Close } from 'react-icons/io'
import api from '../../services/api';
import { useAuthenticationContext } from '../../hooks/useAuthenticationContext';

interface InstitutionEditModalProps {
  institution: Institution
  modalIsOpen: boolean
  handleCloseModal: () => void
}

const InstitutionEditModal: React.FC<InstitutionEditModalProps> = ({ institution, modalIsOpen,  handleCloseModal }) => {

  const { authentication } = useAuthenticationContext()
  // const [ admin, setAdmin ] = useState()

  const config = {
    headers: { Authorization: `Bearer ${authentication?.token}` }
  };

  const admin = useEffect(() => {
    api.get(`/users/${institution.admin_id}`, config)
      .then(response => response.data)
  }, [])

  
  // async function getAdmin() {
  //   const admin = await api.get(`/users/${institution.admin_id}`, config).then(response => response.data)
  //   return admin;
  // }

  // const admin = getAdmin()

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
          <h3>{institution.name}</h3>
          <button onClick={() => handleCloseModal()}>
            <Close />
          </button>
        </Header>
        <Content>
          <p>Endereço: {institution.address}</p>
          <p>Administrador: {admin?.name}</p>
        </Content>
      </Container>
    </Modal>
  );
}

export default InstitutionEditModal;