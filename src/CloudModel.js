import React from "react";
import styled from "styled-components";

const cloudStylesStore = props => `opacity: ${props.opacityVal / 50}`;

const StyledCloudModel = styled.div`
  background: transparent;
  border-radius: 50%;
  transform: translate(-50vw, -50vh);
  filter: url(#cloud-filter);
  box-shadow: 60vw 65vh 40px 20px #fff;
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
