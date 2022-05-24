import { RiSearchLine } from 'react-icons/ri'
import { CgOptions as Filter } from 'react-icons/cg'
import { Container, Content } from './styles'

const SearchBar = () => {
  return (
    <Container>
      <Content>
        <div>
          <RiSearchLine />
          <input type="text" placeholder="Pesquise aqui" />
        </div>
        <button type="submit">
          <Filter />
        </button>
      </Content>
    </Container>
  )
}

export default SearchBar
