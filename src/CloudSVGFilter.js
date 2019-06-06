import React from "react";
import styled from "styled-components";

const cloudSVGStylesStore = props => `opacity: ${props.opacityVal / 40}`;

const StyledSVGFilter = styled.svg`
  /* filter: url(#filter-back); */
  ${props => cloudSVGStylesStore(props)}
`;

const CloudSVGFilter = props => {
  return (
    <StyledSVGFilter id="cloud-filter-container" width="0" height="0">
      <filter id="cloud-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.015"
          numOctaves="6"
        />
        <feDisplacementMap in="SourceGraphic" scale="170" />
      </filter>
    </StyledSVGFilter>
  );
};

export default CloudSVGFilter;