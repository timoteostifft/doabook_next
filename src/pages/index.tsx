import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import InstitutionsSection from '../components/InstitutionsSection'
import BooksSection from '../components/BooksSection'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import api from '../services/api'
import { Wrapper } from '../styles/pages/Home'
import { Institution } from '../types/Institution'
import { Book } from '../types/Book'

interface HomeProps {
  institutions: Institution[]
  books: Book[]
}

const Home: NextPage<HomeProps> = ({ institutions, books }) => {
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
  const institutionsResponse = await api.get('/institutions')
  const booksResponse = await api.get('/books')

  return {
    props: {
      institution: institutionsResponse.data,
      books: booksResponse.data
    },
  }
}

export default Home
