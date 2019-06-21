import React from "react";
import styled from "styled-components";

const StyledTextureBG = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  mix-blend-mode: multiply;
  rect#stone {
    filter: url(#stoneBG);
  }
`;

const TextureBG = () => {
  return (
    <StyledTextureBG id="bg-texture" preserveAspectRatio="none">
      <filter id="stoneBG" x="0%" y="0%" width="100%" height="100%">
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

      <rect id="stone" x="0" y="0" width="100%" height="100%" />
    </StyledTextureBG>
  );
};

export default TextureBG;
