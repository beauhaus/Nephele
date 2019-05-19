import React from "react";
import styled from "styled-components";

const LovelyDiv = styled.div`
  border: 4px dashed yellowgreen;
`;

const Slider = () => {
  return (
    <LovelyDiv className="slider">
      <span>.</span>
    </LovelyDiv>
  );
};

export default Slider;
