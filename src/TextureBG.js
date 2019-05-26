import React from "react";
import styled from "styled-components";

const StyledTextureBG = styled.svg`
  width: 100%;
  height: 100%;
  opacity: 0.5;
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
          baseFrequency="0.005"
          result="noise"
          numOctaves="5"
        />

        <feDiffuseLighting
          id="light"
          in="noise"
          lightingColor="#dfddd7"
          surfaceScale="20"
          result="light"
        >
          <feDistantLight azimuth="45" elevation="50" />
        </feDiffuseLighting>
        <feMerge>
          <feMergeNode in="noise" />
          <feMergeNode in="light" />
        </feMerge>
      </filter>

      <rect id="paper" x="0" y="0" width="100%" height="100%" />
    </StyledTextureBG>
  );
};

export default TextureBG;
