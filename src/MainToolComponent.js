import React from "react";
import styled from "styled-components";
// import Slider from "./Slider";
// import CloudDisplay from "./CloudDisplay";
import OuterFrame from "./OuterFrame";
// import zeusCoding from "./images/zeuscoding.svg";

const StyledToolComp = styled.main`
  grid-area: 7 / 7/-7/-7;
  display: grid;
  grid-template-columns: auto;
  /* grid-template-rows: 10vh 1fr 20vh 10vh; */
  grid-template-rows: auto;
  grid-gap: 10px;
  /* position: relative; */

  border: 1px solid fuchsia;
`;

const MainToolComponent = () => {
  return (
    <StyledToolComp className="main-display">
      <OuterFrame />
      {/**
      <header>
      <h1 id="title">Nephele</h1>
      </header>
      <aside className="aside-left">
      <Slider attrReference="box-shadow: <blur-radius>" />
      <Slider attrReference="numOctaves" min="0" max="10" />
      <Slider attrReference="baseFrequency" />
      <Slider attrReference="feDisplacementMap scale" />
      </aside>
      <CloudDisplay />
      
      <div className="code-display">
      <h1 className="annotation">
      <i>(Code Display)</i>
      </h1>
      <img id="zeus" src={zeusCoding} alt="Zeus coding a cloud" />
      </div>
    */}
    </StyledToolComp>
  );
};

export default MainToolComponent;
