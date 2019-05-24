import React from "react";
import styled from "styled-components";

const tileColors = [
  "rgba(192, 194, 197,0.4)",
  "rgba(245, 226, 202,0.9)",
  "rgba(192, 194, 197,0.3)",
  "rgba(245, 226, 202,0.4)",
  "rgba(192, 194, 197,0.7)",
  "rgba(245, 226, 202,0.3)",
  "rgba(192, 194, 197,0.2)",
  "rgba(245, 226, 202,0.3)",
  "rgba(192, 194, 197,0.1)",
  "rgba(245, 226, 202,0.5)",
  "rgba(192, 194, 197,0.5)",
  "rgba(245, 226, 202,0.3)",
  "",
  "rgba(192, 194, 197,0.3)",
  "",
  "",
  "",
  "",
  "",
  ""
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
  ${props => uniqTile(props)};
  mix-blend-mode: color-dodge;
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
