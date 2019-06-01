import React from "react";

const BlurRadiusSlider = props => {
  const { blurValUpdater, blurVal, attrRef } = props;
  const slideChangeHandler = e => {
    const { value } = e.target;
    blurValUpdater(value);
  };
  return (
    <label htmlFor={props.htmlFor} className={`${attrRef}-label slider-label`}>
      <p className="attr-reference">
        {attrRef}: {blurVal}
      </p>

      <input
        onChange={e => slideChangeHandler(e)}
        // onBlur={e => slideChangeHandler(e)}
        type="range"
        min={0}
        max={10}
        value={blurVal}
      />
    </label>
  );
};

export default BlurRadiusSlider;
