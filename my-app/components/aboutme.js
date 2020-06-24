import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function AboutMe() {

  return (
    <div className="row py-4">
      <div className="col-3">
        <Link href="/Stories/AboutHTH">
          <a>
            <img src="blogmaterials/about/about.JPG" className="rounded" id="aboutImg"></img>
          </a>
        </Link>
      </div>
      <div className="col-8">
        <div className="col d-flex justify-content-center">
          <h3 className="styled-heading">About Holden the Hitcher</h3>
        </div>
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
          delights tracked through two year journey through 20 countries in Europe with nothing but a backpack and the{" "}
          <Link href="/gear">
            <a>gear</a>
          </Link>{" "}
          I can carry.
        </p>
        <Disclaimer />
      </div>
    </div>
  );
}

const Disclaimer = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="col pt-4 d-flex justify-content-center">
      <Alert show={show} variant="danger">
        <Alert.Heading style={{ textAlign: "center" }}>
          Disclaimer: This is not your 'Average Travel Blog’!{" "}
        </Alert.Heading>
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="success">
            Got it!
          </Button>
        </div>
      </Alert>
    </div>
  );
};
