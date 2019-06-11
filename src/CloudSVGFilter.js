import React from "react";
import styled from "styled-components";

const cloudSVGStylesStore = props => `opacity: ${props.opacityVal / 40}`;

const StyledSVGFilter = styled.svg`
  /* filter: url(#filter-back); */
  ${props => cloudSVGStylesStore(props)}
`;

const CloudSVGFilter = ({ scaleVal, numOctavesVal, baseFrequencyVal }) => {
  return (
    <StyledSVGFilter id="cloud-filter-container" width="0" height="0">
      <filter id="cloud-filter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency={baseFrequencyVal * 0.0001}
          numOctaves={numOctavesVal}
        />
        <feDisplacementMap in="SourceGraphic" scale={scaleVal} />
      </filter>
    </StyledSVGFilter>
  );
};

export default CloudSVGFilter;
