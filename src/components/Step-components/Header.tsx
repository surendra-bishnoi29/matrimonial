import React, { memo, useContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import SvgIcon from '@mui/material/SvgIcon'
import { PiCaretLeftBold,PiQuestionBold } from 'react-icons/pi';
import { AppContext } from '../../Context'


function Header() {
  const { activePage, handleBackPage } = useContext(AppContext)
  return (
    <>
    <AppBar  component="nav">
    <Toolbar sx={{display:'flex', justifyContent:'space-between',alignItems:'center' }}>
    {(activePage===2)?
     (<CloseIcon style={{color:'white', fontSize:'20px', cursor:'pointer'}}
     onClick={handleBackPage}
     />
     )
     :
     (<ArrowBackIosNewTwoToneIcon style={{color:'white', fontSize:'20px', cursor:'pointer'}}
     onClick={activePage!==0 ? handleBackPage:()=>null}
     // aria-disabled={activePage===0}
     />)
      }
    
      <Typography  component="div" color='inherit' noWrap>
        Create Matrimonial Profile
      </Typography>
      {(activePage===2)?(
      <PiQuestionBold style={{color:'white', fontSize:'21px'}} />):' '}
    </Toolbar>
  </AppBar>
  <AppBar   position='static' sx={{marginBottom:'80px'}}>
  {/* <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
    <PiCaretLeftBold style={{color:'white', fontSize:'20px'}}/>
      <Typography variant='h6' component="div" color='inherit' noWrap>
        Create Matrimonial Profile
      </Typography>
      <PiQuestionBold style={{color:'white', fontSize:'21px'}} />
    </Toolbar> */}
  </AppBar>
  </>
  )
}

export default memo(Header)
