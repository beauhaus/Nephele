import React, { useState } from "react";
import styled from "styled-components";
import NightDaySlider from "./Sliders/NightDaySlider";
import moonIcon from "./images/moonIcon.svg";
import sunIcon from "./images/sunIcon.svg";

// const sliderThumbStyles = props => props;
const StyledCloudDisplay = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  position: relative;
  justify-items: end;
  background: linear-gradient(165deg, #090909 0%, #527785 100%);
  box-shadow: inset 2px 2px 15px 4px rgba(0, 0, 0, 0.5);
  /* z-index: 1; */
  & img {
    width: 35px;
    height: 35px;
    margin-right: 0.5vw;
    &#sunIcon {
      grid-column: 6;
      grid-row: 1;
    }
    &#moonIcon {
      grid-column: 6;
      grid-row: 7;
      margin-bottom: 0.5vw;
    }
  }
`;

const CloudDisplay = props => {
  // console.log("ff > Slider", props);
  // const [value, setValue] = useState(50);
  // const slideChangeHandler = input => setValue(input);

  return (
    <StyledCloudDisplay className="cloud-display">
      <img id="moonIcon" src={moonIcon} alt="moon" />
      <img id="sunIcon" src={sunIcon} alt="sun" />
      <NightDaySlider attrRef="night-day" />
    </StyledCloudDisplay>
  );
};
export default CloudDisplay;
// <img src="http://placebear.com/800/000" alt="bear" />;
