import React, { useContext } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import StepForm from './components/Step-components/StepForm'
import Header from './components/Step-components/Header'
import { AppContext } from './Context'
import Footer from './components/Step-components/Footer'
import WelcomePage from './components/welcome/welcomePage'
import CreateMatrimony from './components/crateMatrimony/createMatrimony'
import FoundMatches from './components/welcome/foundMatches'
import SlipInfoCard from "./component-util/SlipInfoCard"
import { EditTile } from './component-util/EditTile'
import Preview from './components/Step-components/preview'



const handlePages = (page: number) => {
  switch (page) {
    case 0:
      // return <FirstStep />
      return <WelcomePage />
    case 1:
       return  <CreateMatrimony />
    case 2:
       return <StepForm />
    case 3:
       return <Preview />
    default:
      throw new Error('Unknown step')
  }
}



const theme = createTheme()

export default function App() {
  const { activePage } = useContext(AppContext)
  console.log(AppContext)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container component='main' maxWidth='sm' sx={{ mb: 4}}>
        {/* <WelcomePage /> */}
        {/* <CreateMatrimony /> */}
          {/* <StepForm /> */}
          {/* <FoundMatches /> */}
          {/* <SlipInfoCard /> */}
          {/* <EditTile /> */}
          {handlePages(activePage)}
      </Container>
    </ThemeProvider> 
  )
}

