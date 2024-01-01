import React from 'react'
import Typography from '@mui/material/Typography'
import PreviewPersonal from '../preview/PreviewPersonal'
import PreviewEducation from '../preview/previewEducation'
import PreviewOccupation from '../preview/previewOccupation'
import Footer from './Footer'
import { footerButtonStyleContained, footerButtonStyleText, materialUIButtonStyle } from '../../style-utils'


export default function Preview() {

  const handleDraft=()=>{

  }

  const handlePublic =() =>{

  }

  const buttons = [
    {
      buttonName:'Draft',
      wrapperStyle:footerButtonStyleText,
      varient:'text',
      buttonStyle:materialUIButtonStyle,
      disabled:false,
      onClick : handleDraft,
    },
    {
      buttonName:'Public',
      wrapperStyle:footerButtonStyleContained,
      varient:'contained',
      buttonStyle:materialUIButtonStyle,
      disabled:false,
      onClick : handlePublic,
    }
  ]

  return (
    <>
    <div style={{display:'flex', gap:'16px', flexDirection:'column'}}>
      <PreviewPersonal/>
      <PreviewEducation/>
      <PreviewOccupation />
    </div>
    <Footer buttons={buttons}/>
    </>
  )
}
