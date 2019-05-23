import React, { useState } from "react";
import styled from "styled-components";

// const sliderThumbStyles = props => props;
const SliderWrapper = styled.div`
  font-family: "Stylish", sans-serif;
  font-size: 2rem;
  font-weight: 200;
  position: relative;
  margin-top: 0.5rem;
  & .val-display {
    position: absolute;
    top: 0;
    right: 1vw;
  }
  & input[type="range"] {
    /* border: 1px solid brown; */
    margin: auto -1rem auto auto;
    -webkit-appearance: none;
    width: 94%;
    cursor: pointer;
    background: transparent;
  }
  & input[type="range"]::-webkit-slider-thumb {
  }
  & .attr-reference {
    color: brown;
  }
`;

const Slider = props => {
  const [value, setValue] = useState(50);
  const slideChangeHandler = input => setValue(input);

  return (
    <SliderWrapper
      className={`slider-wrapper section ${props.attrReference}-section`}
    >
      <label htmlFor="slider">
        <p className="attr-reference">{props.attrReference}</p>
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
      <h2 className="val-display">{value}</h2>
    </SliderWrapper>
  );
};
export default Slider;
