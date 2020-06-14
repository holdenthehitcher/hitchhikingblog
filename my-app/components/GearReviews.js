import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

export default function GearReviews() {
  return (
    <>
      <div className="row">
        <Card>
          <Media>
            <div className="col-5">
              <img width={210} height={170} src="/blogmaterials/gear/gear_category.jpg" />
            </div>
            <div className="col">
              <Media.Body>
                <h3>Gear Reviews</h3>
                <p>
                  Putting survival equipment to the test is what wild-camping is all about.
                  <hr />
                  Here are some of the sleeping, cooking, and recreational tools I used daily throughout my journey.
                </p>
              </Media.Body>
            </div>
          </Media>
        </Card>
      </div>
    </>
  );
}
