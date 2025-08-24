import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { deleteBook, fetchSpecialBook } from '@/features/books/bookSlice';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Book.css'

function Book() {
  const dispatch = useAppDispatch()
  const book = useAppSelector((state) => state.books.specialBook)

  const [del, setDel] = useState(false)



  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    dispatch(fetchSpecialBook(id))
  }, [dispatch])

  const handleDelete = (id: string) => {
    dispatch(deleteBook(id))
    setDel(true)
    location.reload()
  }

  if (!book) {
    return <h2 className='loading'>Loading...</h2>  ///gpt
  }

  if (del) {
    <h2>Book is succesufully deleted!</h2>
  }


  return (


    <>
      <div className='main'>
        <h1>{book.title}</h1>
        <img src={`http://localhost:3000/images/${book.poster}`} />
        <div className='book_wrapper'>
          <h2>Pages: {book.pages}</h2>
          <h2>Genre: {book.genre}</h2>
        </div>
        <div className='book_wrapper'>
          <h2>Price: {book.price}</h2>
          <h2>Ratings: {book.ratings}</h2>
        </div>
        <button onClick={() => handleDelete(book._id)}>DELETE</button>
      </div>

    </>
  )
}

export default Book;