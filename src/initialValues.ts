import { ValidationSchema } from './Context'

export const initialValues: ValidationSchema = {
  // first step
  firstName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  lastName: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20
  },
  email: {
    value: '',
    error: '',
    validate: 'email'
  },
  gender: {
    value: '',
    error: '',
    validate: 'select'
  },
  date: {
    value: '',
    error: ''
  },
  time: {
    value: '',
    error: ''
  },
  birthPlace: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    // maxLength: 20,
    helperText: 'Custom error message'
  },
  marriageStatus: {
    value: '',
    error: '',
    validate: 'select'
  },
  homeAddress: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    // maxLength: 20,
    helperText: 'Custom error message'
  },
  aboutMe: {
    value: '',
    error: '',
    required: false,
    validate: 'text',
    minLength: 2,
    // maxLength: 20,
    helperText: 'Custom error message'
  },
  gautra: {
    value: '',
    error: '',
    validate: 'select'
  },
  caste: {
    value: '',
    error: '',
    validate: 'select'
  },
  manglik: {
    value: '',
    error: '',
    validate: 'select'
  },
  bloodGroup: {
    value: '',
    error: '',
    validate: 'select'
  },
  height: {
    value: '',
    error: '',
    validate: 'text',
    // minLength: 3,
    maxLength: 20
  },
  weight: {
    value: '',
    error: '',
    validate: 'text',
    // minLength: 3,
    maxLength: 20
  },
  color: {
    value: '',
    error: '',
    validate: 'select'
  },

  // second step

  education: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  field: {
    value: '',
    error: '',
    required: true,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  jobDesignation: {
    value: '',
    error: '',
    required: false,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  companyName: {
    value: '',
    error: '',
    required: false,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },
  jobCity: {
    value: '',
    error: '',
    required: false,
    validate: 'text',
    minLength: 2,
    maxLength: 20,
    helperText: 'Custom error message'
  },

  jobStatus: {
    value: '',
    error: '',
    validate: 'select'
  },
  jobType: {
    value: '',
    error: '',
    validate: 'select'
  },

  city: {
    value: '',
    error: '',
    validate: 'text',
    minLength: 3,
    maxLength: 20
  },
  agreenemt: {
    value: false,
    error: '',
    required: true,
    validate: 'checkbox',
    helperText: 'Please accept our terms and conditions'
  },
  phone: {
    value: '',
    error: '',
    validate: 'phone',
    maxLength: 15
  }
}
