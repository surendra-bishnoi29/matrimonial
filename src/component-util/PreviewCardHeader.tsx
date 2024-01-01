import { Card } from '@mui/material'
import React, { Children, useContext } from 'react'
import { AppContext } from '../Context';

const PreviewCardHeader = (props:any) => {
    const {heading, previewStepValue} = props
    const { handleChangePageVal, handleChangeStepVal } = useContext(AppContext);
  return (
    <div className='outer-header-previewcard'>
   <div className='header-previewcard'>{heading}</div>
   <a className='edit-previewcard' onClick={()=>{handleChangePageVal(2);handleChangeStepVal(previewStepValue) }}>EDIT</a>
   </div>
  
  )
}

export default PreviewCardHeader