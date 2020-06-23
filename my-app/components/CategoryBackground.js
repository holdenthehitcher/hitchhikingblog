import React from "react";

export default function CategoryBackground(props) {
  return (
    <>
      <div className="categoryBackground" id={props.backgroundId}>
        <div className="row justify-content-center centered">
          <div className="col background-text">
            <h2>{props.heading}</h2>
          </div>
        </div>
        <div className="row justify-content-center centered">
          <div className="col background-text">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
    
  );
}
