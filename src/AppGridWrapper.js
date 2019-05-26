import React from "react";
import MainToolComponent from "./MainToolComponent";
import Tile from "./Tile";
import styled from "styled-components";

const StyledWrapper = styled.div`
  /* filter: drop-shadow(-0.4px -0.4px 1px #272626); */
`;
const tilesArray = new Array(1700).fill(""); //2000
// randNums 1700 ..
const rando = () => {
  return Math.random();
};
/* exploiting one call to Math.rand() to be used for both
 * random color choices and random orientation
 * within <Tile/>
 */
const randoArr = length => {
  const tilesArray = [];
  var r = rando();
  for (let i = 0; i < length; i++) {
    tilesArray[i] = r;
    r = r / 3;
    r = r * 1000;
    r = r - Math.floor(r);
  }
  return tilesArray;
};

const arrMaker = length => {
  const arr = randoArr(length);
  return arr;
};

const AppGridWrapper = () => {
  const myArr = arrMaker(1700);
  return (
    <StyledWrapper id="app-grid-wrapper">
      {tilesArray.map((item, idx) => {
        return (
          <Tile
            key={idx}
            randoDirection={Math.floor(myArr[idx] * 11 - 5)}
            randoColors={Math.floor(myArr[idx] * 21) - 1}
          />
        );
      })}
      <MainToolComponent />
    </StyledWrapper>
  );
};
export default AppGridWrapper;
