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

const uniqTile = ({ randoDirection, randoColors }) => {
  return `
  transform: rotate(${randoDirection}deg);
  background-color:${tileColors[randoColors]};
  filter: drop-shadow(1px 1px 0.5px rgba(39, 38, 38, 0.5));
  `;
};

const StyledTile = styled.div`
  color: brown;
  opacity: 0.7;
  font-size: 1.4rem;
  ${props => uniqTile(props)};
  mix-blend-mode: multiply;
`;

const Tile = props => {
  return (
    <StyledTile
      className="tile-elem"
      randoDirection={props.randoDirection}
      randoColors={props.randoColors}
    />
  );
};

export default Tile;
