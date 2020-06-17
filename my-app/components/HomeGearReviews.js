import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Link from "next/link";

export default function HomeGearReviews() {
  const boxSize = {
    padding: "25px",
  };

  return (
    <>
      <div className="row d-flex justify-content-center my-5">
        <div className="col-10">
          <Card>
            <Media style={boxSize}>
              <Link href="/gear">
                <a>
                  <img width={210} height={170} className="mr-4" src="/blogmaterials/gear/gear_category.jpg" />
                </a>
              </Link>
              <Media.Body>
                <h3>Gear Reviews</h3>
                <span>Putting survival equipment to the test is what wild-camping is all about.</span>
                <hr />
                <span>
                  Here are some of the sleeping, cooking, and recreational tools I used daily throughout my journey.
                </span>
              </Media.Body>
            </Media>
          </Card>
        </div>
      </div>
    </>
  );
}
