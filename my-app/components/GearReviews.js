import React from "react";
import Card from "react-bootstrap/Card";

export default function GearReviews() {
  return (
    <>
      <div className="row">
        <div className="col">
          <Card>
            <Card.Body>
              <Card.Img src="/blogmaterials/gear/gear_category.jpg" />
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card>
            <Card.Body>
              <h3>Gear Reviews</h3>
              <p>
                Putting survival equipment to the test is what wild-camping is all about.
                <hr />
                Here are some of the sleeping, cooking, and recreational tools I used daily throughout my journey.
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
