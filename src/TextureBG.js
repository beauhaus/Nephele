import React from "react";
import styled from "styled-components";

const StyledTextureBG = styled.svg`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  rect {
    filter: url(#paperBG);
  }
`;

const TextureBG = () => {
  return (
    <StyledTextureBG
      id="bg-texture"
      viewBox="0 0 900 1440"
      preserveAspectRatio="none"
    >
      <filter id="paperBG" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01"
          result="noise"
          numOctaves="8"
        />

        <feDiffuseLighting id="light" in="noise" surfaceScale="20">
          <feDistantLight azimuth="45" elevation="70" />
        </feDiffuseLighting>
        {/*
          <feTurbulence
    type="fractalNoise"
    baseFrequency="0.04"
    result="noise"
    numOctaves="5"
  />
          <feDiffuseLighting id="light" in="noise" surfaceScale="2">
        <feDistantLight azimuth="45" elevation="80" />
      </feDiffuseLighting>
  */}
      </filter>

      <rect id="paper" x="0" y="0" width="100%" height="100%" />
    </StyledTextureBG>
  );
};

export default TextureBG;
