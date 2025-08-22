import { useEffect, useState } from "react";
import './BooksInfo.css'
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchAuthors } from "@/features/authors/authorSlice";
import { fetchGeanres } from "@/features/geanres/geanresSlice";
import { changeFilter } from '@/features/books/bookSlice';

export default function Info() {
  const [value, setValue] = useState(false);

  const authors = useAppSelector((state) => state.autors)
  const geanres = useAppSelector((state) => state.geanres)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAuthors())
    dispatch(fetchGeanres())
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
          <form id="genres">
            {
              geanres.all.map(elem => {
                return (
                  <div>
                    <input
                      type="checkbox"
                      name={elem.geanre}
                      id={elem.geanre}
                      onChange={(e) => {
                        const { checked, name } = e.target


                        dispatch(changeFilter({ name, checked }))
                      }} />
                    <p>{elem.geanre}({elem.count})</p>
                  </div>
                )
              })
            }
          </form>

        </div>
      </div>
      <button className="right" onClick={handleRight}>
        {value ? 'see more' : 'close'}
      </button>
    </div>
  );
}
