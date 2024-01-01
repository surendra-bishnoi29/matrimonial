import React, { useContext } from 'react'
import Typography from '@mui/material/Typography'
import PreviewPersonal from '../preview/PreviewPersonal'
import PreviewEducation from '../preview/previewEducation'
import PreviewOccupation from '../preview/previewOccupation'
import Footer from './Footer'
import { footerButtonStyleContained, footerButtonStyleText, materialUIButtonStyle } from '../../style-utils'
import { AppContext } from '../../Context'
import { postPublishProfile } from '../../Actions/action'


export default function Preview() {
  const { formValues } = useContext(AppContext);
  const {
    firstName,   lastName,  email, gender, date, time, birthPlace, marriageStatus, homeAddress, aboutMe, gautra, caste, manglik, bloodGroup, height, weight, color, education, field,  jobDesignation, companyName, jobCity, jobStatus, jobType, city, agreement, phone, uploadPhoto, uploadKundli, graph_node_id
  } = formValues;

  const data={
    created_by:'',
    graph_node_id,
    time_of_birth:time,
    date_of_birth:date,
    place_of_birth:birthPlace,
    mangalik:manglik,
    blood_group:bloodGroup,
    height,
    complexion:color
  }

  const handleDraft=()=>{
  }

  const handlePublic =async() =>{
    const response = await postPublishProfile(data);
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
