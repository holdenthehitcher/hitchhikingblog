import React from "react";
import Image from "react-bootstrap/Image";

export default function PostImageTemplate({ image }) {
  return (
    <div className="row d-flex justify-content-center">
      <Image rounded width={650} height={510} src={image} />
    </div>
  );
}
