import React from "react";

export default function CategoryBackground(props) {
  return (
    <>
      <div className="categoryBackground" id="gearBackground" fullwidth>
        <div className="row justify-content-center centered">
          <div className="col">
            <h2>{props.heading}</h2>
          </div>
        </div>
        <div className="row justify-content-center centered">
          <div className="col">
            <span>{props.description}</span>
          </div>
        </div>
      </div>
    </>
  );
}
