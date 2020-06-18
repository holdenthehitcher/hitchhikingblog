import React from "react";
import Media from "react-bootstrap/Media";

export default function InspirationalQuote() {
  return (
    <div className="quoteDiv row d-flex justify-content-center">
      <Media>
        <Media.Body>
          <h5 className="quoteHeading">Inspirational Quote</h5>
          <p className="quoteText">"If you Love what you do, You'll never work a day in your life."</p>
          <span className="quoteAuthor">
            <strong>- Mark Anthony</strong>
          </span>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <img
            width={210}
            height={170}
            className="ml-4 quoteImage rounded"
            src="/blogmaterials/firsthitchhike/inspiration.jpg"
          />
        </Media.Body>
      </Media>
    </div>
  );
}
