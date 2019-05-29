import React, { Component } from "react";

class ScaleSlider extends Component {
  state = {
    scaleValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ scaleValue: value });
    this.props.ScaleSliderValUpdate(this.props.attrReference, value);
  }
  render() {
    return (
      <label
        htmlFor="num-octaves-slider"
        className={`${this.props.attrReference}-label slider-label`}
      >
        <p className="attr-reference">
          {this.props.attrReference}: {this.state.scaleValue}
        </p>
        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={0}
          max={10}
          value={this.state.scaleValue}
        />
      </label>
    );
  }
}

export default ScaleSlider;
