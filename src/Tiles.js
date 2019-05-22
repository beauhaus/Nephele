import React from "react";
// import styled from "styled-components";
import styled, { ThemeProvider } from "styled-components";

const tileColors = [
  "",
  "#e2846c",
  "teal",
  "",
  "",
  "",
  "",
  "",
  "#000",
  "#98a7a2"
];

const StyledTiles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* border: 20px solid red; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(22px, 1fr));
  grid-gap: 10px;
  opacity: 0.1;
  /* overflow: hidden; */
  & .tile-elem {
    border: 1px solid transparent;
    color: white;
    font-family: sans-serif;
    mix-blend-mode: multiply;
  }
`;

// neg & pos rand nums
const negPos = () => Math.floor(Math.random() * 30) - 21;
console.log("negPos: ", negPos);

const oriented = {
  transform: `rotate(${negPos()}deg)`
};

const genArr = new Array(2000).fill("").map((val, idx) => {
  var randy = () => Math.floor(Math.random() * 9);
  return (
    <ThemeProvider key={idx} theme={oriented}>
      <div
        className="tile-elem"
        key={idx}
        style={{ backgroundColor: tileColors[randy()] }}
      >
        {""}
      </div>
    </ThemeProvider>
  );
});

const Tiles = () => {
  return <StyledTiles id="tiles">{genArr}</StyledTiles>;
};

export default Tiles;
