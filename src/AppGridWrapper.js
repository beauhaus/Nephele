import React from "react";
import MainToolComponent from "./MainToolComponent";
import Tile from "./Tile";
import styled from "styled-components";

const StyledWrapper = styled.div`
  /* filter: drop-shadow(-0.4px -0.4px 1px #272626); */
`;

/* exploiting one call to Math.rand() to be used for both
 * random color choices and random orientation
 * within <Tile/>
 */
const randoArr = length => {
  console.log("rA called");
  var r = Math.random();
  const arrayOfRand = [];
  for (let i = 0; i < length; i++) {
    arrayOfRand[i] = r;
    r = r / 3;
    r = r * 1000;
    r = r - Math.floor(r);
  }
  return arrayOfRand;
};

const AppGridWrapper = () => {
  const arrayTemplate = Array.from({ length: 1700 }, () => Math.random());
  const arrayOfRand = randoArr(arrayTemplate.length);
  return (
    <StyledWrapper id="app-grid-wrapper">
      {arrayTemplate.map((item, idx) => {
        return (
          <Tile
            key={idx}
            randoDirection={Math.floor(arrayOfRand[idx] * 11 - 5)}
            randoColors={Math.floor(arrayOfRand[idx] * 21) - 1}
          />
        );
      })}
      <MainToolComponent />
    </StyledWrapper>
  );
};
export default AppGridWrapper;
