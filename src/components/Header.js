import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

const HeaderContainer = styled.header`
  background-color: #202020;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    // tablets
    justify-content: center;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    //mobile devices
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  background-color: #ed1d24;
  padding: 0.3rem;
  border-radius: 5px;

  svg {
    margin-right: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Navigation = styled.nav`
  a {
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
    padding: 0.3rem 0.5rem;
    border-radius: 3px;
    transition: background-color: 0.2s;

    &:hover {
      background-color: #f0131e;
    }

    @media (max-width: 768px) {
      a  {
        margin: 0 0.5rem;
      }
    }

    @media (max-width: 480px) {
      a {
        margin-top: 0.5rem;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>
        <FontAwesomeIcon icon={faFutbol} />
        Marvel Soccer Team
      </Title>

      {/* Navigation Links */}
      <Navigation>
        <a href="#top">HOME</a>
        <a href="#search">Search</a>
        <a href="#team">Team</a>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
