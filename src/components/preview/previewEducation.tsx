import React, { useContext } from 'react'
import PreviewCardHeader from '../../component-util/PreviewCardHeader'
import { Card } from '@mui/material'
import { Margin } from '@mui/icons-material'
import "./preview.css"
import { AppContext } from '../../Context'
const PreviewEducation = () => {
    const { formValues } = useContext(AppContext);
  const {
    firstName,   lastName,  email, gender, date, time, birthPlace, marriageStatus, homeAddress, aboutMe, gautra, caste, manglik, bloodGroup, height, weight, color, education, field,  jobDesignation, companyName, jobCity, jobStatus, jobType, city, agreement, phone, uploadPhoto, uploadKundli, graph_node_id
  } = formValues;
    return (
        <Card>
            <div style={{ margin: '16px' }}>
                <PreviewCardHeader heading={"Education details"} previewStepValue={1} />
                
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    <div className='info-values'>
                        <div className='label'>Education</div>
                        <div className='value'>{education.value==""?"Not Specified":education.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Field</div>
                        <div className='value'>{field.value==""?"Not Specified":field.value}</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PreviewEducation