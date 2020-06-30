import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

export default function CategoryBackground(props) {
  return (
    <>
      <div className="categoryBackground" id={props.backgroundId}>
        <div className="row justify-content-center centered">
          <div className="col background-text">
            <CSSTransitionGroup
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              <h2>{props.heading}</h2>
            </CSSTransitionGroup>
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
