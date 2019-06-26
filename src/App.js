import React, { Component } from "react";
import { render } from "react-dom";
import TextureBG from "./TextureBG";
import TileFrameSVG from "./TileFrameSVG";
import CloudAppContainer from "./CloudAppContainer";
import InfoLink from "./InfoLink";

class App extends Component {
  render() {
    return (
      <div id="App">
        <TileFrameSVG />
        <TextureBG />
        <InfoLink />
        <CloudAppContainer />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
