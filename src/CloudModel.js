import React from "react";
import styled from "styled-components";

const cloudStylesStore = ({ blurVal, spreadVal }) => {
  // console.log("p> CloudModel: ", props);
  return `
  box-shadow: 60vw 65vh ${blurVal}px ${spreadVal}px #fff;
`;
};

const StyledCloudModel = styled.div`
  background: transparent;
  border-radius: 50%;
  transform: translate(-50vw, -50vh);
  filter: url(#cloud-filter);
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
