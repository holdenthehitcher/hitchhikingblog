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
      heading: "A Culinary Journey",
      description:
        "Trekking, and camping in all-four seasons in rural and urban environments that highlight some of the tools and equipment I used during two years on foot",
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
