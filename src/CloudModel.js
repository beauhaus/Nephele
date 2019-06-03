import React from "react";
import styled from "styled-components";

const cloudStylesStore = props => `opacity: ${props.opacityVal / 40}`;

const StyledCloudModel = styled.div`
  /* background: orange; */
  background: transparent;
  width: 500px;
  height: 275px;
  border-radius: 50%;
  position: absolute;
  top: -35vh;
  left: -25vw;
  filter: url(#cloud-filter);
  box-shadow: 300px 300px 30px -20px #fff;
  ${props => cloudStylesStore(props)};
`;

const CloudModel = props => {
  return (
    <StyledCloudModel
      id="cloud-model"
      cloudSpreadVal={"cloudSpread"}
      cloudBlurVal={"cloudBlur"}
      numOctavesVal={"numOctaves"}
      cloudBaseFreqVal={"cloudBaseFreq"}
    />
  );
};

export default CloudModel;
