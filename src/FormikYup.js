import { useFormik } from "formik";
import * as Yup from 'yup'

function FormikYup() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('The field is required'),
            email: Yup.string().email('Error Syntax').required('The field is required'),
            password: Yup.string().min(5, 'Enter at least 5 characters !').required('The field is required'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password do not match !').required('The field is required'),
        }),
        onSubmit: value => {
            console.log(value);
        }
    })
  return (
    <div className='form'>
        <form onSubmit={formik.handleSubmit}>
            <div className='form__group'>
                <label>Name:</label>
                <input 
                    type='text' 
                    name='name' 
                    autoComplete="off"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <span className='form__error'>{formik.errors.name}</span> : null}
            </div>
            <div className='form__group'>
                <label>Email:</label>
                <input 
                    type='text' 
                    name='email' 
                    autoComplete="off"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email ? <span className='form__error'>{formik.errors.email}</span> : null}
            </div>
            <div className='form__group'>
                <label>Password:</label>
                <input 
                    type='password' 
                    name='password' 
                    autoComplete="off"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password ? <span className='form__error'>{formik.errors.password}</span> : null}
            </div>
            <div className='form__group'>
                <label>Confirm Password:</label>
                <input 
                    type='password' 
                    name='confirmPassword' 
                    autoComplete="off"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? <span className='form__error'>{formik.errors.confirmPassword}</span> : null}
            </div>
            <button type='submit' className='form__submit'>Submit</button>
        </form>
    </div>
  );
}

export default FormikYup;
