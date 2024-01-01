import React, { useContext } from 'react'
import PreviewCardHeader from '../../component-util/PreviewCardHeader'
import { Card } from '@mui/material'
import { Margin } from '@mui/icons-material'
import "./preview.css"
import { AppContext } from '../../Context'

const PreviewOccupation = () => {
    const { formValues } = useContext(AppContext);
  const {
    firstName,   lastName,  email, gender, date, time, birthPlace, marriageStatus, homeAddress, aboutMe, gautra, caste, manglik, bloodGroup, height, weight, color, education, field,  jobDesignation, companyName, jobCity, jobStatus, jobType, city, agreement, phone, uploadPhoto, uploadKundli, graph_node_id
  } = formValues;
    return (
        <Card>
            <div style={{ margin: '16px' }}>
                <PreviewCardHeader heading={"Occupation details"} previewStepValue={1} />
                
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    <div className='info-values'>
                        <div className='label'>Occupation</div>
                        <div className='value'>{jobDesignation.value==""?"Not Specified":jobDesignation.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Currently working</div>
                        <div className='value'>{companyName.value==""?"Not Specified":companyName.value}</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PreviewOccupation