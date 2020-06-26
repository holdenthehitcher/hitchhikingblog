import React from "react";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const AllArticlesCards = ({ blogposts }) => {
  return (
    <>
      <TransitionGroup>
        {blogposts.map(({ thumbnail, pageLink = "/allstories", className }, i) => (
          <CSSTransition key={i} timeout={600} classNames="item">
            <Card className={`${className}`}>
              <Link href={pageLink}>
                <a>
                  <Card.Title className="allCardTitle" style={{ textAlign: "center" }}>
                    {thumbnail.title}
                  </Card.Title>
                  <Card.Img variant="top" className="allCardImage" src={thumbnail.image} />
                  <Card.Body className="">
                    <Card.Text className="quoteText allCardText">{thumbnail.description}</Card.Text>
                  </Card.Body>
                </a>
              </Link>
            </Card>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
export default AllArticlesCards;
