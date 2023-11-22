import React from 'react';
import './step-style-form.css'
import Box from '@mui/material/Box'
import {Avatar, Button, Card } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchBar from '../../component-util/search';
import SlipInfoCard from '../../component-util/SlipInfoCard';
import { EditTile } from '../../component-util/EditTile';


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

function ThirdStep() {
  return (
    <div className='wrapper'>
      <div className='head-text-wrapper'>
        <div className='step-header'>Family details</div>
        <div className='step-info'>Note: You do not need to fill all, only fill what is relevant</div>
      </div>

      <div className='search-card-combo'>
        <SearchBar />
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
            }}
          >
            <div className='box-content-wrapper-3rd-step'>
              <div className='header-text-3rd-step'>Selected</div>
              <div className='edit-tile-3rd-step'>
                <ImageList
                  sx={{
                    gridAutoFlow: "column",
                    // gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr)) !important",
                    // gridAutoColumns: "minmax(160px, 1fr)",
                    // width: 500,
                    // height: 450,
                    // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                    transform: 'translateZ(0)',
                  }}
                // rowHeight={200}
                // gap={1}
                >
                  <EditTile />
                  <EditTile />
                  <EditTile />
                  <EditTile />
                  <EditTile />
                  <EditTile />

                </ImageList>
              </div>
              <div className='info-card-header-3rd-step'>
                <div className='info-card-header-people-3rd-step'>People</div>
                <div className='info-card-header-add-member-3rd-step'>Add member</div>
              </div>
              <div className='slip-info-card-3rd-step'>
                <SlipInfoCard />
                <SlipInfoCard />
                <SlipInfoCard />
                <SlipInfoCard />
                <SlipInfoCard />
                <SlipInfoCard />
              </div>
              <hr style={{height:'1px', width:"100%"}}/>
              <div className='footer'>
                <Button className="component-1" variant="contained"
                  sx={{
                    fontSize: '14px',
                    fontStyle: 'normal',
                    borderRadius: '100px'
                  }}
                  fullWidth>
                  + &nbsp; Add member
                </Button>

                <div className='bottom-text'>You can add your family member which is not in list</div>
              </div>
            </div>
          </Box>

        </ThemeProvider>
      </div>
    </div>
  )
}

export default ThirdStep