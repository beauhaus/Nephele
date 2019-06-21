import React, { Component } from "react";
import CloudSVGFilter from "./CloudSVGFilter";
import slidersDB from "./Sliders/slidersDB.JSON";
import CloudCodeBtn from "./CloudCodeBtn";

import SlidersPanel from "./SlidersPanel";

import CloudDisplay from "./output/CloudDisplay";
import styled from "styled-components";
// import SlidersModal from "./output/SlidersModal";

const StyledAppContainer = styled.main`
  background: maroon;
  width: 84vw;
  height: 78vh;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 46vh 26vh 6vh;
  outline: 0.5px solid black;
  & #slider-toggle {
    outline: 0;
    background: transparent;
    border-width: 0;
    grid-column: 1;
    grid-row: 3;
    width: 10vw;
    min-width: 100px;
    height: 5vh;
    margin: 0 auto;
    z-index: 4;
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
  // componentDidMount() {
  //   console.log("mount");
  //   this.sliderValUpdater();
  // }
  sliderValUpdater = (attrRef, valUpdate) => {
    console.log(`FROM MAINTOOL COMP:
    attrRef: ${attrRef}
    valUpdate: ${valUpdate}
    `);
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
  btnMouseOnHandler = () => {
    // console.log("btnMouseOnHandler");
    return this.setState({ mouseOn: true });
  };
  btnMouseOffHandler = () => {
    // console.log("btnMouseOffHandler");
    return this.setState({ mouseOn: false });
  };
  btnClickHandler = () => {
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
        <CloudSVGFilter
          scaleVal={scaleVal}
          numOctavesVal={numOctavesVal}
          baseFrequencyVal={baseFrequencyVal}
          seedVal={seedVal}
        />

        <button
          id="slider-toggle"
          onClick={this.btnClickHandler}
          // onMouseEnter={this.btnMouseOnHandler}
          // onMouseLeave={this.btnMouseOffHandler}
        >
          <CloudCodeBtn sliderMode={sliderMode} />
        </button>
        {sliderMode ? (
          <SlidersPanel
            slidersArray={slidersDB.slidersArray}
            sliderValUpdater={this.sliderValUpdater}
          />
        ) : (
          ""
        )}
        <CloudDisplay blurVal={blurVal} spreadVal={spreadVal} />
        {/**
         */}
      </StyledAppContainer>
    );
  }
}
export default CloudAppContainer;

/**
   <MainToolComponent />
*/
