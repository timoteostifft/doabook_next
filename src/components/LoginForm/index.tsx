/* eslint-disable @next/next/no-img-element */
import { Container, Content } from './styles'

const LoginForm = () => {
  return (
    <Container>
      <img src="images/brand.png" alt="" />
      <Content>
      <form>
        <input type="text" placeholder=' Email'/>
        <input type="text" placeholder=' Senha'/>
      </form> 
      <nav>
        <button>Cadastro</button>
        <button>Login</button>
      </nav>
      </Content>
    </Container>
  )
}

export default LoginForm