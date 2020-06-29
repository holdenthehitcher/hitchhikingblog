import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";

import Link from "next/link";

import { Fade, Stagger } from "react-animation-components";

const AllArticlesCards = ({ blogposts, currentPage }) => {
  useEffect(() => {
    console.log("rerendered");
  }, [currentPage]);

  //// parsing .date into long format
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateString = (date) => new Date(date).toLocaleDateString("en-US", options);

  console.log(dateString(blogposts[0].date));
  return (
    <CardColumns className="cardColumn">
      <Stagger in>
        {blogposts.map(({ thumbnail, pageLink = "/allstories", className, date, location }, i) => (
          <Fade key={i}>
            <Card className={`${className} allCard`}>
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
          </Fade>
        ))}
      </Stagger>
    </CardColumns>
  );
};
export default AllArticlesCards;
