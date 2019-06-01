import React, { Component } from "react";

class SpreadSlider extends Component {
  slideChangeHandler(e) {
    const { value } = e.target;
    // this.props.blurSliderUpdater(this.props.attrRef, value);
    this.props.sliderValUpdater(this.props.attrRef, value);
  }
  render() {
    // console.log("p>SPRslider: ", this.props);

    return (
      <label
        htmlFor="num-octaves-slider"
        className={`${this.props.attrRef}-label slider-label`}
      >
        <p className="attr-reference">
          {this.props.attrRef}: {this.props.spreadVal}
        </p>{" "}
        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={0}
          max={10}
          value={this.props.spreadVal}
        />
      </label>
    );
  }
}

export default SpreadSlider;
