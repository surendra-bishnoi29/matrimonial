import React from 'react'
import "./style-welcome.css"
import ExistingProfileCard from '../../component-util/existing-profile-card'

export default function FoundMatches() {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
    <div className='outer'>
        <div className='head'>
            <div className='head-text'>12 Matches</div>
            <div className='filter'>F</div>
        </div>
        
            <ExistingProfileCard/>
            <ExistingProfileCard/>
            <ExistingProfileCard/>
            <ExistingProfileCard/>
            <ExistingProfileCard/>
            <ExistingProfileCard/>
        
    </div>
    </div>
  )
}
