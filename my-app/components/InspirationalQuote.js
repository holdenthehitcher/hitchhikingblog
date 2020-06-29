import React from "react";
import Media from "react-bootstrap/Media";

export default function InspirationalQuote() {
  return (
    <div className="quoteDiv row d-flex justify-content-center">
      <Media className="ml-1">
        <Media.Body>
          <h5 className="quoteHeading">Daily Quote</h5>
          <p className="quoteText">"If you Love what you do, You'll never work a day in your life."</p>
          <p className="quoteAuthor">
            <strong>- Mark Anthony</strong>
          </p>
        </Media.Body>
        <img className="quoteImage rounded ml-3 mt-2 boxShadow" src="/blogmaterials/firsthitchhike/inspiration.JPG" />
      </Media>
    </div>
  );
}
