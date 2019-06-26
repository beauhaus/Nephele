import React, { Component } from "react";
import styled from "styled-components";
import SkySlider from "../Sliders/SkySlider";
import moonIcon from "../images/moonIcon.svg";
import sunIcon from "../images/sunIcon.svg";
import DayLayerOverlay from "./DayLayerOverlay";
import CloudModel from "../CloudModel";
import NightSky from "./NightSky";

// const sliderThumbStyles = props => props;
const StyledCloudDisplay = styled.section`
  grid-column: 1;
  grid-row: 1/-1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 78vh;
  position: relative;
  & img {
    width: 8vh;
    margin: 0;
    position: absolute;
    filter: grayscale(50%);
    z-index: 2;
    &#sunIcon {
      top: 4px;
      right: 0;
      z-index: 2;
    }
    &#moonIcon {
      bottom: -10vh;
      right: 0;
    }
  }
  & .cloud-model-container {
    z-index: 1;
    justify-self: center;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
  }
`;

class CloudDisplay extends Component {
  state = {
    skyVal: 25
  };
  skySliderValUpdate = input => {
    this.setState({ skyVal: input });
  };
  render() {
    const { blurVal, spreadVal } = this.props;
    return (
      <StyledCloudDisplay className="cloud-display">
        <NightSky />
        <DayLayerOverlay opacityVal={this.state.skyVal} />
        <img id="moonIcon" src={moonIcon} alt="moon" />
        <img id="sunIcon" src={sunIcon} alt="sun" />
        <SkySlider
          skySliderValUpdate={this.skySliderValUpdate}
          skyVal={this.state.skyVal}
        />
        <div className="cloud-model-container">
          <CloudModel blurVal={blurVal} spreadVal={spreadVal} />
        </div>
      </StyledCloudDisplay>
    );
  }
}
export default CloudDisplay;
