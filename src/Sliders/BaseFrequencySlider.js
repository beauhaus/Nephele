import React, { Component } from "react";

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
      <label
        htmlFor="base-frequency-slider"
        className={`${this.props.attrReference}-label slider-label`}
      >
        <p className="attr-reference">
          {this.props.attrReference}: {this.state.baseFrequencyValue}
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
