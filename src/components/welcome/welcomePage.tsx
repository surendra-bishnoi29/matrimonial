import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import "./style-welcome.css"
import ExistingProfileCard from '../../component-util/existing-profile-card'
import Footer from '../Step-components/Footer'
import { footerButtonStyleContained, footerButtonStyleText, materialUIButtonStyle } from '../../style-utils'
import { AppContext } from '../../Context'
import { getMatrimonialProfiles } from '../../Actions/action'
import CreateMatrimony from '../crateMatrimony/createMatrimony'

interface stateproperties {
  name: string;
  age: string;
  occupation: string;
//   uid: string;
}

function WelcomePage() {
  const { activePage, handleNextPage } = useContext(AppContext)
  const [profiles, setProfiles] = useState<stateproperties[]>([]);

  const buttons = [
    // {
    //   buttonName:'Back',
    //   wrapperStyle:footerButtonStyleText,
    //   varient:'text',
    //   buttonStyle:materialUIButtonStyle,
    //   disabled:activeStep===0,
    //   onClick : handleBack,
    // },
    {
      buttonName: '+ Add Profile',
      wrapperStyle: footerButtonStyleContained,
      varient: 'contained',
      buttonStyle: materialUIButtonStyle,
      disabled: false,
      onClick: handleNextPage,
    }
  ]

  useEffect(() => {
    getProfiles();
  }, [])

  const getProfiles = async () => {
    const response = await getMatrimonialProfiles();
    if (response.status) {
      setProfiles(response.profiles)
    }
    else {
      console.log("in welcome page, and await getMatrimonialProfiles() got error ")
    }

    //to be commented later
    setProfiles([{
      name:"surendra",
      age:"21",
      occupation:'Software Engineer'
    }])
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        {profiles.length ?
           (
            <>
              {/* <div>Public Profiles</div> */}
              {profiles.map((item:any, index:any)=>{
                return  < ExistingProfileCard  profile={item} key={index}/>
              })}
              {/* < ExistingProfileCard profileData={["23 years", "Software Engineer"]} /> */}


              {/* <div>In Draft</div>
              <ExistingProfileCard profileData={["23 years", "Software Engineer"]}/> */}

              <Footer buttons={buttons} />

            </>
          ) :
          (<>
          <CreateMatrimony />
          </>)
          // (<>
          //   <div className="frame">
          //     <img className="mask-group" alt="Mask group" src="mask-group.png" />
          //     <div className="div">
          //       <p className="text-wrapper">Create a matrimonial profile of your family</p>
          //       <div className="div-2">
          //         <div className="div-3">
          //           <div className="check-instance" />
          //           <div className="text-wrapper-2">Integer suscipit lacus quis</div>
          //         </div>
          //         <div className="div-3">
          //           <div className="check-instance" />
          //           <p className="text-wrapper-2">Vestibulum at tortor in mauris</p>
          //         </div>
          //         <div className="div-3">
          //           <div className="check-instance" />
          //           <div className="text-wrapper-2">Donec nec congue lacus</div>
          //         </div>
          //         <div className="div-3">
          //           <div className="check-instance" />
          //           <div className="text-wrapper-2">Phasellus vulputate vestibulum</div>
          //         </div>
          //       </div>
          //     </div>
          //     <Button className="component-1" variant="contained"
          //       sx={{
          //         fontSize: '16px',
          //         fontStyle: 'normal',
          //         borderRadius: '100px'
          //       }}
          //       fullWidth>
          //       + &nbsp; Create new profile
          //     </Button>
          //   </div>
          // </>)
        }
      </div>
    </div>
  )

}



export default WelcomePage

