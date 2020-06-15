import React, { Component } from "react";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoryBackground from "../components/CategoryBackground";
import CategoryHighlightedCards from "../components/CategoryHighlightedCards";

import { HITCHHIKINGPOSTS } from "../shared/HITCHHIKINGPOSTS";

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundId: "hitchhikingBackground",
      heading: "Hitchhiking",
      description:
        "Walking through uncharted territories, crafting signs, putting yourself out there, and perservering until you reach your goal: that's what embodies the persona of a hitchhiking traveler. The reward? Ending up in a new place with new friends",
      customClass: "col-4"
    };
  }

  render() {
    const blogposts = HITCHHIKINGPOSTS;

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
          <div className="row">
            <CategoryHighlightedCards blogposts={blogposts} customClass={this.state.customClass} />
          </div>
          <Footer />
        </main>
      </>
    );
  }
}
