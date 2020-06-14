import React, { Component } from "react";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoryBackground from "../components/CategoryBackground";
import CategoryHighlightedCards from "../components/CategoryHighlightedCards";
import { CULINARYPOSTS } from "../shared/CULINARYPOSTS";

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundId: "culinaryBackground",
      heading: "Food & Culture",
      description:
        "A culinary journey starts with a single bite. From seed to plate, the food displays the pride people have of their ingredients and preparation methods passed down from past generations",
      blogposts: CULINARYPOSTS,
    };
  }

  render() {
    return (
      <>
        <Title />
        <main>
          <Navigation />
          <CategoryBackground
            heading={this.state.heading}
            description={this.state.description}
            backgroundId={this.state.backgroundId}
          />
          <CategoryHighlightedCards blogposts={this.state.blogposts} />
          <Footer />
        </main>
      </>
    );
  }
}
