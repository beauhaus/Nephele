import React, { Component } from "react";
import styled from "styled-components";

const SpreadSliderWrapper = styled.section`
  & .attr-reference {
    color: brown;
  }
`;
class SpreadSlider extends Component {
  state = {
    spreadValue: 5
  };

  slideChangeHandler(e) {
    const { value } = e.target;
    // console.log("val: ", value);
    // console.log("props: ", this.props);
    this.setState({ spreadValue: value });
    this.props.SpreadSliderValUpdate(this.props.attrReference, value);
  }
  render() {
    return (
      <SpreadSliderWrapper className={`${this.props.attrReference}-section`}>
        <label htmlFor="num-octaves-slider">
          <p className="attr-reference">{this.props.attrReference}</p>
          <input
            onChange={e => this.slideChangeHandler(e)}
            // onBlur={e => this.slideChangeHandler(e)}
            type="range"
            min={0}
            max={10}
            value={this.state.spreadValue}
          />
        </label>
        <h2 className="val-display">{this.state.spreadValue}</h2>
      </SpreadSliderWrapper>
    );
  }
}

export default SpreadSlider;
