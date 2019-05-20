import React, { useState } from "react";
import styled from "styled-components";

const SliderWrapper = styled.div``;

const Slider3 = () => {
  const [value, setValue] = useState(50);

  const changeHandler = val => {
    setValue(val);
  };

  return (
    <SliderWrapper className="slider-wrapper">
      <label htmlFor="slider3">
        slider3
        <input
          onChange={e => changeHandler(e.target.value)}
          onBlur={e => changeHandler(e.target.value)}
          className="slider-3"
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
export default Slider3;
