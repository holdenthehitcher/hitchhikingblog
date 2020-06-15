import React from "react";

export default function PostVideoTemplate({video}) {
  return (
    <div className="row d-flex justify-content-center">
      <iframe
        width="600"
        height="330"
        src={video}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="embed-responsive-item"
      />
    </div>
  );
}
