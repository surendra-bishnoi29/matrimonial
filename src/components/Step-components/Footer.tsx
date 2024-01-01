import React, { memo } from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';

function Footer(props:any) {
  const {buttons} = props
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={10}>
    <BottomNavigation
      // showLabels
      // value={value}
      onChange={(event, newValue) => {
        console.log('--event--', event)
        console.log('--value--', newValue)
        // setValue(newValue);
      }}
    >
      {/* <BottomNavigationAction label="Recents" icon={<Button variant='text'>Back</Button>} />
      <BottomNavigationAction label="Favorites" icon={<Button variant='contained'>Back</Button>} /> */}
      {/* <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
      <div className='footer-buttons'>
       { buttons.map((item:any) => {
          const {buttonStyle, onClick} = item
          const {varient} = item
          const {buttonName} = item
          const {wrapperStyle} = item
          const {disabled} = item
        
          return (<div style={wrapperStyle}><Button variant={varient} disabled={disabled} sx={buttonStyle} onClick={onClick}>{buttonName}</Button></div>)
        })}
      {/* <div style={props.buttonStyle}><Button variant='text' >Back</Button></div>
      <div><Button variant='contained' sx={{height:'48px', borderRadius:'100px'}}>Next</Button></div> */}
      </div>

    </BottomNavigation>
  </Paper>
  )
}

export default memo(Footer)
