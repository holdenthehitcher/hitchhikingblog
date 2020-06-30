import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { CSSTransitionGroup } from "react-transition-group";

export default function CategoryCards({ blogposts, heading, catColor }) {
  return (
    <>
      <h1 className="catHeader textScrim">Featured {heading} Articles</h1>
      <CSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <CardDeck className="catCardDeck">
          {blogposts.map(({ thumbnail }, i) => (
            <Card key={i} className={`catCard`}>
              <Card.Header className="catCardHeader" style={{ textAlign: "center" }}>
                {thumbnail.title}
              </Card.Header>
              <Card.Body className={`catCardBody ${catColor} boxShadow`}>
                <Card.Img src={thumbnail.image} className="boxShadow" />
                <Card.Text className="catCardText textScrim">{thumbnail.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </CSSTransitionGroup>
    </>
  );
}
