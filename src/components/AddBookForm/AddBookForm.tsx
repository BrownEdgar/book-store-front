import { Field, Form, Formik } from 'formik';
import "./AddBookForm.module.css";
import type { IBook } from '@/types/interfaces';
import axios from 'axios';
import { CONFIG } from '@/shared/config';

const initialValues: IBook = {
  title: '',
  genre: '',
  author: '',
  price: 10,
  pages: 10,
  releaseDate: '',
  tags: [],
  ratings: [],
}

function AddBookForm() {

  const handleSubmit = async (values: IBook) => {
    console.log(values);
    try {
      const res = await axios.post(CONFIG.VITE_DB_URL + "/books", values);
      const data = res.data
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='AddBookForm'>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {
          () => {
            return (
              <Form>
                <div className='FormGroup FormGroup-50'>
                  <label htmlFor="title">Book title</label>
                  <Field type="text" name="title" id="title" />
                </div>
                <div className='FormGroup FormGroup-50'>
                  <label htmlFor="author">Author name</label>
                  <Field type="text" name="author" id="author" />
                </div>
                <div className='FormGroup FormGroup-50'>
                  <label htmlFor="price">Price</label>
                  <Field type="number" name="price" id="price" min={10} />
                </div>
                <div className='FormGroup FormGroup-50'>
                  <label htmlFor="pages">Pages count</label>
                  <Field type="number" name="pages" id="pages" min={10} />
                </div>
                <div className='FormGroup FormGroup-50'>
                  <label htmlFor="ratings">Book ratings</label>
                  <Field type="number" name="ratings" id="ratings" min={1} />
                </div>
                <div className='FormGroup FormGroup-50'>
                  <label htmlFor="releaseDate">releaseDate</label>
                  <Field type="date" name="releaseDate" id="releaseDate" min={10} />
                </div>
                <div className='FormGroup FormGroup-50'>
                  <label htmlFor="genre">Genre</label>
                  <Field as="select" name="genre" id="genre" >
                    {/* gets from DB */}
                    <option value="" disabled></option>
                    <option value="comedy">Comedy</option>
                    <option value="classic">Classic</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="drama">Drama</option>
                    <option value="art-chaos">Art-chaos</option>
                  </Field>
                </div>
                <div className='FormGroup FormGroup-50'>
                  <label htmlFor="tags">Tags</label>
                  <Field as="select" name="tags" id="tags">
                    <option value="" disabled></option>
                    <option value="comedy">Comedy</option>
                    <option value="classic">Classic</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="drama">Drama</option>
                    <option value="art-chaos">Art-chaos</option>
                  </Field>
                </div>
                <div className='FormGroup'>
                  <Field type="submit" value="add Book" id="add-book" />
                </div>
              </Form>
            )
          }
        }

      </Formik>
    </div>
  );
}

export default AddBookForm;