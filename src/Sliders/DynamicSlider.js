import React, { Component } from "react";

class DynamicSlider extends Component {
  slideChangeHandler = (e, attrRef) => {
    const { value } = e.target;
    this.props.sliderValUpdater(attrRef, value);
  };
  render() {
    const { slider, stateObj } = this.props;
    return (
      <label
        htmlFor={slider.htmlFor}
        className={`${slider.labelClassName} slider-label`}
      >
        <p className="attr-reference">
          {slider.attrRef}: {stateObj[slider.ownState]}
        </p>
        <input
          onChange={e => this.slideChangeHandler(e, slider.attrRef)}
          type="range"
          step={slider.step}
          min={slider.min}
          max={slider.max}
          value={stateObj[slider.ownState]}
        />
      </label>
    );
  }
}

export default DynamicSlider;
