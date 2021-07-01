import * as yup from 'yup';
import { COUNTRY } from 'utils/enums';

export const registerSchema = yup.object().shape({
  firstName: yup.string().required('Please enter your First name'),
  lastName: yup.string().required('Please enter your Last name'),
  phoneNumber: yup
    .string()
    .required('Please enter your Phone')
    .when('country', {
      is: country => country === COUNTRY.USA,
      then: yup.string().matches(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/, 'Invalid Usa format'),
      otherwise: yup.string().matches(/^[0-9]{4} [0-9]{3} [0-9]{3}$/, 'Invalid Aus format')
    }),
  email: yup
    .string()
    .required('Please enter your Email')
    .email('Invalid email address')
    .matches(/^[a-z]+[A-Za-z\d.@$!%*#?&]*$/, 'Must start with a lowercase letter'),

  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Oops! You need a password longer than 8 characters with numbers and letters.'
    )
});
