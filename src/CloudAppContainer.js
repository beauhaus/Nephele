import React, { Component } from "react";
import CloudSVGFilter from "./CloudSVGFilter";
import { slidersArray } from "./Sliders/slidersDB.JSON";
import CloudCodeBtn from "./CloudCodeBtn";
import SlidersPanel from "./SlidersPanel";

import CloudDisplay from "./output/CloudDisplay";
import styled from "styled-components";

const StyledAppContainer = styled.main`
  background: maroon;
  width: 84vw;
  height: 78vh;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 6vh 46vh 26vh;
  outline: 0.5px solid black;
  position: relative;
  & #slider-toggle {
    outline: 0;
    min-width: 100px;
    background: transparent;
    border-width: 0;
    position: absolute;
    width: 12vw;
    /* NOTE: change above value */
    height: 8vh;
    z-index: 4;
    bottom: -13vh;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & #preset-menu {
    grid-column: 1;
    grid-row: 1;
    z-index: 3;
    display: grid;
    grid-template-rows: 1fr;
    grid-gap: 2px;
    &:focus {
      background: red;
    }
    & button {
      font-family: "Source Sans Pro", serif;
      font-size: 1.5rem;

      background: transparent;
      border: 1px solid #bbb;
      color: #ddd;
      font-weight: 200;
      grid-row: 1;
    }
  }
`;

class CloudAppContainer extends Component {
  state = {
    blurVal: 35,
    spreadVal: 30,
    numOctavesVal: 5,
    baseFrequencyVal: 0.012,
    scaleVal: 250,
    skyVal: 50,
    seedVal: 633,
    mouseOn: false,
    sliderMode: true
  };

  sliderValUpdater = (attrRef, valUpdate) => {
    switch (attrRef) {
      case "blur-radius":
        this.setState({ blurVal: valUpdate });
        break;
      case "spread-radius":
        this.setState({ spreadVal: valUpdate });
        break;
      case "numOctaves":
        this.setState({ numOctavesVal: valUpdate });
        break;
      case "baseFrequency":
        this.setState({ baseFrequencyVal: valUpdate });
        break;
      case "scale":
        this.setState({ scaleVal: valUpdate });
        break;
      case "seed":
        this.setState({ seedVal: valUpdate });
        break;
      default:
        break;
    }
  };
  cottonBallBtnClickHandler = () => {
    return this.setState(() => ({
      blurVal: 58,
      numOctavesVal: 9,
      seedVal: 448,
      baseFrequencyVal: 0.013,
      scaleVal: 126,
      spreadVal: 39
    }));
  };

  hazyBtnClickHandler = () =>
    this.setState(() => ({
      blurVal: 100,
      numOctavesVal: 8,
      seedVal: 633,
      baseFrequencyVal: 0.01,
      scaleVal: 221,
      spreadVal: 50
    }));
  ufoBtnClickHandler = () =>
    this.setState(() => ({
      blurVal: 19,
      numOctavesVal: 2,
      seedVal: 265,
      baseFrequencyVal: 0.015,
      scaleVal: 10,
      spreadVal: 1
    }));
  catvomitClickHandler = () =>
    this.setState(() => ({
      blurVal: 65,
      numOctavesVal: 3,
      seedVal: 947,
      baseFrequencyVal: 0.029,
      scaleVal: 376,
      spreadVal: 50
    }));
  cumulusClickHandler = () =>
    this.setState(() => ({
      blurVal: 26,
      numOctavesVal: 7,
      seedVal: 992,
      baseFrequencyVal: 0.011,
      scaleVal: 192,
      spreadVal: 12
    }));
  stratusClickHandler = () =>
    this.setState(() => ({
      blurVal: 100,
      numOctavesVal: 10,
      seedVal: 135,
      baseFrequencyVal: 0.003,
      scaleVal: 459,
      spreadVal: 0
    }));
  sliderModeBtnHandler = () => {
    return this.setState(() => ({ sliderMode: !this.state.sliderMode }));
  };

  render() {
    const {
      blurVal,
      spreadVal,
      numOctavesVal,
      baseFrequencyVal,
      scaleVal,
      seedVal,
      sliderMode
    } = this.state;

    return (
      <StyledAppContainer id="cloud-app-container">
        {sliderMode ? (
          <div id="preset-menu">
            <button onClick={this.cottonBallBtnClickHandler}>
              Cotton Ball
            </button>
            <button onClick={this.hazyBtnClickHandler}>Hazy</button>
            <button onClick={this.cumulusClickHandler}>Cumulus</button>
            <button onClick={this.stratusClickHandler}>Stratus</button>
            <button onClick={this.ufoBtnClickHandler}>UFO</button>
            <button onClick={this.catvomitClickHandler}>Cat Vomit</button>
          </div>
        ) : (
          ""
        )}
        <CloudSVGFilter
          scaleVal={scaleVal}
          numOctavesVal={numOctavesVal}
          baseFrequencyVal={baseFrequencyVal}
          seedVal={seedVal}
        />

        <button id="slider-toggle" onClick={this.sliderModeBtnHandler}>
          <CloudCodeBtn sliderMode={sliderMode} />
        </button>
        {sliderMode ? (
          <SlidersPanel
            slidersArray={slidersArray}
            sliderValUpdater={this.sliderValUpdater}
            seedVal={seedVal}
            stateObj={this.state}
          />
        ) : (
          ""
        )}
        <CloudDisplay blurVal={blurVal} spreadVal={spreadVal} />
      </StyledAppContainer>
    );
  }
}
export default CloudAppContainer;
