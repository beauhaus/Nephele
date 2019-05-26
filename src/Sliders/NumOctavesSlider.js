import React, { Component } from "react";
import styled from "styled-components";

const NumOctavesSliderWrapper = styled.section`
  & .attr-reference {
    color: brown;
  }
`;
class NumOctavesSlider extends Component {
  state = {
    numOctavesValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ numOctavesValue: value });
    this.props.NumOctavesSliderValUpdate(this.props.attrReference, value);
  }
  render() {
    return (
      <NumOctavesSliderWrapper
        className={`num-octaves-slider-wrapper ${
          this.props.attrReference
        }-section`}
      >
        <label htmlFor="num-octaves-slider">
          <p className="attr-reference">{this.props.attrReference}</p>
          <input
            onChange={e => this.slideChangeHandler(e)}
            // onBlur={e => this.slideChangeHandler(e)}
            className="NumOctavesSlider"
            type="range"
            min={0}
            max={10}
            value={this.state.numOctavesValue}
          />
        </label>
        <h2 className="val-display">{this.state.numOctavesValue}</h2>
      </NumOctavesSliderWrapper>
    );
  }
}

export default NumOctavesSlider;
