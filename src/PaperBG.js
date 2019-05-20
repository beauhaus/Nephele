// import React, { Component } from "react";
import React from "react";
// import { render } from "react-dom";
import styled from "styled-components";

const StyledPaperBG = styled.svg`
  width: 100%;
  height: 100%;
  opacity: 0.5;
  /* display: none; */
  rect {
    filter: url(#paperBG);
  }
`;

const PaperBG = () => {
  return (
    <StyledPaperBG viewBox="0 0 900 1440" preserveAspectRatio="none">
      <filter id="paperBG" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.04"
          result="noise"
          numOctaves="5"
        />
        <feDiffuseLighting id="light" in="noise" surfaceScale="2">
          <feDistantLight azimuth="45" elevation="60" />
        </feDiffuseLighting>
      </filter>

      <rect id="paper" x="0" y="0" width="100%" height="100%" />
    </StyledPaperBG>
  );
};

export default PaperBG;

/*
<defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop id="stop-top" offset="0%" />
          <stop id="stop-bot" offset="100%" />
        </linearGradient>
      </defs>
      
*/
