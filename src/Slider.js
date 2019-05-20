import React, { useState } from "react";
import styled from "styled-components";

// const sliderThumbStyles = props => props;
const SliderWrapper = styled.div`
  font-family: "Stylish", sans-serif;
  font-size: 2rem;
  font-weight: 200;
  border: 1px solid blue;
  & input {
    border: 1px solid brown;
  }
  & input[type="range"]::-webkit-slider-thumb {
  }
  & label[for="slider"] {
    color: brown;
  }
`;

const Slider = props => {
  console.log("ff > Slider", props);
  const [value, setValue] = useState(50);
  const slideChangeHandler = input => setValue(input);

  return (
    <SliderWrapper className={`slider-wrapper ${props.attrReference}`}>
      <label htmlFor="slider">
        {props.attrReference}

        <input
          onChange={e => slideChangeHandler(e.target.value)}
          onBlur={e => slideChangeHandler(e.target.value)}
          className="slider"
          type="range"
          min={0}
          max={100}
          value={value}
        />
      </label>
      <h2>{value}</h2>
    </SliderWrapper>
  );
};
export default Slider;
