import React, { useState } from "react";
import styled from "styled-components";

// const sliderThumbStyles = props => props;
const StyledCloudDisplay = styled.section`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  background: linear-gradient(165deg, #090909 0%, #527785 100%);
  box-shadow: inset 2px 2px 15px 4px rgba(0, 0, 0, 0.5);
  /* z-index: 1; */
  & h2 {
    margin-top: 20vh;
    color: whitesmoke;
  }
`;

const CloudDisplay = props => {
  console.log("ff > Slider", props);
  // const [value, setValue] = useState(50);
  // const slideChangeHandler = input => setValue(input);

  return (
    <StyledCloudDisplay className="cloud-display">
      <h2>HI CLOUD!</h2>
    </StyledCloudDisplay>
  );
};
export default CloudDisplay;
// <img src="http://placebear.com/800/000" alt="bear" />;
