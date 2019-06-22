import React, { Component } from "react";
import { render } from "react-dom";
import TextureBG from "./TextureBG";
import TileFrameSVG from "./TileFrameSVG";
import CloudAppContainer from "./CloudAppContainer";

class App extends Component {
  render() {
    return (
      <div id="App">
        <TileFrameSVG />
        <TextureBG />
        <CloudAppContainer />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
