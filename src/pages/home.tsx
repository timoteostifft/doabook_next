/* eslint-disable react-hooks/rules-of-hooks */
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import InstitutionsSection from '../components/InstitutionsSection'
import BooksSection from '../components/BooksSection'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import api from '../services/api'
import { Wrapper } from '../styles/pages/Home'
import { Institution } from '../types/Institution'
import { Book } from '../types/Book'
import { useAuthenticationContext } from '../hooks/useAuthenticationContext'
import { useEffect } from 'react'
import { User } from '../types/User'
import { useUsersContext } from '../hooks/useUsersContext'
import { useInstitutionsContext } from '../hooks/useInstitutions'

interface HomeProps {
  users: User[]
  institutions: Institution[]
  books: Book[]
}

const Home: NextPage<HomeProps> = ({ institutions, books, users }) => {
  const { authentication } = useAuthenticationContext()
  const router = useRouter()
  
  if (!authentication?.token) {
    useEffect(() => {
      router.push("/")
      alert("Usuário precisa estar logado.")
    })
  }

  const { setUsers } = useUsersContext()
  const { setInstitutions } = useInstitutionsContext()

  setUsers(users)
  setInstitutions(institutions)

  return (
    <Wrapper>
      <Head>
        <title>Home | doaBook</title>
      </Head>

      <Header />
      <InstitutionsSection />
      <SearchBar />
      <BooksSection books={books}/>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const usersResponse = await api.get('/users')
  const institutionsResponse = await api.get('/institutions')
  const booksResponse = await api.get('/books/97c9ea6b-7bf6-424e-bafa-6b8213503080')

  return {
    props: {
      users: usersResponse.data,
      institutions: institutionsResponse.data,
      books: booksResponse.data
    },
  }
}

export default Home
