import React from "react";
import { render } from "react-dom";
import "normalize.css/normalize.css";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import PaperBG from "./PaperBG";

const App = () => {
  return (
    <React.StrictMode>
      <div id="app-wrapper">
        <PaperBG />
        <header>
          <h1>Nephelizer</h1>
        </header>
        <div className="center-grid">
          <div className="section" />
          <div className="section">
            <span>.</span>
          </div>
          <div className="section">
            <span>.</span>
          </div>
          <div className="section">
            <span>.</span>
          </div>
          <div className="section">
            <span>.</span>
          </div>
          <div className="section">
            <span>.</span>
          </div>
          <div className="section">
            <Slider1 />
          </div>
          <div className="section">
            <Slider2 />
          </div>
          <div className="section">
            <Slider3 />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
