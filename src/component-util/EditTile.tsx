import React from "react";
// import { Close } from "./Close";
// import "./style.css";
import './style-component-util.css'
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

export function EditTile() {
    return (
        <div className="frame-edit-tile">
            <div className="image-close-combo-edit-tile">
                <div className="div-edit-tile">
                    <img className="ellipse-edit-tile" alt="Ellipse" src="somesh.png" />
                    <div className="close-instance-edit-tile" color="white" >
                        <div className="close-screen-edit-tile">
                            <div className="overlap-group-edit-tile">
                                <HighlightOffTwoToneIcon sx={{ color: "white", backgroundColor: 'black', borderRadius: "50%" }} />
                                {/* <img className="vector" alt="Vector" src="image.svg" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div-2-edit-tile">
                <div className="text-wrapper-edit-tile">Shiv Ratan</div>
                <div className="text-wrapper-2-edit-tile">Edit</div>
            </div>
        </div>
    );
};
