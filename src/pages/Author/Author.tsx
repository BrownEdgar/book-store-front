import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { deleteFetch, fetchSpecialAuthor } from "@/features/authors/authorSlice";
import { useEffect } from "react";
import { useParams } from "react-router";
import './Author.css'

function Author() {
  const dispatch = useAppDispatch()
  const author = useAppSelector((state) => state.autors.specialAuthor)

  const { id } = useParams()

  console.log(author);


  useEffect(() => {
    dispatch(fetchSpecialAuthor(id))
  }, [dispatch])

  const handleDelete = (id : string) => {
    dispatch(deleteFetch(id))
  }


  return <div className=" speiclaAuthor">
    <img src={`http://localhost:3000/images/${author.avatar}`} />
    <h1>{author.name}</h1>
    <h2>Author age: {author.age}</h2>
    <h2>Author country: {author.country}</h2>
    <button onClick={() => handleDelete(author._id)}>DELETE</button>

  </div>;
}

export default Author;
