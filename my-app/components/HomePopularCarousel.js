import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

import styled from "styled-components";

export default function HomePopularCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselSlides = [
    {
      image: "blogmaterials/ibiza_trip/ibizasailboat.JPG",
      alt: "sailboat",
      heading: "First time Hitchhiking, Ever!",
      text: "There's a first time for everything... by the way it happened, no one would believe it!",
    },
    {
      image: "blogmaterials/ibiza_trip/ibizaart.jpg",
      alt: "art",
      heading: "Art in Ibiza",
      text:
        "Known solely for its beautiful beaches and world-renowned nightlife, this small Spanish island has more to offer.",
    },
    {
      image: "blogmaterials/ibiza_trip/cavestairs.jpg",
      alt: "ocean",
      heading: "Right Directions from Wrong Turns",
      text:
        "Getting stuck somewhere can bring a sense of dread, allowing the kindness of strangers to shine onto the world.",
    },
  ];

  return (
    <>
      <div className="row d-flex justify-content-center my-2">
        <h1 className="popularHeading">Popular Articles</h1>
      </div>
      <div className="row d-flex justify-content-center my-4">
        <Carousel
          className="carouselFade carousel-fade "
          id="popularCarousel"
          interval="8000"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {carouselSlides.map(({ image, alt, heading, text }, i) => (
            <Carousel.Item className="carouselItem" key={i}>
              <Card className="carouselCard">
                <Card.Img src={image} alt={alt} />
              </Card>
              <Carousel.Caption>
                <h3 className="carouselCaptionHeading">{heading}</h3>
                <p className="carouselCaptionText">{text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
