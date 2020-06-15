import React from "react";
import Card from "react-bootstrap/Card";

export default function CategoryHighlightedCards({blogposts}) {
  return (
   <>
      {blogposts.map(({ thumbnail}, i) => (
        <div className={thumbnail.customClass} key={i}>
          <Card>
            <Card.Header>{thumbnail.title}</Card.Header>
            <Card.Body>
              <Card.Img src={thumbnail.image} />
              <Card.Text>{thumbnail.description}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}
