import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function FormikYup() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  const validate = Yup.object({
    name: Yup.string().required('The field is required'),
    email: Yup.string().email('Error Syntax !').required('The field is required'),
    password: Yup.string()
      .min(5, 'Enter at least 5 characters !')
      .required('The field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password do not match !')
      .required('The field is required'),
  })
  const submitForm = (value) => {
    console.log(value)
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validate} onSubmit={submitForm}>
      {({ errors, touched }) => (
        <div className='form'>
          <Form>
            <div className='form__group'>
              <label>Name:</label>
              <Field
                type='text'
                name='name'
                autoComplete='off'
                className={errors.name && touched.name ? 'form__input--error' : ''}
              />
              <ErrorMessage name='name' component='span' className='form__error' />
            </div>
            <div className='form__group'>
              <label>Email:</label>
              <Field
                type='text'
                name='email'
                autoComplete='off'
                className={errors.email && touched.email ? 'form__input--error' : ''}
              />
              <ErrorMessage name='email' component='span' className='form__error' />
            </div>
            <div className='form__group'>
              <label>Password:</label>
              <Field
                type='password'
                name='password'
                autoComplete='off'
                className={errors.password && touched.password ? 'form__input--error' : ''}
              />
              <ErrorMessage name='password' component='span' className='form__error' />
            </div>
            <div className='form__group'>
              <label>Confirm Password:</label>
              <Field
                type='password'
                name='confirmPassword'
                autoComplete='off'
                className={
                  errors.confirmPassword && touched.confirmPassword ? 'form__input--error' : ''
                }
              />
              <ErrorMessage name='confirmPassword' component='span' className='form__error' />
            </div>
            <button type='submit' className='form__submit'>
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default FormikYup
