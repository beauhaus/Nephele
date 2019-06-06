import React, { Component } from "react";
import styled from "styled-components";
import SlidersContainer from "./Sliders/SlidersContainer";

import CloudSVGFilter from "./CloudSVGFilter";
import CloudDisplay from "./CloudDisplay";
import OuterFrame from "./OuterFrame";
// import zeusCoding from "./images/zeuscoding.svg";
import slidersDB from "./Sliders/slidersDB.JSON";

const StyledToolComp = styled.main`
  grid-area: 7 / 7/-7/-7;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  /* grid-gap: 10px; */
  position: relative;
  padding: 1% 0.8%;
  & section {
    font-family: sans-serif;
    /* background: green; */
  }
  & .sliders-container {
    grid-area: 1/1/8/5;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 1fr);
    /* border: 1px solid white; */
  }
  & .cloud-display {
    grid-area: 1/5/8/-1;
  }
  & .css-code-display {
    grid-area: 8/1/-1/5;
  }
  & .svg-code-display {
    grid-area: 8/5/-1/-1;
  }
`;

class MainToolComponent extends Component {
  //default vals for sliders
  state = {
    blurVal: 50,
    spreadVal: 50,
    numOctavesVal: 5,
    baseFrequencyVal: 500,
    scaleVal: 170,
    skyVal: 50
  };
  componentDidMount() {
    // const testSlider = slidersDB;
    // console.log("componentDidMount: ", testSlider);
  }

  sliderValUpdater = (attrRef, valUpdate) => {
    // console.log(`FROM MAINTOOL COMP:
    // attrRef: ${attrRef}
    // valUpdate: ${valUpdate}
    // `);
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
      default:
        break;
    }
  };

  render() {
    const {
      blurVal,
      spreadVal,
      numOctavesVal,
      baseFrequencyVal,
      scaleVal
    } = this.state;
    return (
      <StyledToolComp className="main-display">
        <OuterFrame />
        <SlidersContainer
          slidersArray={slidersDB.slidersArray}
          sliderValUpdater={this.sliderValUpdater}
        />
        <CloudSVGFilter
          scaleVal={scaleVal}
          numOctavesVal={numOctavesVal}
          baseFrequencyVal={baseFrequencyVal}
        />
        <CloudDisplay />

        <section className="css-code-display">CSS code display</section>
        <section className="svg-code-display">SVG code display</section>
      </StyledToolComp>
    );
  }
}
export default MainToolComponent;
