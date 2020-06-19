import React from "react";

export default function CategoryBackground(props) {
  return (
    <>
      <div className="categoryBackground" id={props.backgroundId}>
        <div className="row justify-content-center centered">
          <div className="col background-text">
            <h2 className="footerHeaders">{props.heading}</h2>
          </div>
        </div>
        <div className="row justify-content-center centered">
          <div className="col background-text">
            <p className="catCardText">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
