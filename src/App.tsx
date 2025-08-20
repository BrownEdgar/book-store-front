import { useAppSelector, useAppDispatch } from '@/app/hooks'
import './App.css'

import { useEffect } from 'react';
import AddAuthorForm from '@components/AddAuthorForm/AddAuthorForm';
import AddBookForm from '@components/AddBookForm/AddBookForm';
import { deleteBook, fetchBooks, filterBooks } from './features/books/bookSlice';

function App() {
  const books = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  console.log(books);

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch]);


  const handleDelete = (id: any) => {
    dispatch(deleteBook(id))
  }

  const handelFilter = () => {
    dispatch(filterBooks())
  }


  return (
    <div className="App">
      <h1 className='App__title'>React Book Store</h1>
      <div className="App__flex">
        <AddAuthorForm />
        <div className="App__devider"></div>
        <AddBookForm />
      </div>

      <hr />
      <div className='icons'>
        <div className="filter">
          <button onClick={handelFilter}>Filter ^$</button>
        </div>
      </div>
      <hr />
      <div className="App__books">
        {books.data.map((elem) => {

          return (
            <div key={elem._id} className='book'>
              <h1>{elem.title}</h1>
              <img src={`http://localhost:3000/images/${elem.poster}`} alt="" />
              <h2>Genere: {elem.genre}</h2>
              <h2>Price: {elem.price} $</h2>
              <h2>Ratings: {elem.ratings}</h2>
              <h2>Author:
                {elem.author == null ? <label>cant find</label> : elem.author}
              </h2>
              <button onClick={() => handleDelete(elem._id)}>DELETE</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
