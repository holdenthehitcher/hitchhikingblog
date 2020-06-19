import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default function CategoryHighlightedCards({ blogposts }) {
  return (
    <div className="row">
      <CardDeck>
        {blogposts.map(({ thumbnail }, i) => (
          <div className="col-lg-3 my-3" key={i}>
            <Card>
              <Card.Header className="catCardHeader" style={{ textAlign: "center" }}>
                {thumbnail.title}
              </Card.Header>
              <Card.Body>
                <Card.Img src={thumbnail.image} />
                <Card.Text className="quoteText">{thumbnail.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </CardDeck>
    </div>
  );
}
