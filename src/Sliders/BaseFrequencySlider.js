import React, { Component } from "react";

class BaseFrequencySlider extends Component {
  state = {
    baseFrequencyValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    this.setState({ baseFrequencyValue: value });
    this.props.BaseFrequencySliderValUpdate(this.props.attrRef, value);
  }
  render() {
    return (
      <label
        htmlFor="base-frequency-slider"
        className={`${this.props.attrRef}-label slider-label`}
      >
        <p className="attr-reference">
          {this.props.attrRef}: {this.state.baseFrequencyValue}
        </p>
        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={0}
          max={10}
          value={this.state.baseFrequencyValue}
        />
      </label>
    );
  }
}

export default BaseFrequencySlider;
