import React, { Component } from "react";

class DynamicSlider extends Component {
  state = {
    updatingVal: ""
  };
  slideChangeHandler = (e, attrRef) => {
    const { value } = e.target;
    this.setState({ updatingVal: value });
    this.props.sliderValUpdater(attrRef, value);
  };
  render() {
    const { slider } = this.props;
    return (
      <label
        htmlFor={slider.htmlFor}
        className={`${slider.labelClassName} slider-label`}
      >
        <p className="attr-reference">
          {slider.attrRef}: {this.state.updatingVal || slider.max / 2}
        </p>
        <input
          onChange={e => this.slideChangeHandler(e, slider.attrRef)}
          // onBlur={e => slideChangeHandler(e)}
          type="range"
          min={slider.min}
          max={slider.max}
          value={this.state.updatingVal}
        />
      </label>
    );
  }
}

export default DynamicSlider;
