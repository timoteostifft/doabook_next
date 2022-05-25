import React from 'react';
import { Book } from '../../types/Book';
import BookCard from '../BookCard';

import { Container } from './styles';

interface BooksSectionProps {
  books: Book[]
}

const BooksSection: React.FC<BooksSectionProps> = ({ books }) => {
  return (
    <Container>
      {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
    </ Container>
  );
}

export default BooksSection;