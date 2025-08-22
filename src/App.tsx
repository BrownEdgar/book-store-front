import { useAppSelector, useAppDispatch } from '@/app/hooks'
import './App.css'

import { useEffect } from 'react';
import AddAuthorForm from '@components/AddAuthorForm/AddAuthorForm';
import AddBookForm from '@components/AddBookForm/AddBookForm';
import { deleteBook, fetchBooks, filterBooks, getBooksByFilter } from './features/books/bookSlice';
import BooksInfo from './components/BooksInfo/BooksInfo';

function App() {







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

      <BooksInfo />


      <hr />
      <div className='icons'>
        <div className="filter">
          <button onClick={handelFilter}>Filter ^$</button>
        </div>
      </div>
      <hr />

    </div>
  )
}

export default App
