import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #202020;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.7rem;
  }
`;

const CopyRightText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const MarvelLik = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  transition: color 0.3s;

  &:hover {
    color: #ed1d24;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyRightText>
        © 2024 Marvel Soccer Team. All Rights Reserved.
      </CopyRightText>
      <MarvelLik
        href="https://www.marvel.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Marvel's Official Website
      </MarvelLik>
    </FooterContainer>
  );
};

export default Footer;
