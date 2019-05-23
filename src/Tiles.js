import React from "react";
import styled from "styled-components";
import Tile from "./Tile";

const StyledTilesWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(14px, 1fr));
  grid-gap: 4px;
  opacity: 0.3;
`;

const genArr = new Array(4000).fill(""); //2000

const Tiles = () => {
  return (
    <StyledTilesWrap id="tiles">
      {genArr.map((item, idx) => (
        <Tile
          key={idx}
          rando={Math.floor(Math.random() * 11 - 5)}
          rando2={Math.floor(Math.random() * 21) - 1}
        />
      ))}
    </StyledTilesWrap>
  );
};

export default Tiles;
