import React, { useContext } from 'react'
import PreviewCardHeader from '../../component-util/PreviewCardHeader'
import { Card } from '@mui/material'
import { Margin } from '@mui/icons-material'
import "./preview.css"
import { AppContext } from '../../Context'
const PreviewPersonal = () => {
    const { formValues } = useContext(AppContext);
  const {
    firstName,   lastName,  email, gender, date, time, birthPlace, marriageStatus, homeAddress, aboutMe, gautra, caste, manglik, bloodGroup, height, weight, color, education, field,  jobDesignation, companyName, jobCity, jobStatus, jobType, city, agreement, phone, uploadPhoto, uploadKundli, graph_node_id
  } = formValues;
    return (
        <Card>
            <div style={{ margin: '16px' }}>
                <PreviewCardHeader heading={"Personal Details"} previewStepValue={0}/>
                <div className='info-values'>
                    <div className='label'>Full Name</div>
                    <div className='value'>{firstName.value==""?"Not Specified":firstName.value}</div>
                </div>

                <div className='info-values'>
                    <div className='label'>About me</div>
                    <div className='value'>{aboutMe.value==""?"Not Specified":aboutMe.value}</div>
                </div>
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    <div className='info-values'>
                        <div className='label'>Birth date</div>
                        <div className='value'>{date.value==""?"Not Specified":date.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Birth time</div>
                        <div className='value'>{time.value==""?"Not Specified":time.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Birth place</div>
                        <div className='value'>{birthPlace.value==""?"Not Specified":birthPlace.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Gautra</div>
                        <div className='value'>{gautra.value==""?"Not Specified":gautra.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>caste</div>
                        <div className='value'>{caste.value==""?"Not Specified":caste.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Manglik</div>
                        <div className='value'>{manglik.value==""?"Not Specified":manglik.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Blood group</div>
                        <div className='value'>{bloodGroup.value==""?"Not Specified":bloodGroup.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Height</div>
                        <div className='value'>{height.value==""?"Not Specified":height.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Weight</div>
                        <div className='value'>{weight.value==""?"Not Specified":weight.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Color</div>
                        <div className='value'>{color.value==""?"Not Specified":color.value}</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Marital Status</div>
                        <div className='value'>{marriageStatus.value==""?"Not Specified":marriageStatus.value}</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PreviewPersonal