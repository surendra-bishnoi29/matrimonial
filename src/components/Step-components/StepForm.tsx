import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import Confirm from './Confirm'
import Success from './Success'
import { AppContext } from '../../Context'
import Footer from './Footer'
import { footerButtonStyleContained, footerButtonStyleText, materialUIButtonStyle } from '../../style-utils'
import ThirdStep from './ThirdStep'
import FourthStep from './FourthStep'

// Step titles
const labels = ['Personal', 'Education', 'Family', 'Document']
const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <FirstStep />
    case 1:
      return <SecondStep />
    case 2:
      return <ThirdStep />
    case 3:
      return <FourthStep />
    default:
      throw new Error('Unknown step')
  }
}



export default function StepForm() {
  const { activeStep } = useContext(AppContext)
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  const buttons = [
      {
        buttonName:'Back',
        wrapperStyle:footerButtonStyleText,
        varient:'text',
        buttonStyle:materialUIButtonStyle,
        disabled:activeStep===0,
        onClick : handleBack,
      },
      {
        buttonName:'Next',
        wrapperStyle:footerButtonStyleContained,
        varient:'contained',
        buttonStyle:materialUIButtonStyle,
        disabled:false,
        onClick : handleNext,
      }
    ]
  
  return (
    <>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          {/* <Box sx={{ my: 5 }}>
            <Typography variant='h4' align='center'>
              Multi Step Form
            </Typography>
            <Typography variant='subtitle2' align='center' sx={{ mt: 2 }}>
              React Material UI multi step form with basic form validation logic.
            </Typography>
          </Box> */}
          <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}

          <Footer buttons={buttons}/>
        </>
      )}
    </>
  )
}
