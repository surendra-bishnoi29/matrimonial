import React from 'react'
import PreviewCardHeader from '../../component-util/PreviewCardHeader'
import { Card } from '@mui/material'
import { Margin } from '@mui/icons-material'
import "./preview.css"
const PreviewEducation = () => {
    return (
        <Card>
            <div style={{ margin: '16px' }}>
                <PreviewCardHeader heading={"Education details"} previewStepValue="0" />
                <div className='info-values'>
                    <div className='label'>Full Name</div>
                    <div className='value'>Bhavya Paliwal</div>
                </div>

                <div className='info-values'>
                    <div className='label'>About me</div>
                    <div className='value'>Cras molestie metus ac nunc dignissim aliquet vel ac risus. Sed at turpis iaculis, bibendum erat id, feugiat odio.</div>
                </div>
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    <div className='info-values'>
                        <div className='label'>Education</div>
                        <div className='value'>04/11/1997</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Field</div>
                        <div className='value'>7:32 am</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PreviewEducation