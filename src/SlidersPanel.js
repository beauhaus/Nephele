import React from "react";
import styled from "styled-components";

import SlidersContainer from "./Sliders/SlidersContainer";

const StyledSliderPanel = styled.div`
  background: linear-gradient(
    180deg,
    rgba(231, 231, 231, 0.5) -50%,
    transparent 100%
  );
  opacity: 0.5;
  width: 100%;
  grid-column: 1;
  grid-row: 3/-1;
  z-index: 3;
  animation: fadeIn 1s ease-out forwards;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 32vh;
`;
const SliderPanel = ({ stateObj, slidersArray, sliderValUpdater }) => {
  return (
    <StyledSliderPanel className="slider-panel">
      <SlidersContainer
        slidersArray={slidersArray}
        sliderValUpdater={sliderValUpdater}
        stateObj={stateObj}
      />
    </StyledSliderPanel>
  );
};
export default SliderPanel;
