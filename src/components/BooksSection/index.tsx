import React from 'react';
import { useAuthenticationContext } from '../../hooks/useAuthenticationContext';
import { useInstitutionContext } from '../../hooks/useInstitutionContext';
import { Book } from '../../types/Book';
import BookCard from '../BookCard';

import { Container } from './styles';

interface BooksSectionProps {
  books: Book[]
}

const BooksSection: React.FC<BooksSectionProps> = ({ books }) => {
  const { authentication } = useAuthenticationContext()
  const { institution } = useInstitutionContext()
  return books ? (
    <Container>
      {books.map(book => (book.institution_id === institution?.id) && (
        <BookCard key={book.id} book={book} isAdmin={authentication?.user.id === institution.admin_id} />
      ))}
    </ Container>
  ) : (
    <h3>Nenhum livro cadastrado.</h3>
  )
}

export default BooksSection;