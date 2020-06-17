import React from "react";
import Media from "react-bootstrap/Media";

import styled from "styled-components";

export default function InspirationalQuote() {
  const Title = styled.h5`
    font-size: 50px;
  `;
  const DivMargins = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
  `;

  return (
    <DivMargins className="row d-flex justify-content-center">
      <Media>
        <Media.Body>
          <Title>Inspirational Quote</Title>
          <p>"If you Love what you do, You'll never work a day in your life."</p>
          <strong>- Mark Anthony</strong>
        </Media.Body>
      </Media>
      <Media>
        <Media.Body>
          <img width={210} height={170} className="ml-4" src="/blogmaterials/firsthitchhike/inspiration.jpg" />
        </Media.Body>
      </Media>
    </DivMargins>
  );
}
