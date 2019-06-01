import React from "react";

const DataSlider = props => {
  const { sliderValUpdater, attrRef, min, max, value, labelClassName } = props;
  console.log("sliderValUpdater", props.sliderValUpdater);
  const slideChangeHandler = e => {
    const { value } = e.target;
    sliderValUpdater("input1!", "input2");
  };
  return (
    <label htmlFor={props.htmlFor} className={`${labelClassName} slider-label`}>
      <p className="attr-reference">
        {attrRef}: {value}
      </p>

      <input
        onChange={e => slideChangeHandler(e)}
        // onBlur={e => slideChangeHandler(e)}
        type="range"
        min={min}
        max={max}
        value={value}
      />
    </label>
  );
};

export default DataSlider;
