import React from "react";
import { render } from "react-dom";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        {/*
         */}
        <header>
          <h1>Header</h1>
        </header>
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));

/*
        <svg width="100%" preserveAspectRatio="none">
          <filter id="roughpaper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              result="noise"
              numOctaves="5"
            />
            <feDiffuseLighting
              in="noise"
              lightingColor="white"
              surfaceScale="2"
            >
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              filter="url(#roughpaper)"
              fill="none"
            />
          </filter>
        </svg>

*/
