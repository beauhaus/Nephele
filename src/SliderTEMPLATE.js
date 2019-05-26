import React, { Component } from "react";
import styled from "styled-components";
import cloudThumbIcon from "./images/cloud_thumb.svg";

const SliderWrapper = styled.section`
  font-family: "Stylish", sans-serif;
  font-size: 2rem;
  font-weight: 200;
  position: relative;
  margin-top: 0.5rem;
  z-index: 2;
  & .val-display {
    position: absolute;
    top: 0;
    right: 1vw;
    font-size: 1.8rem;
  }
  & input[type="range"] {
    margin: auto -1rem auto auto;
    -webkit-appearance: none;
    width: 94%;
    cursor: pointer;
    background: transparent;
  }
  input[type="range"]:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-width: 0px;
    height: 30px;
    width: 30px;
    /* background: #ffffff; */
    background: orangered;
    background: url(${cloudThumbIcon});

    background-size: contain;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    background-position: center top;
    cursor: pointer;
    margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.7));
  }

  input[type="range"]::-moz-range-thumb {
    border-width: 0px;
    height: 30px;
    width: 30px;
    background: url(${cloudThumbIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    cursor: pointer;
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.7));
  }
  /* All the same stuff for IE */
  input[type="range"]::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 10px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    background: url({${cloudThumbIcon}});
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.4rem;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 0.1rem;
    border: 0.2px solid #010101;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }

  input[type="range"]::-moz-range-track {
    height: 0.4rem;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 0.1rem;
    border: 0.2px solid #010101;
  }

  & .attr-reference {
    color: brown;
  }
`;
class Slider extends Component {
  state = {
    value: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ value });
    this.props.sliderValUpdate(this.props.attrReference, value);
  }
  render() {
    return (
      <SliderWrapper
        className={`slider-wrapper ${this.props.attrReference}-section`}
      >
        <label htmlFor="slider">
          <p className="attr-reference">{this.props.attrReference}</p>
          <input
            onChange={e => this.slideChangeHandler(e)}
            // onBlur={e => this.slideChangeHandler(e)}
            className="slider"
            type="range"
            min={0}
            max={10}
            value={this.state.value}
          />
        </label>
        <h2 className="val-display">{this.state.value}</h2>
      </SliderWrapper>
    );
  }
}

export default Slider;
