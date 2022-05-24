/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import { Wrapper } from '../styles/pages/Login'

const Login: React.FC = () => {
  return (
    <Wrapper>
      <Head>
        <title>Login | doaBook</title>
      </Head>

      <LoginForm />
    </Wrapper>
  )
}

export default Login