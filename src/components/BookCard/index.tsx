import React from 'react';
import { Book } from '../../types/Book';
import { Container, Content} from './styles';
import dayjs from 'dayjs'
import { AiFillEdit as Edit} from 'react-icons/ai'
import { AiFillDelete as Delete } from 'react-icons/ai'


interface BookCardProps {
  book: Book
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
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
          <Edit />
          Editar
        </button>
        <button>
          <Delete />
          Remover
        </button>
      </nav>
      </ Content>
    </ Container>
  )
}

export default BookCard;