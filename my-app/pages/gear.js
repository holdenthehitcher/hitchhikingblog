import React, { Component } from "react";
import Title from "../components/Title";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import CategoryTemplate from "../components/CategoryTemplate";

export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundId: "gearBackground",
    };
  }

  render() {
    return (
      <>
        <Title />
        <main>
        <Navigation />
          <div className="container">
            
            <CategoryTemplate />
            <Footer />
          </div>
        </main>
      </>
    );
  }
}
