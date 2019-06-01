import React, { Component } from "react";

class NumOctavesSlider extends Component {
  state = {
    numOctavesValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ numOctavesValue: value });
    this.props.NumOctavesSliderValUpdate(this.props.attrRef, value);
  }
  render() {
    return (
      <label
        htmlFor="num-octaves-slider"
        className={`${this.props.attrRef}-label slider-label`}
      >
        <p className="attr-reference">
          {this.props.attrRef}: {this.state.numOctavesValue}
        </p>
        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={0}
          max={10}
          value={this.state.numOctavesValue}
        />
      </label>
    );
  }
}

export default NumOctavesSlider;
