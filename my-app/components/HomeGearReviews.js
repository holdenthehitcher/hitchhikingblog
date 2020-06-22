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
        <div className="col-lg-10">
          <Card id="homeGearBody">
            <Media style={boxSize}>
              <Link href="/gear">
                <a>
                  <img width={250} height={200} className="mr-4" src="/blogmaterials/gear/gear_category.jpg" />
                </a>
              </Link>
              <Media.Body>
                <h3 id="homeGearHead">Gear Reviews</h3>
                <span className="homeGearText">
                  Putting survival equipment to the test is what wild-camping is all about.
                </span>
                <hr className="d-md-block d-none" />
                <span className="homeGearText d-md-block d-none">
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
