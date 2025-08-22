
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home/Home';
import Authors from './pages/Authors/Authors';
import Author from './pages/Author/Author';
import Books from './pages/Books/Books';
import Book from './pages/Book/Book';
import AddAuthor from './pages/AddAuthor/AddAuthor';
import AddBook from './pages/AddBook/AddBook';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: 'authors',
        element: <Authors />
      },
      {
        path: 'authors/:id',
        element: <Author />
      },
      {
        path: 'books',
        element: <Books />
      },
      {
        path: 'add-author',
        element: <AddAuthor />
      },
      {
        path: 'add-book',
        element: <AddBook />
      },
      {
        path: 'books/:id',
        element: <Book />
      }
    ]

  }
])


function App2() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App2;
