import React from "react";
import MainToolComponent from "./MainToolComponent";
import Tile from "./Tile";
import styled from "styled-components";

const StyledWrapper = styled.div`
  /* filter: drop-shadow(-0.4px -0.4px 1px #272626); */
`;

/*
 * https://stackoverflow.com/a/43044960
 * Math.rand() to be used for both
 * random color choices and random orientation
 * within <Tile/>
 */

const AppGridWrapper = () => {
  const bigArr = ((length = 1700) => {
    const tilesArray = [];
    var r = Math.random();
    for (let i = 0; i < length; i++) {
      tilesArray[i] = r;
      r = r / 0.03;
      r = r - Math.floor(r);
    }
    return tilesArray;
  })();
  return (
    <StyledWrapper id="app-grid-wrapper">
      {bigArr.map((item, idx, arr) => {
        let arrIdx = arr[idx];
        let arrIdx2 = arrIdx * 100 - Math.floor(arrIdx * 100);
        return (
          <Tile
            key={idx}
            randoDirection={Math.floor(arrIdx * 11 - 5)}
            randoColors={Math.floor(arrIdx2 * 21) - 1}
          />
        );
      })}
      <MainToolComponent />
    </StyledWrapper>
  );
};
export default AppGridWrapper;
