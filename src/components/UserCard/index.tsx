import React from 'react';
import { User } from '../../types/User';

import { Container, Content } from './styles';

interface UserCardProps {
  user: User
  selected: boolean
  setAdmin_id: (id: string) => void
}

const UserCard: React.FC<UserCardProps> = ({ user, setAdmin_id, selected }) => {
  return (
    <Container selected={selected}>
      <Content 
        onClick={() => setAdmin_id(user.id)}
        selected={selected}  
      >
        <div>
          {user.name}
        </div>
        <div>
          {user.email}
        </div>
      </Content>
    </Container>
  )
}

export default UserCard;