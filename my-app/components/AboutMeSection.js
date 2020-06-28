import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function AboutMeSecton() {
  return (
    <>
      <div className="row py-4 d-flex justify-content-center">
        <div className="col-12 col-sm-8">
          <div className="col-12 d-flex justify-content-center">
            <h3 className="styled-heading">About Holden the Hitcher</h3>
          </div>
          <div className="col d-flex justify-content-center">
            <p className="textWhite">
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
              I can carry.
            </p>
          </div>
        </div>
        <div className="col col-sm-4">
          <Link href="/Stories/AboutHTH">
            <a>
              <img src="blogmaterials/about/about.JPG" className="rounded" id="aboutImg"></img>
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
        <Alert show={show} variant="warning">
          <Alert.Heading style={{ textAlign: "center" }}>
            Disclaimer: This is not your 'Average Travel Blog’!{" "}
          </Alert.Heading>
          <div className="d-flex justify-content-center">
            <Button onClick={() => setShow(false)} variant="success">
              Understood!
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
};
