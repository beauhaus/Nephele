import React, { Component } from "react";

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
      <label
        htmlFor="blur-radius-slider"
        className={`${this.props.attrReference}-label slider-label`}
      >
        <p className="attr-reference">
          {this.props.attrReference}: {this.state.blurRadiusValue}
        </p>

        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={0}
          max={10}
          value={this.state.blurRadiusValue}
        />
      </label>
    );
  }
}

export default BlurRadiusSlider;
