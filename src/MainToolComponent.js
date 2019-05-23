import React from "react";
import Slider from "./Slider";
import DisplayWrapper from "./DisplayWrapper";
import OuterFrame from "./OuterFrame";
import zeusCoding from "./images/zeuscoding.svg";

const MainToolComponent = () => {
  return (
    <div className="center-grid">
      <OuterFrame />

      <header className="section">
        <h1 id="title">Nephele</h1>
      </header>
      <aside className="section aside-left">
        <Slider attrReference="box-shadow: <blur-radius>" />

        <Slider attrReference="numOctaves" min="0" max="10" />
        <Slider attrReference="baseFrequency" />
        <Slider attrReference="feDisplacementMap scale" />
      </aside>
      <DisplayWrapper />

      <div className="code-display">
        <h1 className="annotation">
          <i>(Code Display)</i>
        </h1>
        <img id="zeus" src={zeusCoding} alt="Zeus coding a cloud" />
      </div>
    </div>
  );
};

export default MainToolComponent;
