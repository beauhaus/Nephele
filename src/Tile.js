import React from "react";
import styled from "styled-components";

const tileColors = [
  "#978c84",
  "#92a39e",
  "#e0dcc9",
  "#816660",
  "rgba(192, 194, 197,1)",
  "#f1f0eb",
  "#f1f0eb",
  "transparent",
  "slategrey",
  "transparent",
  "rgba(192, 194, 197,1)",
  "rgba(245, 226, 202,1)",
  "transparent",
  "rgba(192, 194, 197,0.3)",
  "transparent",
  "transparent",
  "transparent",
  "transparent",
  "transparent",
  "transparent"
];

const uniqTile = ({ rando, rando2 }) => {
  return `
  transform: rotate(${rando}deg);
  background-color:${tileColors[rando2]};
  filter: drop-shadow(1px 1px 0.5px rgba(39, 38, 38, 0.5));
  `;
};

const StyledTile = styled.div`
  color: brown;
  opacity: 0.7;
  font-size: 1.4rem;
  font-family: sans-serif; /* temp */
  ${props => uniqTile(props)};
  mix-blend-mode: multiply;
`;

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
