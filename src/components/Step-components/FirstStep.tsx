import React, { useCallback, useContext, useEffect, useState } from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AppContext } from '../../Context';
import Autocomplete from '@mui/material/Autocomplete';
import './step-style-form.css';
import { getAllGautras } from '../../Actions/action';


const dummyGautra :any[] = 
  [
          {
              "_id": "629e07c188f66c15867f943e",
              "all_names": [
                  "अरटवाल"
              ],
              "display_name": "अरटवाल",
              "name": "अरटवाल",
              "subcastes": []
          },
          {
              "_id": "629e07c188f66c15867f943f",
              "all_names": [
                  "आगलेचा",
                  "अग्रवाल",
                  "अरुण"
              ],
              "display_name": "आगलेचा/अग्रवाल/अरुण",
              "name": "आगलेचा",
              "subcastes": []
          },
          {
              "_id": "629e07c188f66c15867f9440",
              "all_names": [
                  "आडान्या"
              ],
              "display_name": "आडान्या",
              "name": "आडान्या",
              "subcastes": []
          },
          {
              "_id": "629e07c188f66c15867f9441",
              "all_names": [
                  "आयच"
              ],
              "display_name": "आयच",
              "name": "आयच",
              "subcastes": []
          },
          {
              "_id": "629e07c188f66c15867f9442",
              "all_names": [
                  "आसोपिया"
              ],
              "display_name": "आसोपिया",
              "name": "आसोपिया",
              "subcastes": []
          }
      ]
  interface stateproperties {
        name: string;
        age: number;
  }
      

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(AppContext)
  console.log(formValues);
  const { firstName, lastName, date, birthPalce, marriageStatus, homeAddress, aboutMe, gautra, email, caste, manglik, height, bloodGroup, weight, color, gender } = formValues

  // Check if all values are not empty and if there are some errors
  const [gautras, setGautras] = useState<stateproperties[]>([])
  
  const isError = useCallback(
    () =>
      Object.keys({ firstName, lastName, email, gender }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, firstName, lastName, email, gender]
  )
  
  useEffect(() => {
    getGautras()
  }, [])
  const getGautras = async () => {
    const response = await getAllGautras();
    if(response.status){
       // setGautras(response.data?.gautras);
    }else{
      console.log("error from frist step form, getGautras()");
    }

    //to be commented letter
    setGautras(dummyGautra)
   
  }
  return (
    <div className='wrapper'>
      <div className='step-header'>Personal details</div>
      <div className='step-info'>Note: You do not need to fill all, only fill what is relevant</div>
      <Grid container>
        <Grid item xs={6} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='First Name'
            name='firstName'
            placeholder='Your first name'
            value={firstName.value}
            onChange={handleChange}
            error={!!firstName.error}
            helperText={firstName.error}
            required={firstName.required}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Last Name'
            name='lastName'
            placeholder='Your last name'
            value={lastName.value}
            onChange={handleChange}
            error={!!lastName.error}
            helperText={lastName.error}
            required={lastName.required}
          />
        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label='Date of birth'
            name='date'
            type='date'
            defaultValue={date.value}
            onChange={handleChange}
          // required={date.required}
          />

        </Grid>
        <Grid item xs={6} sm={6} >
          <LocalizationProvider dateAdapter={AdapterDayjs}
          >
            <DemoContainer
              components={[
                'MobileTimePicker',
              ]}
              sx={{ paddingTop: '16px' }}
            >

              <DemoItem >
                <MobileTimePicker
                  onChange={(item, k) => { console.log(k) }}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          {/* <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Birth Time'
            name='lastName'
            placeholder='Your Birth Time'
            value={lastName.value}
            onChange={handleChange}
            error={!!lastName.error}
            helperText={lastName.error}
            required={lastName.required}
          /> */}
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Birth Place'
            name='birthPalce'
            placeholder='Your Birth Place'
            value={birthPalce?.value}
            onChange={handleChange}
            error={!!birthPalce?.error}
            helperText={birthPalce?.error}
            required={birthPalce?.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            name='marriageStatus'
            value={marriageStatus.value}
            onChange={handleChange}
            error={!!marriageStatus.error}
            helperText={marriageStatus.error}
            required={marriageStatus.required}
          >
            <option value='Unmarried'>Unmarried</option>
            <option value='Married'>Married</option>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id='outlined-multiline-flexible'
            variant={variant}
            margin={margin}
            fullWidth
            label='Home Address'
            name='homeAddress'
            multiline
            maxRows={4}
            minRows={3}
            placeholder='Your Home Address'
            // type='email'
            value={homeAddress.value}
            onChange={handleChange}
            error={!!homeAddress.error}
            helperText={homeAddress.error}
            required={homeAddress.required}
          />
        </Grid>
      </Grid>

      {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant='contained'
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color='primary'
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box> */}

      <div className='option-header'>Other details (Optional)</div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TextField
            id='outlined-multiline-flexible'
            variant={variant}
            margin={margin}
            fullWidth
            label='About me'
            name='aboutMe'
            multiline
            maxRows={4}
            minRows={3}
            placeholder='About me'
            // type='email'
            value={aboutMe.value}
            onChange={handleChange}
            error={!!aboutMe.error}
            helperText={aboutMe.error}
            required={aboutMe.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            name='gautra'
            value={gautra.value}
            onChange={handleChange}
            error={!!gautra.error}
            helperText={gautra.error}
            required={gautra.required}
          >
            <option value='Unmarried'>Gautra</option>
            <option value='Married'>Married</option>
          </TextField> */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={gautras.map((item)=>{return item.name})}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Gautra" onChange={handleChange}/>}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            name='caste'
            value={caste.value}
            onChange={handleChange}
            error={!!caste.error}
            helperText={caste.error}
            required={caste.required}
          >
            <option value='Unmarried'>Cast</option>
            <option value='Married'>Married</option>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            name='manglik'
            value={manglik.value}
            onChange={handleChange}
            error={!!manglik.error}
            helperText={manglik.error}
            required={manglik.required}
          >
            <option value='Unmarried'>Manglik</option>
            <option value='Married'>Married</option>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            name='bloodGroup'
            value={bloodGroup.value}
            onChange={handleChange}
            error={!!bloodGroup.error}
            helperText={bloodGroup.error}
            required={bloodGroup.required}
          >
            <option value='Unmarried'>Blood-Group</option>
            <option value='Married'>Married</option>
          </TextField>
        </Grid>

        <Grid item xs={6} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Height'
            name='height'
            placeholder='Your Height'
            value={height.value}
            onChange={handleChange}
            error={!!height.error}
            helperText={height.error}
          // required={firstName.required}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Weight'
            name='weight'
            placeholder='Your Weight'
            value={weight.value}
            onChange={handleChange}
            error={!!weight.error}
            helperText={weight.error}
          // required={lastName.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            name='color'
            value={color.value}
            onChange={handleChange}
            error={!!color.error}
            helperText={color.error}
            required={color.required}
          >
            <option value='Unmarried'>color</option>
            <option value='Married'>Married</option>
          </TextField>
        </Grid>
      </Grid>
    </div>
  )
}
