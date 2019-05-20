import React, { Component } from "react";
import styled from "styled-components";

const LovelyDiv = styled.div`
  font-family: "Stylish", sans-serif;

  font-size: 2rem;
  font-weight: 200;
  h1,
  h2,
  h3 {
    color: #050505;
  }
`;

// const [todos, setTodos] = useState(todosData);
class Slider2 extends Component {
  state = { value: 0 };

  changeHandler = e => {
    const slider2val = e.target.value;
    return this.setState({ value: slider2val });
  };

  render() {
    return (
      <LovelyDiv className="slider">
        <label htmlFor="slider2">
          slider2
          <input
            onChange={this.changeHandler}
            className="slider-2"
            type="range"
            min={0}
            max={100}
            value={this.state.value}
          />
        </label>
        <h2>{this.state.value}</h2>
      </LovelyDiv>
    );
  }
}

export default Slider2;
