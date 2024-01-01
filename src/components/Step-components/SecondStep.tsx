import React, { useCallback, useContext } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Checkbox from '@mui/material/Checkbox'
import { AppContext } from '../../Context'
import './step-style-form.css'

export default function SecondStep() {
  const { formValues, handleChange, handleBack, handleNext, variant, margin } = useContext(AppContext)
  const { jobType, jobStatus, jobCity, companyName, jobDesignation, field, education } = formValues

  // const isError = useCallback(
  //   () =>
  //     Object.keys({ city, date, phone, agreenemt }).some(
  //       (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
  //     ),
  //   [formValues, city, date, phone, agreenemt]
  // )

  return (
    <div className='wrapper'>
      <div className='step-header'>Education details</div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Education'
            name='education'
            placeholder='Enter your Education'
            value={education.value}
            onChange={handleChange}
            error={!!education.error}
            helperText={education.error}
            required={education.required}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Field'
            name='field'
            placeholder='Enter your Field of Education'
            value={field.value}
          // onChange={handleChange}
          // error={!!city.error}
          // helperText={city.error}
          // required={city.required}
          />
        </Grid>

        <div className='step-header'>Occupation details</div>

        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            label="Job Status"
            SelectProps={{
              native: true
            }}
            name='jobStatus'
          value={jobStatus.value}
          onChange={handleChange}
          // error={!!jobStatus.error}
          // helperText={jobStatus.error}
          // required={jobStatus.required}
          >
            <option value='job'>job</option>
            <option value='study'>study</option>
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            label="Job Type"
            SelectProps={{
              native: true
            }}
            name='jobType'
          value={jobType.value}
          onChange={handleChange}
          // error={!!jobType.error}
          // helperText={jobType.error}
          // required={jobType.required}
          >
            <option value='private'>private</option>
            <option value='government'>govt</option>
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Job Designation'
            name='jobDesignation'
            placeholder='Enter your Job Designation'
            value={jobDesignation.value}
            onChange={handleChange}
            error={!!jobDesignation.error}
            helperText={jobDesignation.error}
            required={jobDesignation.required}
          />
        </Grid>


        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Company Name'
            name='companyName'
            placeholder='Company Name'
            value={companyName.value}
            onChange={handleChange}
            error={!!companyName.error}
            helperText={companyName.error}
            required={companyName.required}
          />
        </Grid>


        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Job City'
            name='jobCity'
            placeholder='Enter your Job City'
            value={jobCity.value}
            onChange={handleChange}
            error={!!jobCity.error}
            helperText={jobCity.error}
            required={jobCity.required}
          />
        </Grid>

        {/* <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Phone number'
            name='phone'
            placeholder='i.e: xxx-xxx-xxxx'
            value={phone.value}
            onChange={handleChange}
            error={!!phone.error}
            helperText={phone.error}
            required={phone.required}
          />
        </Grid> */}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreenemt.value}
                onChange={handleChange}
                name='agreenemt'
                color='primary'
                required={agreenemt.required}
              />
            }
            label='Agree to terms and conditions'
          />
          <FormHelperText error={!!agreenemt.error}>{agreenemt.error}</FormHelperText>
        </Grid> */}
      </Grid>

      {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button variant='contained' disabled={isError()} color='primary' onClick={!isError() ? handleNext : () => null}>
          Next
        </Button>
      </Box> */}
    </div>
  )
}
