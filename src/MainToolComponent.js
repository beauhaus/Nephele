import React, { Component } from "react";
import styled from "styled-components";
import SlidersContainer from "./Sliders/SlidersContainer";

import CloudDisplay from "./CloudDisplay";
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
        <SlidersContainer />
        <CloudDisplay />

        <section className="css-code-display">CSS code display</section>
        <section className="svg-code-display">SVG code display</section>
        {/**
        <div>CodeDisplay</div>
        <div>bottom Left</div>
          <header>
            <h1 id="title">Nephele</h1>
          </header>
        
        <div className="code-display">
        
        <img id="zeus" src={zeusCoding} alt="Zeus coding a cloud" />
        </div>
      */}
      </StyledToolComp>
    );
  }
}
export default MainToolComponent;
