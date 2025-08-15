import { useAppSelector, useAppDispatch } from '@/app/hooks'
import './App.css'

import { useEffect } from 'react';
import AddAuthorForm from '@components/AddAuthorForm/AddAuthorForm';
import AddBookForm from '@components/AddBookForm/AddBookForm';
import { fetchBooks } from './features/books/bookSlice';

function App() {
  const books = useAppSelector((state) => state.books)
  const dispatch = useAppDispatch()

  console.log(books);

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch]);


  return (
    <div className="App">
      <h1 className='App__title'>React Book Store</h1>
      <div className="App__flex">
        <AddAuthorForm />
        <div className="App__devider"></div>
        <AddBookForm />
      </div>

      <hr />
      <div className="App__books">
        {books.data.map((elem) => {
          return (
            <div>
              <h1>{elem.title}</h1>
              <img src={`http://localhost:3000/images/${elem.poster}`} />
              <p>{elem.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
