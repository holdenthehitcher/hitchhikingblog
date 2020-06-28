import React from "react";

export default function Map() {
  return (
    <>
      <div className="row d-flex justify-content-center mt-4">
        <h3 className="mapHeading">Hitchhiking and Volunteer Locations</h3>
      </div>
      <div className="row d-flex justify-content-center mb-4">
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1NQPj6moSAgTbQgHUPGxyia0KacPixKAK"
          width="640"
          height="480"
          id="googleMap"
        ></iframe>
      </div>
    </>
  );
}
