/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useAuthenticationContext } from '../../hooks/useAuthenticationContext'
import { Container, Content } from './styles'

const LoginForm: React.FC = () => {
  const { login } = useAuthenticationContext()

  function handleLogin (email: string, password: string){
    login({email, password})
  }

  const [ email, setEmail ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')

  return (
    <Container>
      <img src="images/brand.png" alt="" />
      <Content>
      <form>
        <input 
          type="text" 
          placeholder='Email' 
          required
          onChange={event => setEmail(event.target.value)}
        />
        <input 
          type="password" 
          placeholder='Senha' 
          required
          onChange={event => setPassword(event.target.value)}
        />
      </form> 
      <nav>
        <button>Cadastro</button>
        <button onClick={() => handleLogin(email, password)}>
          Login
        </button>
      </nav>
      </Content>
    </Container>
  )
}

export default LoginForm