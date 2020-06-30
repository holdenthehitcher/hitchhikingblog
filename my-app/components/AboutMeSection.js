import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Link from "next/link";

import { Fade } from "react-animation-components";
import { ReactCSSTransitionGroup } from "react-transition-group";

export default function AboutMeSecton() {
  const [inProp] = useState(true);
  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };
  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
  };

  return (
    <>
      <div className="row py-4 d-flex justify-content-center">
        <div className="col-12 col-sm-8">
          <ReactCSSTransitionGroup key="1" transitionName="page" transitionAppearTimeout={300} transitionAppear={true}>
            <div className="col-12 d-flex justify-content-center">
              <h3 className="styled-heading">About Holden the Hitcher</h3>
            </div>
          </ReactCSSTransitionGroup>
          <div className="col textScrim d-flex justify-content-center">
            <p className="aboutText">
              Three years following my return to the States… I spent time making blog posts about my travels{" "}
              <Link href="/hitchhiking">
                <a>hitchhiking</a>
              </Link>
              ,{" "}
              <Link href="/volunteering">
                <a>volunteering</a>
              </Link>
              , and getting in and out of sticky situations. Feast your eyes on{" "}
              <Link href="culinary">
                <a>culinary</a>
              </Link>{" "}
              delights tracked through two year journey through 20 countries in Europe with nothing but a backpack and
              the{" "}
              <Link href="/gear">
                <a>gear</a>
              </Link>{" "}
              that fit on my shoulders.
            </p>
          </div>
        </div>
        <div className="col col-sm-4">
          <Link href="/Stories/AboutHTH">
            <a>
              <Fade in>
                <img src="blogmaterials/about/about.JPG" className="rounded boxShadow" id="aboutImg"></img>
              </Fade>
            </a>
          </Link>
        </div>
      </div>
      <Disclaimer />
    </>
  );
}

const Disclaimer = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="row">
      <div className="col pt-4 d-flex justify-content-center">
        <Fade in>
          <Alert show={show} variant="warning" className="boxShadow">
            <Alert.Heading style={{ textAlign: "center" }}>
              Disclaimer: This is not your 'Average Travel Blog’!{" "}
            </Alert.Heading>
            <div className="d-flex justify-content-center">
              <Button onClick={() => setShow(false)} variant="success">
                Understood!
              </Button>
            </div>
          </Alert>
        </Fade>
      </div>
    </div>
  );
};
