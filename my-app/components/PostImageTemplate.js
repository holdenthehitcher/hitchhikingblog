import React from "react";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

export default function PostImageTemplate({ image }) {
  return (
    <div className="row d-flex justify-content-center">
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip>{image.description}</Tooltip>}
      >
        <Image rounded width={"auto"} height={510} src={image.photo} />
      </OverlayTrigger>
    </div>
  );
}
