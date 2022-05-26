import React from 'react';
import { Book } from '../../types/Book';
import { Container, Content} from './styles';
import dayjs from 'dayjs'
import { BsFillBookmarkPlusFill as Select} from 'react-icons/bs'
import { AiFillEdit as Edit } from 'react-icons/ai'


interface BookCardProps {
  book: Book
  isAdmin: Boolean
}

const BookCard: React.FC<BookCardProps> = ({ book, isAdmin }) => {
  function handleGetBook(id: string) {}

  return (
    <Container>
      <Content>
        <section>
          <h3>{book.name}</h3>
          <p>· {book.edition}º Edição | {book.year}</p>
          <p>· Condição: {book.condition}</p>
          <p>· {book.quantity} disponíveis</p>
          <p>· Lançamento: {dayjs(book.launch).format('DD/MM/YYYY')}</p>

        </section>
        <nav>
          <button>
            <Select />
            Levar
          </button>
          <button 
            type="button" 
            disabled={!isAdmin}
            onClick={() => {console.log('Implementar edição')}}>
            <Edit />
            Editar
          </button>
        </nav>
      </ Content>
    </ Container>
  )
}

export default BookCard;