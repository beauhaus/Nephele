import React, { Component } from "react";
import styled from "styled-components";

const BlurRadiusSliderWrapper = styled.section`
  opacity: 1;
`;
class BlurRadiusSlider extends Component {
  state = {
    blurRadiusValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ blurRadiusValue: value });
    this.props.BlurRadiusSliderValUpdate(this.props.attrReference, value);
  }
  render() {
    return (
      <BlurRadiusSliderWrapper
        className={`blur-radius-slider-wrapper ${
          this.props.attrReference
        }-section`}
      >
        <label htmlFor="blur-radius-slider">
          <p className="attr-reference">{this.props.attrReference}</p>
          <input
            onChange={e => this.slideChangeHandler(e)}
            // onBlur={e => this.slideChangeHandler(e)}
            className="BlurRadiusSlider"
            type="range"
            min={0}
            max={10}
            value={this.state.blurRadiusValue}
          />
        </label>
        <h2 className="val-display">{this.state.blurRadiusValue}</h2>
      </BlurRadiusSliderWrapper>
    );
  }
}

export default BlurRadiusSlider;
