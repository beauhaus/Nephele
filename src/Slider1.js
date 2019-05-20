import React, { Component } from "react";
// import render from "react-dom";
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
class Slider1 extends Component {
  state = { value: 0 };

  changeHandler = e => {
    const slider1val = e.target.value;
    return this.setState({ value: slider1val });
  };

  render() {
    return (
      <LovelyDiv className="slider">
        <label htmlFor="slider1">
          slider1
          <input
            onChange={e => this.changeHandler(e.target.value)}
            onBlur={e => this.changeHandler(e.target.value)}
            className="slider-1"
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

export default Slider1;

//   <input
//     onChange={e => updateLocation(e.target.value)}
//     onBlur={e => updateLocation(e.target.value)}
//     id="location"
//     type="text"
//     placeholder="Location"
//     value={location}
//   />
// </label>;
