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
      <div className="row d-flex justify-content-center my-5 mt-0">
        <div className="col-lg-10">
          <Card id="homeGearBody" className="boxShadow">
            <Media style={boxSize}>
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
              <Link href="/gear">
                <a>
                  <img id="gearCatImg" className="mr-4 boxShadow" src="/blogmaterials/gear/gear_category.JPG" />
                </a>
              </Link>
            </Media>
          </Card>
        </div>
      </div>
    </>
  );
}
