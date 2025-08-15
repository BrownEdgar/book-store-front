import { ErrorMessage, Field, Form, Formik } from 'formik';
import "./AddAuthorForm.module.css";
import type { IAuthor } from '@/types/interfaces';
import * as yup from 'yup';
import axios from 'axios';
import { CONFIG } from '@/shared/config';

const initialValues: IAuthor = {
  name: '',
  age: 0,
  country: ''
}
const validationSchema = yup.object({
  name: yup.string().required('Required'),
  age: yup.string().required('Required'),
  country: yup.string().required('Required'),
});

function AddAuthorForm() {
  const handleSubmit = async (values: IAuthor) => {
    console.log(values);
    try {
      const res = await axios.post(CONFIG.VITE_DB_URL + "/authors", values);
      const data = res.data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='AddAuthorForm'>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {
          () => {
            return (
              <Form>
                <div className='FormGroup'>
                  <label htmlFor="name">Author Name</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage name='name' component='p' />
                </div>
                <div className='FormGroup'>
                  <label htmlFor="age">Author age</label>
                  <Field type="text" name="age" id="age" />
                  <ErrorMessage name='age' component='p' />
                </div>
                <div className='FormGroup'>
                  <label htmlFor="country">Country</label>
                  <Field as="select" name="country" id="country">
                    <option value="argentina">Argentina</option>
                    <option value="armenia">Armenia</option>
                    <option value="france">France</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                  </Field>
                  <ErrorMessage name='country' component='p' />
                </div>
                <div className='FormGroup'>
                  <Field type="submit" value="add Author" />
                </div>
              </Form>
            )
          }
        }

      </Formik>
    </div>
  );
}

export default AddAuthorForm;