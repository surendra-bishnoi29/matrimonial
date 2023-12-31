import React, { createContext, useCallback, useMemo, useReducer } from 'react'
import { initialValues } from './initialValues'

const isText = /^[A-Z ]+$/i
const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const isPhone = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/ // us
const isZip = /^[0-9]{5}([- /]?[0-9]{4})?$/ // us
const isNumber = /^\d+$/

// Applied to all fields

type Variant = 'outlined' | 'standard' | 'filled'
type Margin = 'dense' | 'normal' | 'none'

const variant: Variant = 'outlined'
const margin: Margin = 'normal'

export declare type ValidationSchema = Record<
  string,
  {
    value?: any
    error?: string
    required?: boolean
    validate?: 'text' | 'number' | 'email' | 'phone' | 'zip' | 'checkbox' | 'select'
    minLength?: number
    maxLength?: number
    helperText?: string
  }
>

type ContextProps = {
  activeStep: number
  activePage: number
  formValues: ValidationSchema
  // eslint-disable-next-line no-unused-vars
  handleChange(event: any, checked?: boolean): void
  handleChangeStepVal(stepVal: any): void
  handleChangePageVal(pageVal: any): void
  handleNext(): void
  handleBack(): void
  handleNextPage(): void
  handleBackPage(): void
  variant: Variant
  margin: Margin
  handleChangeMultiValues(objectValues: any): void
  handleReset(): void
}

export const AppContext = createContext<ContextProps>({
  activeStep: 0,
  activePage: 0,
  formValues: initialValues,
  handleChange() { },
  handleChangeStepVal() { },
  handleChangePageVal() { },
  handleNext() { },
  handleBack() { },
  handleNextPage() { },
  handleBackPage() { },
  variant,
  margin,
  handleChangeMultiValues() { },
  handleReset() { }
})

interface ProviderProps {
  children: React.ReactNode
}

type State = {
  activeStep: number
  activePage: number
  formValues: ValidationSchema
}

type Action =
  | { type: 'increase' }
  | { type: 'decrease' }
  | { type: 'increasePage' }
  | { type: 'decreasePage' }
  | { type: 'form-value'; name: string; fieldValue: any }
  | { type: 'step-form-value', stepVal: any }
  | { type: 'step-page-value', pageVal: any }
  | { type: 'form-error'; name: string; error: string }
  | { type: 'change-multi-form-values'; objectValues: any }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        activeStep: state.activeStep + 1
      }
    case 'decrease':
      return {
        ...state,
        activeStep: state.activeStep - 1
      }
    case 'increasePage':
      return {
        ...state,
        activePage: state.activePage + 1
      }
    case 'decreasePage':
      return {
        ...state,
        activePage: state.activePage - 1
      }
    case 'step-form-value':
      return {
        ...state,
        activeStep: action.stepVal
      }
    case 'step-page-value':
      return {
        ...state,
        activePage: action.pageVal
      }
    case 'change-multi-form-values':
      return {
        ...state,
        formValues: action.objectValues
      }

    case 'form-value':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            value: action.fieldValue.trim()
          }
        }
      }
    case 'form-error':
      return {
        ...state,
        formValues: {
          ...state.formValues,
          [action.name]: {
            ...state.formValues[action.name],
            error: action.error
          }
        }
      }

    default:
      return state
  }
}

export function StepsProvider({ children }: ProviderProps) {
  const [{ activeStep, activePage, formValues }, dispatch] = useReducer(reducer, {
    activeStep: 0,
    activePage: 0,
    formValues: initialValues
  })

  // Proceed to next step
  const handleNext = useCallback(() => dispatch({ type: 'increase' }), [])
  // Go back to prev step
  const handleBack = useCallback(() => dispatch({ type: 'decrease' }), [])
  // Proceed to next page
  const handleNextPage = useCallback(() => dispatch({ type: 'increasePage' }), [])
  // Go back to prev step
  const handleBackPage = useCallback(() => dispatch({ type: 'decreasePage' }), [])

  // handle page and step change

  const handleChangePageVal = useCallback(
    (pageVal: any) => {
      dispatch({ type: 'step-page-value', pageVal })
    }, [])

  const handleChangeStepVal = useCallback(
    (stepVal: any) => {
      dispatch({ type: 'step-form-value', stepVal })
    }, [])
  // Handle form change

  const handleChangeMultiValues = useCallback((objectValues: any) => {
    const keys = Object.keys(objectValues)
    let newValues = formValues
    keys.map((item) => {
      newValues = {
        ...newValues,
        [item]: {
          ...newValues[item],
          value: objectValues[item]
        }
      }
    })
    objectValues = newValues
    dispatch({ type: 'change-multi-form-values', objectValues })
  }, [])

  const handleReset = () => {
    const objectValues = initialValues;
    dispatch({ type: 'change-multi-form-values', objectValues })
  }

  const handleChange = useCallback(
    (event: any, checked?: boolean) => {
      const { type, name, value } = event.target
      console.log("from handlechange", type, name, value)
      const fieldValue = type === 'checkbox' ? checked : value

      dispatch({ type: 'form-value', name, fieldValue })

      const fieldName = initialValues[name]
      if (!fieldName) return

      const { required, validate, minLength, maxLength, helperText } = fieldName

      let error = ''

      // if (required && !fieldValue) error = 'This field is required'
      // if (minLength && value && value.length < minLength) error = `Minimum ${minLength} characters is required.`
      // if (maxLength && value && value.length > maxLength) error = 'Maximum length exceeded!'
      // if (validate) {
      //   switch (validate) {
      //     case 'text':
      //       if (value && !isText.test(value)) error = helperText || 'This field accepts text only.'
      //       break

      //     case 'number':
      //       if (value && !isNumber.test(value)) error = helperText || 'This field accepts numbers only.'
      //       break

      //     case 'email':
      //       if (value && !isEmail.test(value)) error = helperText || 'Please enter a valid email address.'
      //       break

      //     case 'phone':
      //       if (value && !isPhone.test(value))
      //         error = helperText || 'Please enter a valid phone number. i.e: xxx-xxx-xxxx'
      //       break

      //     case 'zip':
      //       if (value && !isZip.test(value)) error = helperText || 'Please enter a valid zip code.'
      //       break

      //     case 'checkbox':
      //       if (!checked) error = helperText || 'Please provide a valid value.'
      //       break

      //     case 'select':
      //       if (!value) error = helperText || 'Please select a value.'
      //       break

      //     default:
      //       break
      //   }
      // }

      dispatch({ type: 'form-error', name, error })
    },
    []
  )

  const constextValue = useMemo(
    () => ({
      activeStep,
      activePage,
      formValues,
      handleChange,
      handleChangeStepVal,
      handleChangePageVal,
      handleNext,
      handleBack,
      handleNextPage,
      handleBackPage,
      variant,
      margin,
      handleChangeMultiValues,
      handleReset
    }),
    [activeStep, activePage, formValues, handleChange, handleNext, handleBack, handleNextPage, handleBackPage, handleChangeStepVal, handleChangePageVal, handleChangeMultiValues, handleReset]
  )

  return (
    <AppContext.Provider value={constextValue}>
      <div className='mui-step-form'>{children}</div>
    </AppContext.Provider>
  )
}
