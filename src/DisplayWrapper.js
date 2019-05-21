import React, { useState } from "react";
import styled from "styled-components";

// const sliderThumbStyles = props => props;
const StyledDisplayWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  & h2 {
    margin-top: 20vh;
    color: whitesmoke;
  }
`;

const DisplayWrapper = props => {
  console.log("ff > Slider", props);
  // const [value, setValue] = useState(50);
  // const slideChangeHandler = input => setValue(input);

  return (
    <StyledDisplayWrapper className="section cloud-display">
      <h2>CLOUD DISPLAY</h2>
    </StyledDisplayWrapper>
  );
};
export default DisplayWrapper;
<img src="http://placebear.com/800/000" alt="bear" />;
