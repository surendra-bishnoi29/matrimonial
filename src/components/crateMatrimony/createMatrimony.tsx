import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Avatar, Button, Card } from '@mui/material';
import { getEligibleFamilyMembers, getMatrimonialProfiles } from '../../Actions/action';
import "./style-create-matrimony.css"
import SearchBar from '../../component-util/search';
import SlipInfoCard from '../../component-util/SlipInfoCard';
import { AppContext } from '../../Context'

interface stateproperties {
  name: string;
  pic_url: string;
  relation: string;
  uid: string;
}

const dummyProfiles = {
  "status": true,
  "unmarried_members": [
    {
      "name": "उमा",
      "pic_url": "",
      "relation": "पुत्री",
      "uid": "124"
    },
    {
      "name": "ख़ुशाल",
      "pic_url": "https://s3.ap-south-1.amazonaws.com/paliwalkutumb/profiles%2F7086ba40-8a8b-4439-91e4-dd9dd100f4ee.jpg",
      "relation": "पुत्र",
      "uid": "163"
    }
  ]
}


const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      main: '#009688',
      dark: '#009688',
    },
  },
});


function CreateMatrimony() {
  const { activePage, handleNextPage, handleChangePageVal, handleChangeStepVal } = useContext(AppContext)
  const [members, setMembers] = useState<stateproperties[]>([])
  useEffect(() => {
    getProfiles()
    handleChangeStepVal(0)
  }, []);
  const getProfiles = async () => {
    // const response = await getEligibleFamilyMembers();
    // to be commented later
    const response = dummyProfiles
    if (response.status) {
      setMembers(response.unmarried_members)
    } else {
      console.log("getting error in creatematrimony--->getProfiles()")
    }


  }

  const handleAction = () => {
    handleNextPage();
  }
  return (
    <div style={{ display: 'flex', gap: '14px', flexDirection: "column" }}>
      {/* <SearchBar /> */}
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
          }}
        >
          <CardHeader
            sx={{ margin: '0px', padding: '0px', fontWeight: 'bold' }}
            title="Your family members"
          />
          <hr />
          {members.map((item) => {
            return <>
              <SlipInfoCard member = {item} key={item.uid}/>
            </>
          })}
          {/* <SlipInfoCard /> */}
          {/* <div className="frame">
      <img className="ellipse" alt="Ellipse" src="blank.png" />
      <div className="div">
        <p className="somesh-paliwal">
          <span className="text-wrapper">Somesh Paliwal</span>
          <div className="text-wrapper-2">Son</div>
        </p>
        
      </div>
    </div> */}

          <hr />
          <div className='footer'>
            <Button className="component-1" variant="contained"
              sx={{
                fontSize: '14px',
                fontStyle: 'normal',
                borderRadius: '100px'
              }}
              // onClick={handleAction}
              fullWidth>
              + &nbsp; Add member
            </Button>

            <div className='bottom-text'>You can add your family member which is not in list</div>
          </div>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default CreateMatrimony;
