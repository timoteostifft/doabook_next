import { RiSearchLine } from 'react-icons/ri'
import { CgOptions as Filter } from 'react-icons/cg'
import { Container, Content } from './styles'

const SearchBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <RiSearchLine />
          <input type="text" placeholder="Pesquisar livros..." />
        </div>
        <button type="submit">
          <Filter />
        </button>
      </Content>
    </Container>
  )
}

export default SearchBar
