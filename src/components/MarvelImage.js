import React from "react";
import styled from "styled-components";
import introImage from "../assets/IntroImage.png";

const ImageContainer = styled.div`
  padding: 50px;
  margin-top: 60px;
  text-align: center;
  background: url(${introImage}) no-repeat center center/cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;

  @media (max-width: 1024px) {    
    height  50vh;
  }

  @media (max-width: 768px) {
    // ipad and other tablets    
    height: 40vh;
  }

  @media (max-width: 480px) {
    // iphone and similar devices
    height: 30vh;
  }
`;

const MarvelImage = () => {
  return <ImageContainer />;
};

export default MarvelImage;
