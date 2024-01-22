import styled, { css } from "styled-components";

// Wrapper for the entire soccer pitch component
export const Wrapper = styled.div`
  width: 75%;
  margin-top: 30px;
  padding: 10px 18px;
  background-color: #238729;
  border-radius: 5px;
`;

// main field area of the soccer pitch
export const Campo = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 0;
  margin: 10px auto;
  padding: 0 0 60% 0;
  background-color: #238729;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 1px;
    margin: -8% 0 0 -1px;
    display: block;
    width: 8%;
    height: 30%;
    border: 1px solid white;
    z-index: 2;
  }

  &:after {
    left: auto;
    right: 0px;
  }
`;

// base style for pitch divisions and interiors
export const baseStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  border: 1px solid white;
`;

// middle line of the pitch
export const Divisoria = styled.div`
  ${baseStyle}

  &:after, &:before {
    content: "";
    position: absolute;
    left: 50%;
    display: block;
    width: 0;
    height: 100%;
    margin-left: 0.5px;
    border: 0.5px solid white;
  }

  &:before {
    top: 50%;
    width: 17%;
    height: 0;
    margin: -8% 0 0 -8%;
    margin-top: calc(-8% - 4px);
    margin-left: calc(-8% - 0.5px);
    padding-bottom: 17%;
    border-radius: 50%;
    border: 1px solid white;
  }
`;

// interior areas of the pitch
export const Interior = styled.div`
  ${baseStyle}

  &:before, &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    margin: -16% 0 0 -1px;
    display: block;
    width: 16%;
    height: 55%;
    background-color: #238729;
    border: 1px solid white;
  }

  &:after {
    left: auto;
    right: 0;
    margin: -16% -1px 0 0;
  }
`;

// semi-circles at the ends of the pitch
export const Semi1 = styled.div`
  ${baseStyle}

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 5%;
    width: 16%;
    height: 0;
    margin: -8% 0 0 0;
    padding-bottom: 16%;
    border: 1px solid white;
    border-radius: 50%;
  }
`;

export const Semi2 = styled.div`
  ${baseStyle}

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: auto;
    right: 5%;
    width: 16%;
    height: 0;
    margin: -8% 0 0 0;
    padding-bottom: 16%;
    border: 1px solid white;
    border-radius: 50%;
  }
`;

// player positions on the pitch
export const PlayerPosition = styled.div`
  content: "";
  position: absolute;
  display: block;
  width: 6%;
  height: 10%;
  background-image: url(${(props) => props.$image});
  background-size: cover;
  border: 1px solid #324978;
  border-radius: 50%;
  z-index: 2;
`;

// specific player positions
export const GK = styled(PlayerPosition)`
  top: 48%;
  left: 93%;
`;

export const DF = styled(PlayerPosition)`
  top: 37%;
  left: 81%;
`;

export const MF = styled(PlayerPosition)`
  top: 37%;
  left: 66%;
`;

export const ST = styled(PlayerPosition)`
  top: 37%;
  left: 49%;
`;

export const OUTDF = styled(PlayerPosition)`
  top: 54%;
  left: 81%;
`;

export const OUTST = styled(PlayerPosition)`
  top: 54%;
  left: 49%;
`;

export const OUTMF = styled(PlayerPosition)`
  top: 54%;
  left: 66%;
`;
