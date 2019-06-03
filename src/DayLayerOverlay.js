import React from "react";
import styled from "styled-components";

const stylesStore = props => `opacity: ${props.opacityVal / 40}`;

const StyledDayLayerOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(165deg, #58c4e9 50%, #f5f5f5 100%);
  position: absolute;
  box-shadow: inset 2px 2px 15px 4px rgba(0, 0, 0, 0.5);

  ${props => stylesStore(props)};
`;
const DayLayerOverlay = props => {
  return <StyledDayLayerOverlay id="day-layer" opacityVal={props.opacityVal} />;
};

export default DayLayerOverlay;
