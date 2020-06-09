import React from "react";

export default function Map() {
  return (
    <>
      <div className="row">
        <h3>Hitchhiking and Volunteer Locations</h3>
      </div>
      <div className="row">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1NQPj6moSAgTbQgHUPGxyia0KacPixKAK"
          width="640"
          height="480"
        ></iframe>
      </div>
    </>
  );
}
