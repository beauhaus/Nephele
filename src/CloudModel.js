import React from "react";
import styled from "styled-components";

const cloudStylesStore = ({ blurVal, spreadVal }) => {
  // console.log("p> CloudModel: ", props);
  return `
  box-shadow: 60vw 65vh ${blurVal}px ${spreadVal}px #fff;

`;
};

const StyledCloudModel = styled.div`
  border-radius: 50%;
  transform: translate(-40vw, -45vh);
  background: transparent;
  filter: url(#cloud-filter);
  z-index: 1;
  width: 50%;
  height: 40%;
  background: transparent;
  ${props => cloudStylesStore(props)};
`;

const CloudModel = ({ blurVal, spreadVal }) => {
  return (
    <StyledCloudModel
      id="cloud-model"
      spreadVal={spreadVal}
      blurVal={blurVal}
    />
  );
};

export default CloudModel;
