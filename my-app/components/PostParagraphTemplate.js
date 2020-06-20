import React from "react";

export default function PostParagraphTemplate({ paragraph }) {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-10 postTextcol">
        <p className="postText">{paragraph}</p>
      </div>
    </div>
  );
}
