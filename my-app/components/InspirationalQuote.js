import React from "react";
import Card from "react-bootstrap/Card";

export default function InspirationalQuote() {
  return (
    <div className="row">
      <div className="col-6">
        <Card>
          <Card.Body>
            <h2>Inspirational Quote</h2>
            "If you Love what you do, You'll never work a day in your life."<br />
            <strong>- Mark Anthony</strong>
          </Card.Body>
        </Card>
      </div>
      <div className="col">
        <Card>
          <Card.Body>
              <Card.Img src="/blogmaterials/firsthitchhike/inspiration.jpg" />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
