import React from "react";

// possibly to be used should I wish to display vals in thumb
// otherwise use svg image through css rule
const CloudThumb = () => {
  return (
    <svg width="100" height="100" preserveAspectRatio="none">
      <g stroke="#000" strokeWidth="2.9114">
        <path
          fill="#FFF"
          d="M97.5 74.7c0 8.1-6.5 14.6-14.4 14.6H21.9c-10.8 0-19.5-8.8-19.5-19.7 0-9.9 7.2-18 16.5-19.5-1-3-1.6-6.3-1.6-9.7 0-16.4 13.2-29.8 29.4-29.8 15.4 0 28.1 12 29.3 27.2 9.3 1.5 16.4 9.6 16.4 19.4 0 1.9-.3 3.8-.8 5.6 3.7 2.9 5.9 7.1 5.9 11.9z"
        />
        <path
          fill="none"
          strokeLinecap="round"
          d="M83.2 40.5c-10.2-5.3-22.6-1.3-27.8 9"
        />
      </g>
    </svg>
  );
};

export default CloudThumb;
