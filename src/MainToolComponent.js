import React, { Component } from "react";
import styled from "styled-components";
import SliderContainer from "./Sliders/SliderContainer";

// import CloudDisplay from "./CloudDisplay";
import OuterFrame from "./OuterFrame";
// import zeusCoding from "./images/zeuscoding.svg";

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
  }
  & .slider-container {
    grid-area: 1/1/8/5;
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
  state = {
    blurRadiusVal: 5
  };
  sliderValUpdate(attrRef, value) {
    console.log("attrRef: ", attrRef);
    console.log("value: ", value);
  }
  render() {
    return (
      <StyledToolComp className="main-display">
        <OuterFrame />
        <SliderContainer blurRadVal={this.state.blurRadiusVal} />
        <section className="cloud-display">TOP RIGHT</section>
        <section className="css-code-display">CSS code display</section>
        <section className="svg-code-display">SVG code display</section>
        {/**
        <div className="cloud-display">CloudDisplay</div>
        <div>CodeDisplay</div>
        <div>bottom Left</div>
          <header>
            <h1 id="title">Nephele</h1>
          </header>
        <CloudDisplay />
        
        <div className="code-display">
        
        <img id="zeus" src={zeusCoding} alt="Zeus coding a cloud" />
        </div>
      */}
      </StyledToolComp>
    );
  }
}
export default MainToolComponent;
