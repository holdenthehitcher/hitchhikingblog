import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

export default function GearReviews() {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <Card>
            <Media>
              <img width={210} height={170} className="mr-4" src="/blogmaterials/gear/gear_category.jpg" />
              <Media.Body>
                <h3>Gear Reviews</h3>
                <p>
                  Putting survival equipment to the test is what wild-camping is all about.
                  <hr />
                  Here are some of the sleeping, cooking, and recreational tools I used daily throughout my journey.
                </p>
              </Media.Body>
            </Media>
          </Card>
        </div>
      </div>
    </>
  );
}
