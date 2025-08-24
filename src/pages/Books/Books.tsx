import { useAppDispatch, useAppSelector } from '@/app/hooks';
import "./Books.css";
import { fetchBooks, getBooksByFilter } from '@/features/books/bookSlice';
import { useEffect } from 'react';
import { Link } from 'react-router';
import Info from '@/components/BooksInfo/BooksInfo';

function Books() {
  const books = useAppSelector(getBooksByFilter);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch]);




  return (
    <div className="Books">
      <Info />
      {books.map((elem) => {
        return (
          <div key={elem._id} className='book'>
            <h1>{elem.title}</h1>
            <Link to={`/books/${elem._id}`}>
              <img src={`http://localhost:3000/images/${elem.poster}`} alt="" />
            </Link>
            <h2>Genere: {elem.genre}</h2>
            <h2>Price: {elem.price} $</h2>
            <h2>Ratings: {elem.ratings}</h2>
            <h2>Author:
              {elem.author == null ? <label>cant find</label> : elem.author}
            </h2>
          </div>
        )
      })}
    </div>
  )
}

export default Books;
