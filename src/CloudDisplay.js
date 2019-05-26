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
  z-index: 10;
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
      {"<h1>cloud display</h1>"}
    </StyledCloudDisplay>
  );
};
export default CloudDisplay;
// <img src="http://placebear.com/800/000" alt="bear" />;
