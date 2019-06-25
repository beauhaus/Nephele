import React from "react";
import styled from "styled-components";
import cloudThumbIcon from "../images/cloud_thumb.svg";
import DynamicSlider from "./DynamicSlider";
// import SeedSlider from "./SeedSlider";

const StyledSlidersWrapper = styled.section`
  /* font-size: 2rem; */
  font-size: 2rem;
  position: relative;
  z-index: 2;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 7vh);

  & .attr-reference {
    font-family: "Source Sans Pro", serif;
    font-weight: 300;
    letter-spacing: 0.1rem;
    color: #eee;
    text-align: left;
    text-shadow: 1px 1px 1px #1d334e;
    margin: 0vh 2vw 0 2vw;
  }
  & :nth-child(2),
  & :nth-child(4),
  & :nth-child(6) {
    & .attr-reference {
      text-align: right;
    }
  }
  & label {
    width: 100%;
  }
  & input[type="range"] {
    margin: auto;
    -webkit-appearance: none;
    width: 90%;
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
    background: url(${cloudThumbIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    cursor: pointer;
    margin-top: -1.8rem; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.7));
  }

  input[type="range"]::-moz-range-thumb {
    border-width: 0px;
    outline-width: 0;
    height: 30px;
    width: 30px;
    background: url(${cloudThumbIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    cursor: pointer;
    filter: drop-shadow(1px 1px #1d334e);
  }
  /* All the same stuff for IE */
  input[type="range"]::-ms-thumb {
    box-shadow: inset 1px 1px 1px #000000, inset 0px 0px 1px #0d0d0d;
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
    height: 0.1rem;
    cursor: pointer;
    box-shadow: inset 1px 1px 1px #fff;
    background: #fff;
    border-radius: 0.1rem;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: red;
    height: 1px;
  }
  input[type="range"]::-moz-range-track {
    height: 0.1rem;
    cursor: pointer;
    box-shadow: inset 1px 1px 1px #1d334e;
    background: #fff;
    border-radius: 0.1rem;
  }
  /* If the screen size is 601px wide or more, set the font-size of <div> to 80px */
  @media screen and (min-width: 601px) {
    & .attr-reference {
      font-size: 2rem;
    }
  }
  /* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
  @media screen and (max-width: 600px) {
    & .attr-reference {
      font-size: 1.4rem;
    }
  }
`;

const SlidersContaner = props => {
  const { sliderValUpdater, slidersArray, stateObj } = props;
  return (
    <StyledSlidersWrapper className="sliders-container">
      {slidersArray.map(slider => (
        <DynamicSlider
          key={slider.name}
          slider={slider}
          sliderValUpdater={sliderValUpdater}
          stateObj={stateObj}
        />
      ))}
    </StyledSlidersWrapper>
  );
};
// <SeedSlider sliderValUpdater={sliderValUpdater} seedVal={seedVal} />

export default SlidersContaner;
