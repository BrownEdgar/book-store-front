import { Link, Outlet } from 'react-router';

function Home() {
  return <div>
    <ul>
      <li>
        <Link to='books'>See all books</Link>
      </li>
      <li>
        <Link to='authors'>See all authors</Link>
      </li>
      <li>
        <Link to='add-book'>Add book</Link>
      </li>
      <li>
        <Link to='add-author'>Add Author</Link>
      </li>
    </ul>



    <Outlet />
    <footer>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quae, esse at et in sapiente facere veritatis quia incidunt nam ratione provident blanditiis, neque delectus, consectetur non accusantium illo praesentium.</p>
    </footer>
  </div>;
}

export default Home;
