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

interface HomeProps {
  institutions: Institution[]
  books: Book[]
}

const Home: NextPage<HomeProps> = ({ institutions, books }) => {
  const { authentication } = useAuthenticationContext()
  const router = useRouter()
  
  if (!authentication?.token) {
    useEffect(() => {
      router.push("/login")
      alert("Usuário precisa estar logado.")
    })
  }

  return (
    <Wrapper>
      <Head>
        <title>Home | doaBook</title>
      </Head>

      <Header />
      <InstitutionsSection institutions={institutions} />
      <SearchBar />
      <BooksSection books={books}/>
    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const institutionsResponse = await api.get('/institutions')
  const booksResponse = await api.get('/books/97c9ea6b-7bf6-424e-bafa-6b8213503080')

  return {
    props: {
      institutions: institutionsResponse.data,
      books: booksResponse.data
    },
  }
}

export default Home
