import React from "react";
import { render } from "react-dom";
import "normalize.css/normalize.css";
import MainToolComponent from "./MainToolComponent";
import PaperBG from "./PaperBG";

const App = () => {
  return (
    <div id="app-wrapper">
      <PaperBG />
      <MainToolComponent />
    </div>
  );
};
render(<App />, document.getElementById("root"));
