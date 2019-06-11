import React, { Component } from "react";
import styled from "styled-components";
import SkySlider from "./Sliders/SkySlider";
import moonIcon from "./images/moonIcon.svg";
import sunIcon from "./images/sunIcon.svg";
import DayLayerOverlay from "./DayLayerOverlay";
import CloudModel from "./CloudModel";

// const sliderThumbStyles = props => props;
const StyledCloudDisplay = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  position: relative;
  justify-items: end;
  background: linear-gradient(165deg, #090909 0%, #527785 100%);
  box-shadow: inset 2px 2px 15px 4px rgba(0, 0, 0, 0.5);
  /* z-index: 1; */

  & .cloud-model-container {
    /* border: 20px solid brown; */
    z-index: 1;
    justify-self: center;
    width: 100%;
    grid-column: 1/-1;
    grid-row: 1 / end;
    overflow: hidden;
    & #cloud-model {
      /* border: 2px solid brown; */
      z-index: 1;
      width: 70%;
      height: 50%;
      background: transparent;
    }
  }
  & img {
    width: 3vw;
    margin: 0.5vw;
    z-index: 1;
    &#sunIcon {
      grid-column: 6;
      grid-row: 1;
    }
    &#moonIcon {
      grid-column: 6;
      grid-row: 7;
      margin-bottom: 0.5vw;
    }
  }
`;

class CloudDisplay extends Component {
  state = {
    skyVal: 25
  };
  skySliderValUpdate = input => {
    this.setState({ skyVal: input });
    // console.log("updated!", input);
  };
  render() {
    const { blurVal, spreadVal } = this.props;
    return (
      <StyledCloudDisplay className="cloud-display">
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
// <img src="http://placebear.com/800/000" alt="bear" />;
