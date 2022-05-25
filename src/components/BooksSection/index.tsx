import React from 'react';
import { useInstitutionContext } from '../../hooks/useInstitutionContext';
import { Book } from '../../types/Book';
import BookCard from '../BookCard';

import { Container } from './styles';

interface BooksSectionProps {
  books: Book[]
}

const BooksSection: React.FC<BooksSectionProps> = ({ books }) => {
  const { institution } = useInstitutionContext()
  return (
    <Container>
      {books.map(book => (book.institution_id === institution.id) && (
        <BookCard key={book.id} book={book} />
      ))}
    </ Container>
  );
}

export default BooksSection;