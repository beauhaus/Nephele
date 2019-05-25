import React from "react";
import { render } from "react-dom";
import AppGridWrapper from "./AppGridWrapper";
import TextureBG from "./TextureBG";

const App = () => {
  return (
    <div id="App">
      <TextureBG />
      <AppGridWrapper />
    </div>
  );
};
render(<App />, document.getElementById("root"));
