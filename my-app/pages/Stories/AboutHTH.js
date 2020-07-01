import React, { Component } from "react";
import TitleName from "../../components/TitleName";
import Navigation from "../../components/Navigation";
import FooterNav from "../../components/FooterNav";
import PostImageTemplate from "../../components/PostImageTemplate";
import PostVideoTemplate from "../../components/PostVideoTemplate";
import PostParagraphTemplate from "../../components/PostParagraphTemplate";

import { ABOUTPOST } from "../../shared/ALLPOSTS";

export class AboutPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogposts: ABOUTPOST,
    };
  }

  render() {
    const postInfo = this.state.blogposts[0];
    const { name, images, videos, paragraphs } = postInfo;

    return (
      <>
        <TitleName />
        <main>
          <Navigation />
          <div className="container">
            <h1 className="postHeader">{name}</h1>
            <PostImageTemplate image={images.theLightsBelow} />
            <PostParagraphTemplate paragraph={paragraphs[0]} />
            <PostImageTemplate image={images.overcastTorquay} />
            <PostParagraphTemplate paragraph={paragraphs[1]} />
            <PostImageTemplate image={images.cavemen} />
            <PostParagraphTemplate paragraph={paragraphs[2]} />
            <PostImageTemplate image={images.camp} />
            <PostParagraphTemplate paragraph={paragraphs[3]} />
            <PostVideoTemplate video={videos[0]} />
          </div>
          <FooterNav />
        </main>
      </>
    );
  }
}

export default AboutPost;
