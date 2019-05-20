import React from "react";
import { render } from "react-dom";
import "normalize.css/normalize.css";
import Slider from "./Slider";
import PaperBG from "./PaperBG";

const App = () => {
  return (
    <div id="app-wrapper">
      <PaperBG />

      <div className="center-grid">
        <header className="section">
          <h1>Nephele</h1>
        </header>
        <aside className="section aside-left">
          <i>.</i>
        </aside>
        <div className="section cloud-display">
          <img src="http://placebear.com/300/200" alt="bear" />
        </div>
        <aside className="section aside-right">
          <i>.</i>{" "}
        </aside>
        <div className="section opacity-section">
          <Slider attrReference="opacity" />
        </div>
        <div className="section border-color-section">
          <Slider attrReference="border-color" />
        </div>
        <div className="section blur-section">
          <Slider attrReference="blur" />
        </div>
      </div>
    </div>
  );
};
render(<App />, document.getElementById("root"));
