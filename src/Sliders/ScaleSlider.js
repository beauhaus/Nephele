import React, { Component } from "react";
import styled from "styled-components";

const ScaleSliderWrapper = styled.section`
  & .attr-reference {
    color: brown;
  }
`;
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
      <ScaleSliderWrapper className={`${this.props.attrReference}-section`}>
        <label htmlFor="num-octaves-slider">
          <p className="attr-reference">{this.props.attrReference}</p>
          <input
            onChange={e => this.slideChangeHandler(e)}
            // onBlur={e => this.slideChangeHandler(e)}
            type="range"
            min={0}
            max={10}
            value={this.state.scaleValue}
          />
        </label>
        <h2 className="val-display">{this.state.scaleValue}</h2>
      </ScaleSliderWrapper>
    );
  }
}

export default ScaleSlider;
