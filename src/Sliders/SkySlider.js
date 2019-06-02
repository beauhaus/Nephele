import React, { Component } from "react";
import styled from "styled-components";

import arrowThumbIcon from "../images/arrow_thumb.svg";

const stylesStore = ({ input }) => {
  return `
  border: 1px solid red;
  `;
};

const StyledNightDayLabel = styled.label`
  grid-column: 6;
  grid-row: 1/8;
  position: relative;
  width: 4vw;
  &#night-day input[type="range"] {
    /* margin: auto -1rem auto auto; */
    transform-origin: 50% 50%;
    transform: translateX(50%) translateY(50%) rotate(270deg);
    position: absolute;
    right: 0;
    top: 25vh;
    -webkit-appearance: none;
    width: 50vh;
    cursor: pointer;
    background: transparent;
  }
  &#night-day input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* border-width: 0px; */
    height: 50px;
    width: 50px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${arrowThumbIcon});
    cursor: pointer;
    /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    margin-top: 0;
    margin-left: 0;
    /*this transform may need a relook after repositioning it's parent*/
    transform: translateX(70%) translateY(20%) rotate(90deg);
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.7));
  }
  &#night-day input[type="range"]::-moz-range-thumb {
    border-width: 0px;
    height: 50px;
    width: 50px;
    background: url(${arrowThumbIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    /* border: 1px solid red; */
    transform: rotate(90deg);
    cursor: pointer;
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.7));
  }
  & input[type="range"]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  ${props => stylesStore(props)};
`;
class SkySlider extends Component {
  state = {
    nightDayValue: 5
  };

  slideChangeHandler(e) {
    // console.log("e.tgt", e.target);
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ nightDayValue: value });
    this.props.skySliderValUpdate(this.props.attrRef, value);
  }
  render() {
    return (
      <StyledNightDayLabel
        id="night-day"
        htmlFor="night-day-slider"
        className={`${this.props.attrRef}-label slider-label`}
      >
        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={1}
          max={100}
          value={this.state.nightDayValue}
        />
      </StyledNightDayLabel>
    );
  }
}

export default SkySlider;

/* REFERENCE for dynamic styles into styled-components */
/*

const tileColors=["red", "green", "blue"];

const stylesStore(input)({ randoDirection, randoColors }) => {
  return `
  transform: rotate(${randoDirection}deg);
  background-color:${tileColors[randoColors]};
  `;
};

const StyledTile = styled.div`
height: ---;
weight: ---;
  ${props => stylesStore(props)};
`;


------

<StyledTile
      className="tile-elem"
      randoDirection={props.randoDirection}
      randoColors={props.randoColors}
    />

    */
