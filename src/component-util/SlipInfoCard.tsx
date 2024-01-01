import React, { useContext } from "react";
import Button from '@mui/material/Button';
import "../components/crateMatrimony/style-create-matrimony.css";
import { AppContext } from "../Context";

export default function SlipInfoCard(props:any) {
  const {member} = props
  const { activePage, handleNextPage, handleChangePageVal, handleChangeStepVal } = useContext(AppContext)
  const handleAdd =async()=>{
    //get 
   // const response = await getInfoOfSelectedRelative()
   //
   handleNextPage()
  }
let pic = "blank.png"
 if (member?.pic_url){
  pic = member.pic_url
 }
  return (

    <div className="frame-info-card">
      <div className="div-info-card">
        <img className="ellipse" alt="Ellipse" src={pic} />
        <div className="div-2">
          <div className="text-wrapper">{member.name}</div>
          <div className="text-wrapper-2">{member.relation}</div>
        </div>
      </div>
      <div className="info-card-button">
        <Button
          // button="small"
          // buttonClassName="design-component-instance-node"
          // className="buttons-instance"
          // text="Added"
          variant="outlined"
          sx={{ borderRadius: '100px' }}
          onClick={handleAdd}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};