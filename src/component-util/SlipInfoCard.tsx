import React from "react";
import Button from '@mui/material/Button';
import "../components/crateMatrimony/style-create-matrimony.css";

export default function SlipInfoCard() {
  return (

    <div className="frame-info-card">
      <div className="div-info-card">
        <img className="ellipse" alt="Ellipse" src="somesh.png" />
        <div className="div-2">
          <div className="text-wrapper">Shiv Ratan Paliwal</div>
          <div className="text-wrapper-2">Me</div>
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
        >
          ADD
        </Button>
      </div>
    </div>
  );
};