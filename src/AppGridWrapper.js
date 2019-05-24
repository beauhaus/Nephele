import React from "react";
import MainToolComponent from "./MainToolComponent";
import Tile from "./Tile";

const tilesArray = new Array(1700).fill(""); //2000

const AppGridWrapper = () => {
  return (
    <div id="app-grid-wrapper">
      {tilesArray.map((item, idx) => (
        <Tile
          key={idx}
          rando={Math.floor(Math.random() * 11 - 5)}
          rando2={Math.floor(Math.random() * 21) - 1}
        />
      ))}
      <MainToolComponent />
      {/*
      <TextureBG />
      <Tiles />
    */}
    </div>
  );
};
export default AppGridWrapper;
