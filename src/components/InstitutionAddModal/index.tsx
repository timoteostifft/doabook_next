import React, { useEffect, useState } from 'react';
import { Institution } from '../../types/Institution';
import { IoMdClose as Close } from 'react-icons/io'

import Modal from 'react-modal'
import { Container, Header, Content } from './styles';
import api from '../../services/api';
import { useUsersContext } from '../../hooks/useUsersContext';
import UserCard from '../UserCard';
import { useAuthenticationContext } from '../../hooks/useAuthenticationContext';

interface InstitutionEditModalProps {
  modalIsOpen: boolean
  handleCloseModal: () => void
}

const InstitutionAddModal: React.FC<InstitutionEditModalProps> = ({ 
  modalIsOpen, 
  handleCloseModal
}) => {

  const { authentication } = useAuthenticationContext()

  const { users, setUsers } = useUsersContext()

  const [ name, setName ] = useState<string>('')
  const [ address, setAddress] = useState<string>('')
  const [ admin_id, setAdmin_id ] = useState<string>('')

  function handleAdminId(id: string) {
    setAdmin_id(id)
  }

  const config = {
    headers: { Authorization: `Bearer ${authentication?.token}` }
  };

  async function handleAdd (name: string, address: string, admin_id: string){
    await api.post(
      '/institutions', 
      { name,  address, admin_id },
      config
      )
    await api.get('/institutions').then(response => setUsers(response.data))
  }
  
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
          <h3>Cadastro de Instituição</h3>
          <button onClick={() => handleCloseModal()}>
            <Close />
          </button>
        </Header>
        <Content>
          <form onSubmit={() => handleAdd(name, address, admin_id)}>
            <div className='input'>
              <p>
                Nome:
              </p>
              <input 
                type="text" 
                required
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className='input'>
              <p>
                Endereço:
              </p>
              <input 
                type="text" 
                required
                onChange={event => setAddress(event.target.value)}
              />
            </div>
          </form>
          <div className='content'>
              <p>
                Usuário Administrador:
              </p>
              <section>
                {(users) && (
                  users.map(user => (
                    (user.name !== 'admin') && (
                      <UserCard key={user.id} user={user} setAdmin_id={handleAdminId} selected={user.id === admin_id}></UserCard>
                    )
                  ))
                )}
              </section>
            </div>
            <nav>
              <button onClick={() => handleCloseModal()}>Cancelar</button>
              <button onClick={() => handleAdd(name, address, admin_id)}>Adicionar</button>
            </nav>
        </Content>
      </Container>
    </Modal>
  )
}

export default InstitutionAddModal;