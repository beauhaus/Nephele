import React from "react";
import MainToolComponent from "./MainToolComponent";
import Tile from "./Tile";
import styled from "styled-components";

const StyledWrapper = styled.div`
  /* filter: drop-shadow(-0.4px -0.4px 1px #272626); */
`;
const tilesArray = new Array(1700).fill(""); //2000
// randNums 1700 ..

const AppGridWrapper = () => {
  return (
    <StyledWrapper id="app-grid-wrapper">
      {tilesArray.map((item, idx) => (
        <Tile
          key={idx}
          rando={Math.floor(Math.random() * 11 - 5)}
          rando2={Math.floor(Math.random() * 21) - 1}
        />
      ))}
      <MainToolComponent />
      {/*
            orientRand = {randNums[idx]}
      <Tiles />
    */}
    </StyledWrapper>
  );
};
export default AppGridWrapper;
