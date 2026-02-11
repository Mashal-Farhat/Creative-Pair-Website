import React from "react";
import styled from "styled-components";

const colors = {
  dark: "#0A100D",
  light: "#B9BAA3",
  gray: "#D6D5C9",
  accent1: "#A22C29",
  accent2: "#902923",
  accent3: "#4a2523",
};

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1" />
          <span className="side side2" />
          <span className="side side3" />
          <span className="side side4" />
          <span className="shadow" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .pyramid-loader {
    position: relative;
    width: 260px;
    height: 260px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg);
  }

  .wrapper {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotateY(360deg);
    }
  }

  .side {
    width: 70px;
    height: 70px;
    position: absolute;
    inset: 0;
    margin: auto;
    transform-origin: center top;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }

  /* ===== PYRAMID SIDES ===== */

  .side1 {
    transform: rotateZ(-30deg) rotateY(90deg);
    background: conic-gradient(
      ${colors.accent1},
      ${colors.accent2},
      ${colors.accent3},
      ${colors.accent1}
    );
  }

  .side2 {
    transform: rotateZ(30deg) rotateY(90deg);
    background: conic-gradient(
      ${colors.accent2},
      ${colors.accent3},
      ${colors.accent1},
      ${colors.accent2}
    );
  }

  .side3 {
    transform: rotateX(30deg);
    background: conic-gradient(
      ${colors.accent3},
      ${colors.accent1},
      ${colors.accent2},
      ${colors.accent3}
    );
  }

  .side4 {
    transform: rotateX(-30deg);
    background: conic-gradient(
      ${colors.accent1},
      ${colors.accent3},
      ${colors.accent2},
      ${colors.accent1}
    );
  }

  /* ===== SHADOW ===== */

  .shadow {
    width: 60px;
    height: 60px;
    background: ${colors.accent1};
    position: absolute;
    inset: 0;
    margin: auto;
    transform: rotateX(90deg) translateZ(-40px);
    filter: blur(14px);
    opacity: 0.5;
  }
`;

export default Loader;
