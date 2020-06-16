import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function AboutMe() {

  return (
    <div className="row">
      <div className="col-3">
        <img src="blogmaterials/about/about.JPG" id="aboutImg"></img>
      </div>
      <div className="col-9">
        <p>
          Three years following my return to the States… I spent time making blog posts about my travels{" "}
          <Link href="/hitchhiking">
            <a>hitchhiking</a>
          </Link>
          ,{" "}
          <Link href="/volunteering">
            <a>volunteering</a>
          </Link>
          , and getting in and out of sticky situations.
        </p>

        <div className="col-8">
          <Disclaimer />
        </div>

        <p>
          This follows a two year journey through 20 countries in Europe with nothing but a backpack and intentions,
          learning about different cultures, those embodying them, and myself in the process. See about unbelievable
          volunteering experiences on farms, homes, and hostels, and feast your eyes on{" "}
          <Link href="culinary">
            <a>culinary</a>
          </Link>{" "}
          delights… some delectable and others: foregin.
        </p>
        <p>
          Planning on venturing out yourself? Visit the{" "}
          <Link href="/gear">
            <a>gear</a>
          </Link>{" "}
          page for some of the tools I used with wild and urban camping. You'll never know what situations you may find
          yourself in. One thing I learned during this experience: Preparation is key!
        </p>
      </div>
    </div>
  );
}

const Disclaimer = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>Disclaimer: This is not your average ‘Travel Blog’! </Alert.Heading>
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="success">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  );
};
