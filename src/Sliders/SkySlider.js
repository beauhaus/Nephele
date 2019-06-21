import React, { Component } from "react";
import styled from "styled-components";

import arrowThumbIcon from "../images/arrow_thumb.svg";

const StyledSkyLabel = styled.label`
  width: 4vw;
  height: 78vh;
  z-index: 2;
  &#sky input[type="range"] {
    transform-origin: 50% 50%;
    transform: translateX(50%) translateY(70%) rotate(270deg);
    position: absolute;
    right: 0;
    top: 35.5vh;
    -webkit-appearance: none;
    width: 75vh;
    cursor: pointer;
    background: transparent;
    filter: grayscale(40%);
  }
  &#sky input[type="range"]::-webkit-slider-thumb {
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
  &#sky input[type="range"]::-moz-range-thumb {
    border-width: 0px;
    height: 60px;
    width: 60px;
    background: url(${arrowThumbIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    transform: rotate(90deg);
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.7));
    cursor: pointer;
  }
  & input[type="range"]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
`;
/* ${props => stylesStore(props)}; */
class SkySlider extends Component {
  state = {
    skyValue: 25,
    updatingVal: ""
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    this.setState({ updatingVal: value });
    this.props.skySliderValUpdate(value);
  }

  render() {
    return (
      <StyledSkyLabel
        id="sky"
        htmlFor="sky-slider"
        className={"sky-label slider-label"}
      >
        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={1}
          max={50}
          value={this.props.skyVal || 25}
        />
      </StyledSkyLabel>
    );
  }
}

export default SkySlider;
