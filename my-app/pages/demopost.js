import React, { Component } from "react";
import TitleName from "../components/TitleName";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import PostImageTemplate from "../components/PostImageTemplate";
import PostVideoTemplate from "../components/PostVideoTemplate";
import PostParagraphTemplate from "../components/PostParagraphTemplate";

import { HITCHHIKINGPOSTS } from "../shared/HITCHHIKINGPOSTS";

export class templatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogposts: HITCHHIKINGPOSTS,
    };
  }

  render() {
    const postInfo = this.state.blogposts[0];
    const { images, videos, paragraphs } = postInfo;

    return (
      <>
        <TitleName />
        <main>
          <Navigation />
          <h1 className="postHeader">Headline for Article</h1>
          <PostImageTemplate image={images[0]} />
          <PostVideoTemplate video={videos[0]} />
          <PostParagraphTemplate paragraph={paragraphs[0]} />
          {/*  */}

          <Footer />
        </main>
      </>
    );
  }
}

export default templatePost;
