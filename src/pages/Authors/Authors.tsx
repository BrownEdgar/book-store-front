import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchAuthors } from "@/features/authors/authorSlice";
import { useEffect } from "react";
import './Authors.css'
import { Link } from "react-router";

function Authors() {

  const authors = useAppSelector((state) => state.autors)

  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(fetchAuthors())
  }, [dispatch])

  console.log(authors.data);




  return <div className="author">
     {
       authors.data.map(elem => {
        return <div key={elem._id}>
          <h1>{elem.name}</h1>
          <Link to={`/authors/${elem._id}`}>
          <img src={`http://localhost:3000/images/${elem.avatar}`}/>
          </Link>
          <h2>Author age: {elem.age}</h2>
          <h2>Author country: {elem.country}</h2>
        </div>
      })
    }

  </div>;
}

export default Authors;
