import React from "react";

export default function PostVideoTemplate() {
  return (
    <div className="row d-flex justify-content-center">
      <iframe
        width="600"
        height="330"
        src="https://www.youtube.com/embed/QCeaF8ou6vc"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="embed-responsive-item"
      />
    </div>
  );
}
