import React from "react";
import Card from "react-bootstrap/Card";


export default function RandomArticle() {
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Random Article Generator</Card.Header>
        <Card.Body>
          <Card.Title>Needing Some Inspiration?</Card.Title>
          <Card.Text>Check out our a random article picker to add novelty to your day!</Card.Text>
          <button className="primary">Choose Story</button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}
