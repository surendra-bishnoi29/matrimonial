import { Card } from '@mui/material'
import React, { Children } from 'react'

const PreviewCardHeader = (props:any) => {
    const {heading, previewStepValue} = props
  return (
    <div className='outer-header-previewcard'>
   <div className='header-previewcard'>{heading}</div>
   <div className='edit-previewcard'>E</div>
   </div>
  
  )
}

export default PreviewCardHeader