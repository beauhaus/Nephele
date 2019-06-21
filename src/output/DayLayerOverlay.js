import React from "react";
import styled from "styled-components";

const stylesStore = props => `opacity: ${props.opacityVal * 2 * 0.01}`;

const StyledDayLayerOverlay = styled.div`
  background: linear-gradient(165deg, #58c4e9 50%, #f5f5f5 130%);
  width: 84vw;
  height: 78vh;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: inset 0px 0px 10px 2px rgba(0, 0, 0, 0.8);
  /* index: 12; */
  ${props => stylesStore(props)}

  z-index: 2;
`;
const DayLayerOverlay = ({ opacityVal }) => {
  return <StyledDayLayerOverlay id="day-layer" opacityVal={opacityVal} />;
};

export default DayLayerOverlay;
