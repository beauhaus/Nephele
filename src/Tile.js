import React from "react";
import styled from "styled-components";

const tileColors = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "slategrey",
  "",
  "",
  "",
  "",
  "",
  "burlywood"
];

const uniqTile = ({ rando, rando2 }) => {
  return `
  transform: rotate(${rando}deg);
  background-color:${tileColors[rando2]};
    `;
};

const StyledTile = styled.div`
  color: brown;
  font-size: 1.4rem;
  font-family: sans-serif;
  mix-blend-mode: color-dodge;
  ${props => uniqTile(props)};
`;
// mix-blend-mode: color-burn;

const Tile = props => {
  return (
    <StyledTile
      className="tile-elem"
      rando={props.rando}
      rando2={props.rando2}
    />
  );
};

export default Tile;
