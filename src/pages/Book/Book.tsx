import { useAppSelector } from '@/app/hooks';

import { useParams } from 'react-router';

function Book() {
  const book = useAppSelector((state) => state.books.specialBook)
  const { id } = useParams()

  return <div>Book N {id}</div>;
}

export default Book;
