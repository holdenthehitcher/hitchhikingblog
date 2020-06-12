import React from "react";

export default function CategoryTemplate(props) {
  return (
    <>
      
        <div className="categoryBackground" id="gearBackground" fullwidth>
          <div className="row justify-content-center centered">
            <h2>{props.heading}</h2>
          </div>
        </div>
    </>
  );
}
