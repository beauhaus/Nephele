import React from "react";
import { render } from "react-dom";
import AppGridWrapper from "./AppGridWrapper";
import TextureBG from "./TextureBG";
// <TextureBG />
const App = () => {
  return (
    <div id="App">
      <AppGridWrapper />
    </div>
  );
};
render(<App />, document.getElementById("root"));
