import * as Yup from 'yup';

const validationSchema = Yup.object({

    name: Yup.string()
        .required('This Field is Required'),

    email: Yup.string()
        .email('Invalid email address')
        .required('This Field is Required'),

    age: Yup.number()
        .typeError('Value Must be Number')
        .positive('Age Must be Greater than Zero')
        .required('This Field is Required'),

    bloodGroup: Yup.string()
        .required('This Field is Required'),

    birth: Yup.date()
        .typeError('Value Must be a Date')
        .required('This Field is Required'),
})

export default validationSchema