import React from "react";
import Media from "react-bootstrap/Media";

export default function InspirationalQuote() {
  return (
    <div className="row">
      <div className="col-6">
        <Media>
          <Media.Body>
            <h5>Inspirational Quote</h5>
            <p>"If you Love what you do, You'll never work a day in your life."</p>
            <br />
            <strong>- Mark Anthony</strong>
          </Media.Body>
        </Media>
      </div>
      <div className="col">
        <Media>
          <Media.Body>
            <img width={210} height={170} src="/blogmaterials/firsthitchhike/inspiration.jpg" />
          </Media.Body>
        </Media>
      </div>
    </div>
  );
}
