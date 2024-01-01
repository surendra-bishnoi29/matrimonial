import React from 'react'
import PreviewCardHeader from '../../component-util/PreviewCardHeader'
import { Card } from '@mui/material'
import { Margin } from '@mui/icons-material'
import "./preview.css"

const PreviewOccupation = () => {
    return (
        <Card>
            <div style={{ margin: '16px' }}>
                <PreviewCardHeader heading={"Occupation details"} previewStepValue="1" />
                
                <div style={{display:'flex', flexWrap:'wrap'}}>
                    <div className='info-values'>
                        <div className='label'>Occupation</div>
                        <div className='value'>04/11/1997</div>
                    </div>

                    <div className='info-values'>
                        <div className='label'>Currently working</div>
                        <div className='value'>7:32 am</div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default PreviewOccupation