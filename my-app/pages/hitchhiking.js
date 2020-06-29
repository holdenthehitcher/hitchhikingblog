import React, { Component } from "react";
import TitleName from "../components/TitleName";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoryBackground from "../components/CategoryBackground";
import CategoryCards from "../components/CategoryCards";

import { HITCHHIKINGPOSTS } from "../shared/HITCHHIKINGPOSTS";

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundId: "hitchhikingBackground",
      heading: "Hitchhiking",
      description:
        "Walking through uncharted territories, crafting signs, putting yourself out there, and perservering until you reach your goal: that's what embodies the persona of a hitchhiking traveler. The reward? Ending up in a new place with new friends",
        catColor: "hitchhikingCard",
    };
  }

  render() {
    const blogposts = HITCHHIKINGPOSTS;

    return (
      <>
        <TitleName />
        <main>
          <Navigation />
          <CategoryBackground
            heading={this.state.heading}
            description={this.state.description}
            backgroundId={this.state.backgroundId}
          />
          <CategoryCards blogposts={blogposts} heading={this.state.heading} catColor={this.state.catColor}/>
          <Footer />
        </main>
      </>
    );
  }
}
