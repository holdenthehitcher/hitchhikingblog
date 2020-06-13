import React from "react";
import Card from "react-bootstrap/Card";

export default function CategoryHighlightedCards(props) {

  return (
    <>
      <div className="row">
        {props.blogposts.map(({ thumbnail }, i) => (
          <div className="col">
            <Card key={i}>
              <Card.Header>{thumbnail.title}</Card.Header>
              <Card.Body>
                <Card.Img src={thumbnail.image} />
                <Card.Text>{thumbnail.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
