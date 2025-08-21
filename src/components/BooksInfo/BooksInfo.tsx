import { useEffect, useState } from "react";
import './BooksInfo.css'
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchAuthors } from "@/features/authors/authorSlice";
import { fetchGeanres, getUnicGeanre } from "@/features/geanres/geanresSlice";

export default function Info() {
  const [value, setValue] = useState(false);

  const authors = useAppSelector((state) => state.autors)
  const geanres = useAppSelector((state) => state.geanres)
  const dispatch = useAppDispatch()

  console.log(geanres.unique);


  useEffect(() => {
    dispatch(fetchAuthors())
    dispatch(fetchGeanres())
    dispatch(getUnicGeanre())
  }, [dispatch])




  const handleRight = () => {
    setValue((prev) => !prev);
  };

  return (
    <div className={`info__main${value ? '_left' : ''}`}>
      <div className="ok">
        <div>
          <h2>AUTHORS:</h2>
          {
            authors.data.map(elem => {
              return <h3 key={elem._id}>{elem.name}</h3>
            })

          }
        </div>
        <div>
          <h2>GENERS:</h2>

          {
            geanres.all.map(elem => {
              return <h3 key={elem._id}>{elem}</h3>

            })
          }
        </div>

        <div>
          <h2>UNIQUE GENERS:</h2>

          {
            geanres.unique.map(elem => {
              return <div key={elem._id} className="count_div">
              <h3 >Geanre - {elem.geanre}</h3>
              <h3>Count - {elem.count}</h3>
              </div>

            })
          }
        </div>


      </div>
      <button className="right" onClick={handleRight}>
        {value ? 'see more' : 'close'}
      </button>
    </div>
  );
}
