import React, { useState, setState } from "react";

//assets

function FeatureItem({icon, desc, title}) {
    return (
        <div className="d-flex align-items-center flex-column feature-item">
            <img className="ctn-feature" src={icon} width="152px" alt={icon} />
            <div className="font-20 font-weight-bold p-2 text-center">
                {desc}
            </div>
            <div className="font-16 text-center">
                {title}
            </div>
        </div>
    )
  }
  
export default FeatureItem;