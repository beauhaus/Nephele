import React, { Component } from "react";
import styled from "styled-components";

const stylesStore = props => `opacity: ${props.opacityVal / 10}`;

const StyledDayLayerOverlay = styled.div`
  width: 49vw;
  height: 54vh;
  background: linear-gradient(165deg, #58c4e9 50%, #f5f5f5 100%);
  position: absolute;
  ${props => stylesStore(props)};
`;
const DayLayerOverlay = props => {
  return <StyledDayLayerOverlay id="day-layer" opacityVal={props.opacityVal} />;
};

export default DayLayerOverlay;
