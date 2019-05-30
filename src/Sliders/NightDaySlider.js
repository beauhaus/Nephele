import React, { Component } from "react";
import styled from "styled-components";

import arrowThumbIcon from "../images/arrow_thumb.svg";
// import cloud from "../images/cloud_thumb.svg";

const StyledNightDayLabel = styled.label`
  grid-column: 6;
  grid-row: 1/8;
  position: relative;
  width: 4vw;
  /* border: 1px solid yellowgreen; */
  &#night-day input[type="range"] {
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
    border-width: 0px;
    height: 30px;
    width: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-position: center top;
    background: url(${arrowThumbIcon});
    cursor: pointer;
    margin-top: 0rem; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
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
`;
class NightDaySlider extends Component {
  state = {
    nightDayValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ nightDayValue: value });
    this.props.nightDaySliderValUpdate(this.props.attrReference, value);
  }
  render() {
    return (
      <StyledNightDayLabel
        id="night-day"
        htmlFor="night-day-slider"
        className={`${this.props.attrReference}-label slider-label`}
      >
        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={0}
          max={10}
          value={this.state.nightDayValue}
        />
      </StyledNightDayLabel>
    );
  }
}

export default NightDaySlider;
