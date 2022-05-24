import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import api from '../services/api'
import { Wrapper } from '../styles/pages/Home'
import { Institution } from '../types/Institution'

interface HomeProps {
  institutions: Institution[]
}

const Home: NextPage<HomeProps> = ({ institutions }) => {
  return (
    <Wrapper>
      <Head>
        <title>Home | doaBook</title>
      </Head>

      <Header />
      <SearchBar />

    </Wrapper>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const institutionsResponse = await api.get('/institutions')

  return {
    props: {
      institution: institutionsResponse.data,
    },
  }
}

export default Home
