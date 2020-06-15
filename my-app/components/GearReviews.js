import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Link from "next/link";

export default function GearReviews() {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <Card>
            <Media>
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
