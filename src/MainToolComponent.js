import React, { Component } from "react";
import styled from "styled-components";
import SlidersContainer from "./Sliders/SlidersContainer";

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
    blurVal: 5,
    spreadVal: 5,
    numOctavesVal: 5,
    scaleVal: 5,
    nightDayVal: 50
  };
  componentDidMount() {
    // const testSlider = slidersDB;
    // console.log("componentDidMount: ", testSlider);
  }

  sliderValUpdater = (whichState, valUpdate) => {
    switch (whichState) {
      case "blur-val":
        this.setState({ blurVal: valUpdate });
        console.log(valUpdate);
        break;
      default:
        break;
    }
  };

  render() {
    const { blurVal, spreadVal, numOctavesVal, scaleVal } = this.state;

    return (
      <StyledToolComp className="main-display">
        <OuterFrame />
        <SlidersContainer
          slidersArray={slidersDB.slidersArray}
          sliderValUpdater={this.sliderValUpdater}
          // sliderStateVal={}
        />

        {/**
          <SlidersContainer
          blurVal={blurVal}
          spreadVal={spreadVal}
          numOctavesVal={numOctavesVal}
          scaleVal={scaleVal}
          blurValUpdater={this.blurValUpdater}
          spreadValUpdater={this.spreadValUpdater}
          slidersDB={slidersDB}
          />
        */}
        <CloudDisplay />

        <section className="css-code-display">CSS code display</section>
        <section className="svg-code-display">SVG code display</section>
      </StyledToolComp>
    );
  }
}
export default MainToolComponent;
