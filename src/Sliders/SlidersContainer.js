import React from "react";
import styled from "styled-components";
import cloudThumbIcon from "../images/cloud_thumb.svg";
import lightningIcon from "../images/lightning.svg";
import DynamicSlider from "./DynamicSlider";

const StyledSlidersWrapper = styled.section`
  font-size: 2rem;
  font-weight: lighter; /* TODO: is this used? */
  position: relative;
  z-index: 2;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  & :nth-child(3),
  & :nth-child(4),
  & :nth-child(5) {
    margin-top: -8vh;
  }
  & .lightning-container {
    grid-row-end: 4;
    grid-row-start: 3;
    margin: 0;
    height: 3vh;
  }
  #lightning {
    /* justify-self: center; */
    /* width: 8vw; */
    height: 100%;
    -webkit-filter: drop-shadow(1px 1px 0.5px #fff);
    filter: drop-shadow(1px 1px 0.5px #fff);
  }
  .numOctaves-label {
    /* margin: -6vh 0 0 0; */
  }

  & input[type="range"] {
    /* margin: auto -1rem auto auto; */
    margin: auto;
    -webkit-appearance: none;
    width: 96%;
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
    /* background-attachment: fixed; */
    background-position: center top;
    cursor: pointer;
    margin-top: -1.8rem; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
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
    height: 0.4rem;
    cursor: pointer;
    box-shadow: inset 1px 1px 1px #000000, inset 0px 0px 1px #0d0d0d;
    background: #acacac;
    border-radius: 0.1rem;
    border: 0.2px solid #010101;
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }

  input[type="range"]::-moz-range-track {
    height: 0.4rem;
    cursor: pointer;
    box-shadow: inset 1px 1px 1px #000000, inset 0px 0px 1px #0d0d0d;
    background: #acacac;
    border-radius: 0.1rem;
    border: 0.2px solid #010101;
  }

  & .attr-reference {
    font-family: "IM Fell Double Pica", serif;
    color: black;
    margin-left: 1vw;
    text-align: left;
    text-shadow: 1px 1px 1px #e2e0dd;
  }
`;

const SlidersContaner = props => {
  const { sliderValUpdater, slidersArray } = props;
  return (
    <StyledSlidersWrapper className="sliders-container">
      {slidersArray.map(slider => (
        <DynamicSlider
          key={slider.name}
          slider={slider}
          sliderValUpdater={sliderValUpdater}
        />
      ))}
      <div className="lightning-container">
        <img id="lightning" src={lightningIcon} alt="lightning Icon" />
      </div>
    </StyledSlidersWrapper>
  );
};

export default SlidersContaner;
