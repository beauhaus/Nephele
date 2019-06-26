import React, { Component } from "react";
import { render } from "react-dom";
import TextureBG from "./TextureBG";
import TileFrameSVG from "./TileFrameSVG";
import CloudAppContainer from "./CloudAppContainer";
import InfoLink from "./InfoLink";
import GitMark from "./GitMark";
import Zeus from "./Zeus";
class App extends Component {
  render() {
    return (
      <div id="App">
        <TileFrameSVG />
        <TextureBG />
        <InfoLink />
        <GitMark />
        <Zeus/>
        <CloudAppContainer />
        </div>
        );
      }
}
render(<App />, document.getElementById("root"));
