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
import moment from 'moment'


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

const blood_groups = [
  'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-' 
]

const complexions = [
  'Very Fair', 'Fair', 'Medium', 'Light Brown Skin', 'Brown Skin','Black'
]

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin, handleChangeMultiValues } = useContext(AppContext)
  console.log(formValues);
  const { firstName, lastName, date, time, birthPalce, marriageStatus, homeAddress, aboutMe, gautra, email, caste, manglik, height, bloodGroup, weight, color, gender } = formValues

  // Check if all values are not empty and if there are some errors
  const [gautras, setGautras] = useState<stateproperties[]>([])
  
  const isError = useCallback(
    () =>
      Object.keys({ firstName, lastName, email, gender }).some(
        (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
      ),
    [formValues, firstName, lastName, email, gender]
  )

  const handleAutocomplete =(item:any, name:any) =>{
    console.log(item)
    const event = {
      target:{
        value:item.target.lastChild.nodeValue  ,
        type: 'text',
        name:  name
      }
    }
    handleChange(event)
  }
  
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

  const handleDate =(time_selected: any)=>{
    console.log(time_selected)
    const time_of_birth = `${moment(time_selected.$d).get('hour')}:${moment(time_selected.$d).get('minute')}`
    handleChangeMultiValues({time:time_of_birth})
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
            value={date.value}
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
                  value={time.value}
                  onChange={(time_selected)=>{handleDate(time_selected)}}
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
            defaultValue={'single'}
            onChange={handleChange}
            error={!!marriageStatus.error}
            helperText={marriageStatus.error}
            required={marriageStatus.required}
          >
            <option value='single'>Single</option>
            <option value='divorced'>Divorced</option>
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

        <Grid item xs={12} sm={12}>
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
            onChange={(item)=>{handleAutocomplete(item, 'gautra')}}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Gautra" onChange={handleChange} value={gautra.value}/>}
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
            label="caste"
            value={caste.value}
            onChange={handleChange}
            error={!!caste.error}
            defaultValue={"meghwal"}
            helperText={caste.error}
            required={caste.required}
          >
            <option value='meghwal'>meghwal</option>
            {/* <option value='Married'>Married</option> */}
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
            label='manglik'
            value={manglik.value}
            onChange={handleChange}
            error={!!manglik.error}
            defaultValue={"false"}
            helperText={manglik.error}
            required={manglik.required}
          >
            <option value='true'>Manglik</option>
            <option value='false'>Not Manglik</option>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={8}>
          {/* <TextField
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
          </TextField> */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={blood_groups}
            onChange={(item)=>{handleAutocomplete(item, 'bloodGroup')}}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Blood Group" onChange={handleChange} value={bloodGroup.value}/>}
          />
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
          {/* <TextField
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
          </TextField> */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            componentName='color'
            options={complexions}
            sx={{ width: 300 }}
            onChange={(item)=>{handleAutocomplete(item, 'color')}}
            renderInput={(params) => <TextField {...params} name= 'color' label="Complexion" value={color.value} onChange={handleChange}/>}
          />
        </Grid>
      </Grid>
    </div>
  )
}
// function moment(time_selected: any) {
//   throw new Error('Function not implemented.');
// }

