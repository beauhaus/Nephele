import React, { Component } from "react";

class NightDaySlider extends Component {
  state = {
    nightDayValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ nightDayValue: value });
    this.props.nightDaySliderValUpdate(this.props.attrReference, value);
  }
  render() {
    return (
      <label
        htmlFor="num-octaves-slider"
        className={`${this.props.attrReference}-label slider-label`}
      >
        <p>
          <span role="img" aria-label="img">
            🌜
          </span>
          ----------------------
          <span role="img" aria-label="img">
            ☀️
          </span>
        </p>
        <input
          onChange={e => this.slideChangeHandler(e)}
          // onBlur={e => this.slideChangeHandler(e)}
          type="range"
          min={0}
          max={10}
          value={this.state.nightDayValue}
        />
      </label>
    );
  }
}

export default NightDaySlider;
