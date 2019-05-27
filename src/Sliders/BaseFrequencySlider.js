import React, { Component } from "react";
import styled from "styled-components";

const BaseFrequencySliderWrapper = styled.section`
  opacity: 1;
`;
class BaseFrequencySlider extends Component {
  state = {
    baseFrequencyValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ baseFrequencyValue: value });
    this.props.BaseFrequencySliderValUpdate(this.props.attrReference, value);
  }
  render() {
    return (
      <BaseFrequencySliderWrapper
        className={`${this.props.attrReference}-section`}
      >
        <label htmlFor="blur-radius-slider">
          <p className="attr-reference">{this.props.attrReference}</p>
          <input
            onChange={e => this.slideChangeHandler(e)}
            // onBlur={e => this.slideChangeHandler(e)}
            type="range"
            min={0}
            max={10}
            value={this.state.baseFrequencyValue}
          />
        </label>
        <h2 className="val-display">{this.state.baseFrequencyValue}</h2>
      </BaseFrequencySliderWrapper>
    );
  }
}

export default BaseFrequencySlider;
