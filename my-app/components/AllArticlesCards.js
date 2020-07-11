import "./AllArticles.scss";

import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";
import { CSSTransitionGroup } from "react-transition-group";

import Link from "next/link";

const AllArticlesCards = ({ blogposts, currentPage }) => {
  useEffect(() => {}, [currentPage]);

  //// parsing .date into long format
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateString = (date) => new Date(date).toLocaleDateString("en-US", options);

  const allCards = blogposts.map(({ thumbnail, pageLink = "/allstories", catColor, date, location }, i) => (
    <Card className={`${catColor} allCard`} key={i}>
      <Card.Title className="allCardHeader" style={{ textAlign: "center" }}>
        {thumbnail.title}
      </Card.Title>

      <Link href={pageLink}>
        <a>
          <Card.Img variant="top" className="allCardImg" src={thumbnail.image} />
        </a>
      </Link>
      <Card.Body>
        <ListGroup>
          <ListGroup.Item className="allCardTextBg">
            <Card.Text className="allCardText">{thumbnail.description}</Card.Text>
          </ListGroup.Item>
        </ListGroup>
        <Card.Text className="allCardLocation">{location}</Card.Text>
        <Card.Text className="allCardDate">{dateString(date)}</Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <CSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      <CardColumns key="2" className="cardColumn">
        {allCards}
      </CardColumns>
    </CSSTransitionGroup>
  );
};
export default AllArticlesCards;
