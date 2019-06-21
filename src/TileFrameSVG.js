import React from "react";
import styled from "styled-components";

// meander is the term for 'snake-like' frame pattern
const StyledTileFrameSVG = styled.svg`
  position: absolute;
  width: 98vw;
  height: 98vh;
  margin: auto;
  opacity: 1;

  --meander-color: #6f7883;
  --trim-color: #41220b;
  --frame-white: #deddd8;
  & #top_3_ {
    /* display: none; */
  }
  & .meander {
    fill: var(--meander-color);
    /* background-color: var(--main-bg-color); */
  }
  & .trim {
    fill: var(--trim-color);
  }
  & .frame-white {
    /* fill: $frame-white; */
    fill: var(--frame-white);
    & :nth-child(3) {
      fill: #cac8c2;
    }
    & :nth-child(9) {
      fill: #dddcd7;
    }
    & :nth-child(15) {
      fill: #e0e1da;
    }
    & :nth-child(22) {
      fill: #e3e0dc;
    }
    & :nth-child(29) {
      fill: #dddcd8;
    }
    & :nth-child(37) {
      fill: #e0e0d9;
    }
    & :nth-child(41) {
      fill: #c0c0c0;
    }
  }
  & text {
    /* fill: var(--trim-color); */
    fill: url(#txt-grad);
    font-family: "Spectral SC", "Times New Roman", Times, serif;
    font-size: 7rem;
    letter-spacing: 4rem;
    font-weight: 800;
    /* stroke: #000;
    stroke-width: 1; */
    mix-blend-mode: color-burn; /*√*/
  }
  & #txt-shad {
    stroke: #b2cceb;
    stroke-width: 1;
    fill: transparent;
    /* display: none; */
    text-shadow: 1px 1px 2px #b2cceb;
  }
`;

const TileFrameSVG = () => {
  return (
    <StyledTileFrameSVG
      className="tile-frame"
      preserveAspectRatio="none"
      viewBox="0 0 1365 900"
    >
      <defs>
        <linearGradient
          id="txt-grad"
          x1="120%"
          x2="0"
          y1="2%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" offset="-20%" />
          <stop stopColor="#1d334e" offset="50%" />
        </linearGradient>
      </defs>
      <g id="topSide">
        <g id="top_1_">
          <g className="trim">
            <path
              d="M172.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 1.5074 29.5749)"
            />
            <path d="M82 1h10v10H82zM92 1h10v10H92zM102 1h10v10h-10z" />
            <path
              d="M112.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 .7898 -9.0303)"
            />
            <path d="M132 1h10v10h-10z" />
            <path
              d="M142.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 .8783 -11.333)"
            />
            <path d="M152 1h10v10h-10zM162 1h10v10h-10zM122 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M82 11h10v10H82z" />
            <path d="M92 11h10v10H92z" />
            <path d="M102 11h10v10h-10z" />
            <path d="M112 11h10v10h-10z" />
            <path d="M122 11h10v10h-10z" />
            <path d="M142 11h10v10h-10z" />
            <path d="M152 10h10v10h-10z" />
            <path d="M162 11h10v10h-10z" />
            <path d="M172 11h10v10h-10z" />
            <path d="M131 11h10v10h-10z" />
            <path
              d="M92.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 2.2658 -7.4358)"
            />
            <path d="M92 31h10v10H92z" />
            <path d="M112 31h10v10h-10z" />
            <path d="M122 31h10v10h-10z" />
            <path d="M142 31h10v10h-10z" />
            <path d="M152 31h10v10h-10z" />
            <path d="M162 31h10v10h-10z" />
            <path d="M172 31h10v10h-10z" />
            <path d="M132 31h10v10h-10z" />
            <path d="M172 41h10v10h-10z" />
            <path d="M92 41h10v10H92z" />
            <path d="M92 51h10v10H92z" />
            <path d="M102 51h10v10h-10z" />
            <path
              d="M112.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 3.8821 -7.5587)"
            />
            <path d="M122 51h10v10h-10z" />
            <path d="M142 51h10v10h-10z" />
            <path d="M152 51h10v10h-10z" />
            <path d="M172 51h10v10h-10z" />
            <path d="M132 51h10v10h-10z" />
            <path d="M172 61h10v10h-10z" />
            <path d="M82 71h10v10H82z" />
            <path d="M92 71h10v10H92z" />
            <path d="M102 71h10v10h-10z" />
            <path d="M112 71h10v10h-10z" />
            <path d="M122 71h10v10h-10z" />
            <path d="M142 71h10v10h-10z" />
            <path d="M152 71h10v10h-10z" />
            <path
              d="M162.9 70.8h10v10h-10z"
              transform="rotate(9.46 167.82356018 75.76291539)"
            />
            <path d="M172 71h10v10h-10z" />
            <path d="M132 71h11v10h-11z" />
          </g>
          <g className="meander">
            <path d="M172 21h10v10h-10zM82 21h10v10H82zM101 21h10v10h-10zM112 21h10v10h-10zM132 21h10v10h-10zM142 21h10v10h-10z" />
            <path
              d="M152.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 1.6239 -8.2573)"
            />
            <path d="M162 21h10v10h-10z" />
            <path
              d="M122.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 1.8809 -8.2636)"
            />
            <path d="M82 31h10v10H82z" />
            <path d="M102 31h10v10h-10z" />
            <path d="M82 41h10v10H82zM102 41h10v10h-10zM112 41h10v10h-10z" />
            <path
              d="M132.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 3.3485 -9.0679)"
            />
            <path d="M142 41h10v10h-10zM152 41h10v10h-10zM163 41h10v10h-10zM122 41h10v10h-10z" />
            <path
              d="M82.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 4.5391 -6.5801)"
            />
            <path d="M162 51h10v10h-10zM82 61h10v10H82z" />
            <path
              d="M92.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -4.7592 7.7069)"
            />
            <path
              d="M102.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 4.6122 -7.0284)"
            />
            <path d="M112 61h10v10h-10z" />
            <path
              d="M132.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -5.2964 12.7468)"
            />
            <path d="M142 61h10v10h-10zM152 61h10v10h-10z" />
            <path
              d="M162.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 4.8111 -11.0155)"
            />
            <path d="M122 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_2_">
          <g className="trim">
            <path
              d="M272.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 2.8919 46.1573)"
            />
            <path d="M182 1h10v10h-10zM192 1h10v10h-10zM202 1h10v10h-10z" />
            <path
              d="M212.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 1.0848 -16.7059)"
            />
            <path d="M232 1h10v10h-10z" />
            <path
              d="M242.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 1.1733 -19.0086)"
            />
            <path d="M252 1h10v10h-10zM262 1h10v10h-10zM222 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M182 11h10v10h-10z" />
            <path d="M192 11h10v10h-10z" />
            <path d="M202 11h10v10h-10z" />
            <path d="M212 11h10v10h-10z" />
            <path d="M222 11h10v10h-10z" />
            <path d="M242 11h10v10h-10z" />
            <path d="M252 10h10v10h-10z" />
            <path d="M262 11h10v10h-10z" />
            <path d="M272 11h10v10h-10z" />
            <path d="M231 11h10v10h-10z" />
            <path
              d="M192.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 2.5608 -15.1111)"
            />
            <path d="M192 31h10v10h-10z" />
            <path d="M212 31h10v10h-10z" />
            <path d="M222 31h10v10h-10z" />
            <path d="M242 31h10v10h-10z" />
            <path d="M252 31h10v10h-10z" />
            <path d="M262 31h10v10h-10z" />
            <path d="M272 31h10v10h-10z" />
            <path d="M232 31h10v10h-10z" />
            <path d="M272 41h10v10h-10z" />
            <path d="M192 41h10v10h-10z" />
            <path d="M192 51h10v10h-10z" />
            <path d="M202 51h10v10h-10z" />
            <path
              d="M212.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 4.0944 -14.0719)"
            />
            <path d="M222 51h10v10h-10z" />
            <path d="M242 51h10v10h-10z" />
            <path d="M252 51h10v10h-10z" />
            <path d="M272 51h10v10h-10z" />
            <path d="M232 51h10v10h-10z" />
            <path d="M272 61h10v10h-10z" />
            <path d="M182 71h10v10h-10z" />
            <path d="M192 71h10v10h-10z" />
            <path d="M202 71h10v10h-10z" />
            <path d="M212 71h10v10h-10z" />
            <path d="M222 71h10v10h-10z" />
            <path d="M242 71h10v10h-10z" />
            <path d="M252 71h10v10h-10z" />
            <path
              d="M262.9 70.8h10v10h-10z"
              transform="rotate(9.46 267.80206906 75.7750265)"
            />
            <path d="M272 71h10v10h-10z" />
            <path d="M232 71h11v10h-11z" />
          </g>

          <g className="meander">
            <path d="M272 21h10v10h-10zM182 21h10v10h-10zM201 21h10v10h-10zM212 21h10v10h-10zM232 21h10v10h-10zM242 21h10v10h-10z" />
            <path
              d="M252.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 1.7621 -13.5111)"
            />
            <path d="M262 21h10v10h-10z" />
            <path
              d="M222.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 2.0926 -14.7671)"
            />
            <path d="M182 31h10v10h-10z" />
            <path d="M202 31h10v10h-10z" />
            <path d="M182 41h10v10h-10zM202 41h10v10h-10zM212 41h10v10h-10z" />
            <path
              d="M232.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 3.5699 -15.7185)"
            />
            <path d="M242 41h10v10h-10zM252 41h10v10h-10zM263 41h10v10h-10zM222 41h10v10h-10z" />
            <path
              d="M182.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 4.8342 -14.2557)"
            />
            <path d="M262 51h10v10h-10zM182 61h10v10h-10z" />
            <path
              d="M192.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -4.4641 15.3832)"
            />
            <path
              d="M202.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 4.8336 -13.679)"
            />
            <path d="M212 61h10v10h-10z" />
            <path
              d="M232.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -4.8858 21.7995)"
            />
            <path d="M242 61h10v10h-10zM252 61h10v10h-10z" fill="transparent" />
            <path
              d="M262.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.0324 -17.6655)"
            />
            <path d="M222 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_4_">
          <g className="trim">
            <path
              d="M372.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 4.2764 62.7397)"
            />
            <path d="M282 1h10v10h-10zM292 1h10v10h-10zM302 1h10v10h-10z" />
            <path
              d="M312.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 1.3799 -24.3815)"
            />
            <path d="M332 1h10v10h-10z" />
            <path
              d="M342.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 1.4684 -26.6842)"
            />
            <path d="M352 1h10v10h-10zM362 1h10v10h-10zM322 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M282 11h10v10h-10z" />
            <path d="M292 11h10v10h-10z" />
            <path d="M302 11h10v10h-10z" />
            <path d="M312 11h10v10h-10z" />
            <path d="M322 11h10v10h-10z" fill="transparent" />
            <path d="M342 11h10v10h-10z" />
            <path d="M352 10h10v10h-10z" />
            <path d="M362 11h10v10h-10z" />
            <path d="M372 11h10v10h-10z" />
            <path d="M331 11h10v10h-10z" />
            <path
              d="M292.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 2.8558 -22.7863)"
            />
            <path d="M292 31h10v10h-10z" />
            <path d="M312 31h10v10h-10z" />
            <path d="M322 31h10v10h-10z" />
            <path d="M342 31h10v10h-10z" />
            <path d="M352 31h10v10h-10z" />
            <path d="M362 31h10v10h-10z" />
            <path d="M372 31h10v10h-10z" />
            <path d="M332 31h10v10h-10z" />
            <path d="M372 41h10v10h-10z" fill="transparent" />
            <path d="M292 41h10v10h-10z" />
            <path d="M292 51h10v10h-10z" />
            <path d="M302 51h10v10h-10z" />
            <path
              d="M312.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 4.3067 -20.5851)"
            />
            <path d="M322 51h10v10h-10z" />
            <path d="M342 51h10v10h-10z" />
            <path d="M352 51h10v10h-10z" fill="transparent" />
            <path d="M372 51h10v10h-10z" />
            <path d="M332 51h10v10h-10z" />
            <path d="M372 61h10v10h-10z" />
            <path d="M282 71h10v10h-10z" />
            <path d="M292 71h10v10h-10z" />
            <path d="M302 71h10v10h-10z" />
            <path d="M312 71h10v10h-10z" fill="transparent" />
            <path d="M322 71h10v10h-10z" />
            <path d="M342 71h10v10h-10z" />
            <path d="M352 71h10v10h-10z" />
            <path
              d="M362.9 70.8h10v10h-10z"
              transform="rotate(9.46 367.77997417 75.78718755)"
            />
            <path d="M372 71h10v10h-10z" />
            <path d="M332 71h11v10h-11z" />
          </g>
          <g className="meander">
            <path d="M372 21h10v10h-10zM282 21h10v10h-10zM301 21h10v10h-10zM312 21h10v10h-10zM332 21h10v10h-10zM342 21h10v10h-10z" />
            <path
              d="M352.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 1.9002 -18.7649)"
            />
            <path d="M362 21h10v10h-10z" />
            <path
              d="M322.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 2.3044 -21.2705)"
            />
            <path d="M282 31h10v10h-10z" />
            <path d="M302 31h10v10h-10z" />
            <path d="M282 41h10v10h-10zM302 41h10v10h-10zM312 41h10v10h-10z" />
            <path
              d="M332.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 3.7913 -22.3691)"
            />
            <path d="M342 41h10v10h-10zM352 41h10v10h-10zM363 41h10v10h-10zM322 41h10v10h-10z" />
            <path
              d="M282.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 5.1292 -21.9313)"
            />
            <path d="M362 51h10v10h-10zM282 61h10v10h-10z" />
            <path
              d="M292.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -4.1691 23.0596)"
            />
            <path
              d="M302.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.055 -20.3296)"
            />
            <path d="M312 61h10v10h-10z" />
            <path
              d="M332.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -4.4752 30.8522)"
            />
            <path d="M342 61h10v10h-10zM352 61h10v10h-10z" />
            <path
              d="M362.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.2538 -24.3154)"
            />
            <path d="M322 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_3_">
          <g className="trim">
            <path
              d="M472.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 5.6609 79.3221)"
            />
            <path d="M382 1h10v10h-10zM392 1h10v10h-10zM402 1h10v10h-10z" />
            <path
              d="M412.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 1.6749 -32.0571)"
            />
            <path d="M432 1h10v10h-10z" />
            <path
              d="M442.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 1.7634 -34.3598)"
            />
            <path d="M452 1h10v10h-10zM462 1h10v10h-10zM422 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M472 21h10v10h-10zM382 21h10v10h-10zM401 21h10v10h-10zM412 21h10v10h-10zM432 21h10v10h-10zM442 21h10v10h-10z" />
            <path
              d="M452.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 2.0383 -24.0188)"
            />
            <path d="M462 21h10v10h-10z" />
            <path
              d="M422.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 2.5161 -27.774)"
            />
            <path d="M382 31h10v10h-10z" />
            <path d="M402 31h10v10h-10z" />
            <path d="M382 41h10v10h-10zM402 41h10v10h-10zM412 41h10v10h-10z" />
            <path
              d="M432.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 4.0127 -29.0197)"
            />
            <path d="M442 41h10v10h-10zM452 41h10v10h-10zM463 41h10v10h-10zM422 41h10v10h-10z" />
            <path
              d="M382.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 5.4242 -29.607)"
            />
            <path d="M462 51h10v10h-10zM382 61h10v10h-10z" />
            <path
              d="M392.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -3.874 30.736)"
            />
            <path
              d="M402.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.2764 -26.9802)"
            />
            <path d="M412 61h10v10h-10z" />
            <path
              d="M432.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -4.0646 39.9049)"
            />
            <path d="M442 61h10v10h-10zM452 61h10v10h-10z" />
            <path
              d="M462.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.4751 -30.9654)"
            />
            <path d="M422 61h10v10h-10z" />
            <path d="M382 11h10v10h-10z" />
            <path d="M392 11h10v10h-10z" />
            <path d="M402 11h10v10h-10z" />
            <path d="M412 11h10v10h-10z" />
            <path d="M422 11h10v10h-10z" fill="transparent" />
            <path d="M442 11h10v10h-10z" />
            <path d="M452 10h10v10h-10z" />
            <path d="M462 11h10v10h-10z" />
            <path d="M472 11h10v10h-10z" />
            <path d="M431 11h10v10h-10z" />
            <path
              d="M392.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 3.1508 -30.4616)"
            />
            <path d="M392 31h10v10h-10z" />
            <path d="M412 31h10v10h-10z" fill="transparent" />
            <path d="M422 31h10v10h-10z" />
            <path d="M442 31h10v10h-10z" />
            <path d="M452 31h10v10h-10z" />
            <path d="M462 31h10v10h-10z" />
            <path d="M472 31h10v10h-10z" fill="transparent" />
            <path d="M432 31h10v10h-10z" />
            <path d="M472 41h10v10h-10z" />
            <path d="M392 41h10v10h-10z" />
            <path d="M392 51h10v10h-10z" />
            <path d="M402 51h10v10h-10z" />
            <path
              d="M412.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 4.5191 -27.0983)"
            />
            <path d="M422 51h10v10h-10z" fill="transparent" />
            <path d="M442 51h10v10h-10z" />
            <path d="M452 51h10v10h-10z" />
            <path d="M472 51h10v10h-10z" />
            <path d="M432 51h10v10h-10z" />
            <path d="M472 61h10v10h-10z" />
            <path d="M382 71h10v10h-10z" />
            <path d="M392 71h10v10h-10z" />
            <path d="M402 71h10v10h-10z" />
            <path d="M412 71h10v10h-10z" fill="transparent" />
            <path d="M422 71h10v10h-10z" />
            <path d="M442 71h10v10h-10z" />
            <path d="M452 71h10v10h-10z" />
            <path
              d="M462.9 70.8h10v10h-10z"
              transform="rotate(9.46 467.75782936 75.7987448)"
            />
            <path d="M472 71h10v10h-10z" />
            <path d="M432 71h11v10h-11z" />
          </g>
        </g>
        <g id="top_8_">
          <g className="trim">
            <path
              d="M572.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 7.0453 95.9045)"
            />
            <path d="M482 1h10v10h-10zM492 1h10v10h-10zM502 1h10v10h-10z" />
            <path
              d="M512.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 1.9698 -39.7328)"
            />
            <path d="M532 1h10v10h-10z" />
            <path
              d="M542.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 2.0583 -42.0355)"
            />
            <path d="M552 1h10v10h-10zM562 1h10v10h-10zM522 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M482 11h10v10h-10z" />
            <path d="M492 11h10v10h-10z" />
            <path d="M502 11h10v10h-10z" />
            <path d="M512 11h10v10h-10z" />
            <path d="M522 11h10v10h-10z" />
            <path d="M542 11h10v10h-10z" />
            <path d="M552 10h10v10h-10z" />
            <path d="M562 11h10v10h-10z" fill="transparent" />
            <path d="M572 11h10v10h-10z" />
            <path d="M531 11h10v10h-10z" />
            <path
              d="M492.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 3.4457 -38.1368)"
            />
            <path d="M492 31h10v10h-10z" />
            <path d="M512 31h10v10h-10z" />
            <path d="M522 31h10v10h-10z" />
            <path d="M542 31h10v10h-10z" />
            <path d="M552 31h10v10h-10z" fill="transparent" />
            <path d="M562 31h10v10h-10z" />
            <path d="M572 31h10v10h-10z" />
            <path d="M532 31h10v10h-10z" />
            <path d="M572 41h10v10h-10z" />
            <path d="M492 41h10v10h-10z" />
            <path d="M492 51h10v10h-10z" />
            <path d="M502 51h10v10h-10z" />
            <path
              d="M512.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 4.7314 -33.6115)"
            />
            <path d="M522 51h10v10h-10z" />
            <path d="M542 51h10v10h-10z" />
            <path d="M552 51h10v10h-10z" />
            <path d="M572 51h10v10h-10z" />
            <path d="M532 51h10v10h-10z" />
            <path d="M572 61h10v10h-10z" />
            <path d="M482 71h10v10h-10z" />
            <path d="M492 71h10v10h-10z" fill="transparent" />
            <path d="M502 71h10v10h-10z" fill="transparent" />
            <path d="M512 71h10v10h-10z" />
            <path d="M522 71h10v10h-10z" />
            <path d="M542 71h10v10h-10z" />
            <path d="M552 71h10v10h-10z" fill="transparent" />
            <path
              d="M562.9 70.8h10v10h-10z"
              transform="rotate(9.46 567.73633824 75.81085593)"
            />
            <path d="M572 71h10v10h-10z" />
            <path d="M532 71h11v10h-11z" />
          </g>
          <g className="frame-white">
            <path d="M572 21h10v10h-10zM482 21h10v10h-10zM501 21h10v10h-10zM512 21h10v10h-10zM532 21h10v10h-10zM542 21h10v10h-10z" />
            <path
              d="M552.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 2.1763 -29.2726)"
            />
            <path d="M562 21h10v10h-10z" />
            <path
              d="M522.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 2.7277 -34.2775)"
            />
            <path d="M482 31h10v10h-10z" />
            <path d="M502 31h10v10h-10z" />
            <path d="M482 41h10v10h-10zM502 41h10v10h-10zM512 41h10v10h-10z" />
            <path
              d="M532.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 4.2341 -35.6703)"
            />
            <path d="M542 41h10v10h-10zM552 41h10v10h-10zM563 41h10v10h-10zM522 41h10v10h-10z" />
            <path
              d="M482.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 5.7192 -37.2826)"
            />
            <path d="M562 51h10v10h-10zM482 61h10v10h-10z" />
            <path
              d="M492.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -3.5789 38.4124)"
            />
            <path
              d="M502.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.4978 -33.6308)"
            />
            <path d="M512 61h10v10h-10z" />
            <path
              d="M532.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -3.654 48.9576)"
            />
            <path d="M542 61h10v10h-10zM552 61h10v10h-10z" />
            <path
              d="M562.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.6965 -37.6153)"
            />
            <path d="M522 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_7_">
          <g className="trim">
            <path
              d="M672.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 8.4298 112.4869)"
            />
            <path d="M582 1h10v10h-10zM592 1h10v10h-10zM602 1h10v10h-10z" />
            <path
              d="M612.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 2.2649 -47.4084)"
            />
            <path d="M632 1h10v10h-10z" />
            <path
              d="M642.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 2.3534 -49.7111)"
            />
            <path d="M652 1h10v10h-10zM662 1h10v10h-10zM622 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M582 11h10v10h-10z" />
            <path d="M592 11h10v10h-10z" />
            <path d="M602 11h10v10h-10z" />
            <path d="M612 11h10v10h-10z" />
            <path d="M622 11h10v10h-10z" />
            <path d="M642 11h10v10h-10z" />
            <path d="M652 10h10v10h-10z" />
            <path d="M662 11h10v10h-10z" />
            <path d="M672 11h10v10h-10z" fill="transparent" />
            <path d="M631 11h10v10h-10z" fill="transparent" />
            <path
              d="M592.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 3.7407 -45.8121)"
            />
            <path d="M592 31h10v10h-10z" />
            <path d="M612 31h10v10h-10z" />
            <path d="M622 31h10v10h-10z" />
            <path d="M642 31h10v10h-10z" />
            <path d="M652 31h10v10h-10z" />
            <path d="M662 31h10v10h-10z" />
            <path d="M672 31h10v10h-10z" />
            <path d="M632 31h10v10h-10z" fill="transparent" />
            <path d="M672 41h10v10h-10z" />
            <path d="M592 41h10v10h-10z" />
            <path d="M592 51h10v10h-10z" />
            <path d="M602 51h10v10h-10z" />
            <path
              d="M612.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 4.9437 -40.1247)"
            />
            <path d="M622 51h10v10h-10z" />
            <path d="M642 51h10v10h-10z" />
            <path d="M652 51h10v10h-10z" />
            <path d="M672 51h10v10h-10z" />
            <path d="M632 51h10v10h-10z" fill="transparent" />
            <path d="M672 61h10v10h-10z" fill="transparent" />
            <path d="M582 71h10v10h-10z" />
            <path d="M592 71h10v10h-10z" />
            <path d="M602 71h10v10h-10z" />
            <path d="M612 71h10v10h-10z" />
            <path d="M622 71h10v10h-10z" />
            <path d="M642 71h10v10h-10z" />
            <path d="M652 71h10v10h-10z" />
            <path
              d="M662.9 70.8h10v10h-10z"
              transform="rotate(9.46 667.71424335 75.82301696)"
            />
            <path d="M672 71h10v10h-10z" />
            <path d="M632 71h11v10h-11z" />
          </g>
          <g className="frame-white">
            <path d="M672 21h10v10h-10zM582 21h10v10h-10zM601 21h10v10h-10zM612 21h10v10h-10zM632 21h10v10h-10zM642 21h10v10h-10z" />
            <path
              d="M652.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 2.3145 -34.5264)"
            />
            <path d="M662 21h10v10h-10z" />
            <path
              d="M622.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 2.9394 -40.781)"
            />
            <path d="M582 31h10v10h-10z" />
            <path d="M602 31h10v10h-10z" />
            <path d="M582 41h10v10h-10zM602 41h10v10h-10zM612 41h10v10h-10z" />
            <path
              d="M632.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 4.4555 -42.3209)"
            />
            <path d="M642 41h10v10h-10zM652 41h10v10h-10zM663 41h10v10h-10zM622 41h10v10h-10z" />
            <path
              d="M582.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 6.0142 -44.9582)"
            />
            <path d="M662 51h10v10h-10zM582 61h10v10h-10z" />
            <path
              d="M592.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -3.2839 46.0887)"
            />
            <path
              d="M602.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.7192 -40.2814)"
            />
            <path d="M612 61h10v10h-10z" />
            <path
              d="M632.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -3.2434 58.0103)"
            />
            <path d="M642 61h10v10h-10zM652 61h10v10h-10z" />
            <path
              d="M662.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.9178 -44.2653)"
            />
            <path d="M622 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_6_">
          <g className="trim">
            <path
              d="M772.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 9.8143 129.0694)"
            />
            <path d="M682 1h10v10h-10zM692 1h10v10h-10zM702 1h10v10h-10z" />
            <path
              d="M712.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 2.5599 -55.084)"
            />
            <path d="M732 1h10v10h-10z" />
            <path
              d="M742.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 2.6484 -57.3867)"
            />
            <path d="M752 1h10v10h-10zM762 1h10v10h-10zM722 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M682 11h10v10h-10z" />
            <path d="M692 11h10v10h-10z" />
            <path d="M702 11h10v10h-10z" />
            <path d="M712 11h10v10h-10z" />
            <path d="M722 11h10v10h-10z" />
            <path d="M742 11h10v10h-10z" />
            <path d="M752 10h10v10h-10z" />
            <path d="M762 11h10v10h-10z" />
            <path d="M772 11h10v10h-10z" fill="transparent" />
            <path d="M731 11h10v10h-10z" fill="transparent" />
            <path
              d="M692.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 4.0357 -53.4873)"
            />
            <path d="M692 31h10v10h-10z" />
            <path d="M712 31h10v10h-10z" />
            <path d="M722 31h10v10h-10z" />
            <path d="M742 31h10v10h-10z" />
            <path d="M752 31h10v10h-10z" />
            <path d="M762 31h10v10h-10z" />
            <path d="M772 31h10v10h-10z" />
            <path d="M732 31h10v10h-10z" />
            <path d="M772 41h10v10h-10z" fill="transparent" />
            <path d="M692 41h10v10h-10z" />
            <path d="M692 51h10v10h-10z" />
            <path d="M702 51h10v10h-10z" />
            <path
              d="M712.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 5.1561 -46.6379)"
            />
            <path d="M722 51h10v10h-10z" />
            <path d="M742 51h10v10h-10z" />
            <path d="M752 51h10v10h-10z" />
            <path d="M772 51h10v10h-10z" fill="transparent" />
            <path d="M732 51h10v10h-10z" />
            <path d="M772 61h10v10h-10z" />
            <path d="M682 71h10v10h-10z" />
            <path d="M692 71h10v10h-10z" />
            <path d="M702 71h10v10h-10z" />
            <path d="M712 71h10v10h-10z" />
            <path d="M722 71h10v10h-10z" />
            <path d="M742 71h10v10h-10z" />
            <path d="M752 71h10v10h-10z" />
            <path
              d="M762.9 70.8h10v10h-10z"
              transform="rotate(9.46 767.69214845 75.835178)"
            />
            <path d="M772 71h10v10h-10z" />
            <path d="M732 71h11v10h-11z" />
          </g>
          <g className="frame-white">
            <path d="M772 21h10v10h-10zM682 21h10v10h-10zM701 21h10v10h-10zM712 21h10v10h-10zM732 21h10v10h-10zM742 21h10v10h-10z" />
            <path
              d="M752.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 2.4526 -39.7803)"
            />
            <path d="M762 21h10v10h-10z" />
            <path
              d="M722.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 3.1511 -47.2844)"
            />
            <path d="M682 31h10v10h-10z" />
            <path d="M702 31h10v10h-10z" />
            <path d="M682 41h10v10h-10zM702 41h10v10h-10zM712 41h10v10h-10z" />
            <path
              d="M732.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 4.6769 -48.9715)"
            />
            <path d="M742 41h10v10h-10zM752 41h10v10h-10zM763 41h10v10h-10zM722 41h10v10h-10z" />
            <path
              d="M682.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 6.3092 -52.6338)"
            />
            <path d="M762 51h10v10h-10zM682 61h10v10h-10z" />
            <path
              d="M692.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -2.9888 53.7651)"
            />
            <path
              d="M702.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.9406 -46.9321)"
            />
            <path d="M712 61h10v10h-10z" />
            <path
              d="M732.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -2.8328 67.063)"
            />
            <path d="M742 61h10v10h-10zM752 61h10v10h-10z" />
            <path
              d="M762.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 6.1392 -50.9153)"
            />
            <path d="M722 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_14_">
          <g className="trim">
            <path
              d="M873.9.8h10v10h-10z"
              transform="rotate(-9.543 878.99919828 5.74658239)"
            />
            <path d="M783 1h10v10h-10zM793 1h10v10h-10zM803 1h10v10h-10z" />
            <path
              d="M813.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 2.8578 -62.8364)"
            />
            <path d="M833 1h10v10h-10z" />
            <path
              d="M843.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 2.9464 -65.1391)"
            />
            <path d="M853 1h10v10h-10zM863 1h10v10h-10zM823 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M783 11h10v10h-10z" />
            <path d="M793 11h10v10h-10z" />
            <path d="M803 11h10v10h-10z" fill="transparent" />
            <path d="M813 11h10v10h-10z" />
            <path d="M823 11h10v10h-10z" />
            <path d="M843 11h10v10h-10z" />
            <path d="M853 10h10v10h-10z" />
            <path d="M863 11h10v10h-10z" />
            <path d="M873 11h10v10h-10z" />
            <path d="M832 11h10v10h-10z" />
            <path
              d="M793.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 4.3336 -61.2393)"
            />
            <path d="M793 31h10v10h-10z" />
            <path d="M813 31h10v10h-10z" />
            <path d="M823 31h10v10h-10z" />
            <path d="M843 31h10v10h-10z" />
            <path d="M853 31h10v10h-10z" />
            <path d="M863 31h10v10h-10z" />
            <path d="M873 31h10v10h-10z" />
            <path d="M833 31h10v10h-10z" fill="transparent" />
            <path d="M873 41h10v10h-10z" fill="transparent" />
            <path d="M793 41h10v10h-10z" />
            <path d="M793 51h10v10h-10z" />
            <path d="M803 51h10v10h-10z" />
            <path
              d="M813.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 5.3705 -53.2162)"
            />
            <path d="M823 51h10v10h-10z" />
            <path d="M843 51h10v10h-10z" />
            <path d="M853 51h10v10h-10z" />
            <path d="M873 51h10v10h-10z" />
            <path d="M833 51h10v10h-10z" />
            <path d="M873 61h10v10h-10z" />
            <path d="M783 71h10v10h-10z" />
            <path d="M793 71h10v10h-10z" />
            <path d="M803 71h10v10h-10z" />
            <path d="M813 71h10v10h-10z" />
            <path d="M823 71h10v10h-10z" />
            <path d="M843 71h10v10h-10z" fill="transparent" />
            <path d="M853 71h10v10h-10z" />
            <path
              d="M863.9 70.8h10v10h-10z"
              transform="rotate(9.46 868.67000364 75.84673526)"
            />
            <path d="M873 71h10v10h-10z" />
            <path d="M833 71h11v10h-11z" />
          </g>
          <g className="frame-white">
            <path d="M873 21h10v10h-10zM783 21h10v10h-10zM802 21h10v10h-10zM813 21h10v10h-10zM833 21h10v10h-10zM843 21h10v10h-10z" />
            <path
              d="M853.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 2.592 -45.0866)"
            />
            <path d="M863 21h10v10h-10z" />
            <path
              d="M823.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 3.3649 -53.8529)"
            />
            <path d="M783 31h10v10h-10z" />
            <path d="M803 31h10v10h-10z" />
            <path d="M783 41h10v10h-10zM803 41h10v10h-10zM813 41h10v10h-10z" />
            <path
              d="M833.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 4.9005 -55.6886)"
            />
            <path d="M843 41h10v10h-10zM853 41h10v10h-10zM864 41h10v10h-10zM823 41h10v10h-10z" />
            <path
              d="M783.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 6.6072 -60.3862)"
            />
            <path d="M863 51h10v10h-10zM783 61h10v10h-10z" />
            <path
              d="M793.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -2.6908 61.5182)"
            />
            <path
              d="M803.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 6.1642 -53.6492)"
            />
            <path d="M813 61h10v10h-10z" />
            <path
              d="M833.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -2.4181 76.2062)"
            />
            <path d="M843 61h10v10h-10zM853 61h10v10h-10z" />
            <path
              d="M863.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 6.3628 -57.6317)"
            />
            <path d="M823 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_13_">
          <g className="trim">
            <path
              d="M973.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 12.597 162.4)"
            />
            <path d="M883 1h10v10h-10zM893 1h10v10h-10zM903 1h10v10h-10z" />
            <path
              d="M913.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 3.1529 -70.512)"
            />
            <path d="M933 1h10v10h-10z" />
            <path
              d="M943.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 3.2414 -72.8147)"
            />
            <path d="M953 1h10v10h-10zM963 1h10v10h-10zM923 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M883 11h10v10h-10z" />
            <path d="M893 11h10v10h-10z" fill="transparent" />
            <path d="M903 11h10v10h-10z" />
            <path d="M913 11h10v10h-10z" />
            <path d="M923 11h10v10h-10z" />
            <path d="M943 11h10v10h-10z" />
            <path d="M953 10h10v10h-10z" />
            <path d="M963 11h10v10h-10z" />
            <path d="M973 11h10v10h-10z" />
            <path d="M932 11h10v10h-10z" />
            <path
              d="M893.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 4.6286 -68.9146)"
            />
            <path d="M893 31h10v10h-10z" />
            <path d="M913 31h10v10h-10z" />
            <path d="M923 31h10v10h-10z" />
            <path d="M943 31h10v10h-10z" />
            <path d="M953 31h10v10h-10z" />
            <path d="M963 31h10v10h-10z" />
            <path d="M973 31h10v10h-10z" />
            <path d="M933 31h10v10h-10z" />
            <path d="M973 41h10v10h-10z" />
            <path d="M893 41h10v10h-10z" fill="transparent" />
            <path d="M893 51h10v10h-10z" />
            <path d="M903 51h10v10h-10z" />
            <path
              d="M913.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 5.5829 -59.7294)"
            />
            <path d="M923 51h10v10h-10z" />
            <path d="M943 51h10v10h-10z" />
            <path d="M953 51h10v10h-10z" />
            <path d="M973 51h10v10h-10z" />
            <path d="M933 51h10v10h-10z" />
            <path d="M973 61h10v10h-10z" />
            <path d="M883 71h10v10h-10z" />
            <path d="M893 71h10v10h-10z" />
            <path d="M903 71h10v10h-10z" />
            <path d="M913 71h10v10h-10z" />
            <path d="M923 71h10v10h-10z" fill="transparent" />
            <path d="M943 71h10v10h-10z" fill="transparent" />
            <path d="M953 71h10v10h-10z" />
            <path
              d="M963.9 70.8h10v10h-10z"
              transform="rotate(9.46 968.64851253 75.85884638)"
            />
            <path d="M973 71h10v10h-10z" />
            <path d="M933 71h11v10h-11z" />
          </g>
          <g className="frame-white">
            <path d="M973 21h10v10h-10zM883 21h10v10h-10zM902 21h10v10h-10zM913 21h10v10h-10zM933 21h10v10h-10zM943 21h10v10h-10z" />
            <path
              d="M953.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 2.7302 -50.3405)"
            />
            <path d="M963 21h10v10h-10z" />
            <path
              d="M923.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 3.5766 -60.3564)"
            />
            <path d="M883 31h10v10h-10z" />
            <path d="M903 31h10v10h-10z" />
            <path d="M883 41h10v10h-10zM903 41h10v10h-10zM913 41h10v10h-10z" />
            <path
              d="M933.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.1219 -62.3392)"
            />
            <path d="M943 41h10v10h-10zM953 41h10v10h-10zM964 41h10v10h-10zM923 41h10v10h-10z" />
            <path
              d="M883.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 6.9022 -68.0618)"
            />
            <path d="M963 51h10v10h-10zM883 61h10v10h-10z" />
            <path
              d="M893.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -2.3957 69.1946)"
            />
            <path
              d="M903.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 6.3856 -60.2998)"
            />
            <path d="M913 61h10v10h-10z" />
            <path
              d="M933.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -2.0075 85.2589)"
            />
            <path d="M943 61h10v10h-10zM953 61h10v10h-10z" />
            <path
              d="M963.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 6.5842 -64.2817)"
            />
            <path d="M923 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_12_">
          <g className="trim">
            <path
              d="M1073.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 13.9816 178.9824)"
            />
            <path d="M983 1h10v10h-10zM993 1h10v10h-10zM1003 1h10v10h-10z" />
            <path
              d="M1013.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 3.4479 -78.1876)"
            />
            <path d="M1033 1h10v10h-10z" />
            <path
              d="M1043.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 3.5365 -80.4903)"
            />
            <path d="M1053 1h10v10h-10zM1063 1h10v10h-10zM1023 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M983 11h10v10h-10z" />
            <path d="M993 11h10v10h-10z" />
            <path d="M1003 11h10v10h-10z" />
            <path d="M1013 11h10v10h-10z" />
            <path d="M1023 11h10v10h-10z" />
            <path d="M1043 11h10v10h-10z" />
            <path d="M1053 10h10v10h-10z" />
            <path d="M1063 11h10v10h-10z" />
            <path d="M1073 11h10v10h-10z" />
            <path d="M1032 11h10v10h-10z" />
            <path
              d="M993.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 4.9236 -76.5898)"
            />
            <path d="M993 31h10v10h-10z" />
            <path d="M1013 31h10v10h-10z" />
            <path d="M1023 31h10v10h-10z" />
            <path d="M1043 31h10v10h-10z" fill="transparent" />
            <path d="M1053 31h10v10h-10z" />
            <path d="M1063 31h10v10h-10z" />
            <path d="M1073 31h10v10h-10z" />
            <path d="M1033 31h10v10h-10z" fill="transparent" />
            <path d="M1073 41h10v10h-10z" />
            <path d="M993 41h10v10h-10z" />
            <path d="M993 51h10v10h-10z" />
            <path d="M1003 51h10v10h-10z" />
            <path
              d="M1013.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 5.7952 -66.2426)"
            />
            <path d="M1023 51h10v10h-10z" />
            <path d="M1043 51h10v10h-10z" />
            <path d="M1053 51h10v10h-10z" />
            <path d="M1073 51h10v10h-10z" />
            <path d="M1033 51h10v10h-10z" />
            <path d="M1073 61h10v10h-10z" />
            <path d="M983 71h10v10h-10z" />
            <path d="M993 71h10v10h-10z" />
            <path d="M1003 71h10v10h-10z" />
            <path d="M1013 71h10v10h-10z" />
            <path d="M1023 71h10v10h-10z" />
            <path d="M1043 71h10v10h-10z" fill="transparent" />
            <path d="M1053 71h10v10h-10z" fill="transparent" />
            <path
              d="M1063.9 70.8h10v10h-10z"
              transform="rotate(9.46 1068.62636772 75.87040364)"
            />
            <path d="M1073 71h10v10h-10z" />
            <path d="M1033 71h11v10h-11z" />
          </g>

          <g className="meander">
            <path d="M1073 21h10v10h-10zM983 21h10v10h-10zM1002 21h10v10h-10zM1013 21h10v10h-10zM1033 21h10v10h-10zM1043 21h10v10h-10z" />
            <path
              d="M1053.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 2.8683 -55.5943)"
            />
            <path d="M1063 21h10v10h-10z" />
            <path
              d="M1023.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 3.7883 -66.8599)"
            />
            <path d="M983 31h10v10h-10z" />
            <path d="M1003 31h10v10h-10z" />
            <path d="M983 41h10v10h-10zM1003 41h10v10h-10zM1013 41h10v10h-10z" />
            <path
              d="M1033.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.3434 -68.9898)"
            />
            <path d="M1043 41h10v10h-10zM1053 41h10v10h-10zM1064 41h10v10h-10zM1023 41h10v10h-10z" />
            <path
              d="M983.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 7.1972 -75.7375)"
            />
            <path d="M1063 51h10v10h-10zM983 61h10v10h-10z" />
            <path
              d="M993.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -2.1006 76.871)"
            />
            <path
              d="M1003.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 6.607 -66.9504)"
            />
            <path d="M1013 61h10v10h-10z" />
            <path
              d="M1033.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -1.5969 94.3116)"
            />
            <path d="M1043 61h10v10h-10zM1053 61h10v10h-10z" />
            <path
              d="M1063.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 6.8054 -70.9316)"
            />
            <path d="M1023 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_11_">
          <g className="trim">
            <path
              d="M1173.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 15.366 195.5648)"
            />
            <path d="M1083 1h10v10h-10zM1093 1h10v10h-10zM1103 1h10v10h-10z" />
            <path
              d="M1113.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 3.7429 -85.8633)"
            />
            <path d="M1133 1h10v10h-10z" />
            <path
              d="M1143.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 3.8314 -88.166)"
            />
            <path d="M1153 1h10v10h-10zM1163 1h10v10h-10zM1123 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1083 11h10v10h-10z" />
            <path d="M1093 11h10v10h-10z" />
            <path d="M1103 11h10v10h-10z" />
            <path d="M1113 11h10v10h-10z" />
            <path d="M1123 11h10v10h-10z" />
            <path d="M1143 11h10v10h-10z" />
            <path d="M1153 10h10v10h-10z" />
            <path d="M1163 11h10v10h-10z" />
            <path d="M1173 11h10v10h-10z" />
            <path d="M1132 11h10v10h-10z" />
            <path
              d="M1093.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 5.2183 -84.261)"
            />
            <path d="M1093 31h10v10h-10z" />
            <path d="M1113 31h10v10h-10z" />
            <path d="M1123 31h10v10h-10z" />
            <path d="M1143 31h10v10h-10z" />
            <path d="M1153 31h10v10h-10z" />
            <path d="M1163 31h10v10h-10z" />
            <path d="M1173 31h10v10h-10z" fill="transparent" />
            <path d="M1133 31h10v10h-10z" />
            <path d="M1173 41h10v10h-10z" />
            <path d="M1093 41h10v10h-10z" />
            <path d="M1093 51h10v10h-10z" />
            <path d="M1103 51h10v10h-10z" fill="transparent" />
            <path
              d="M1113.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 6.0076 -72.7558)"
            />
            <path d="M1123 51h10v10h-10z" />
            <path d="M1143 51h10v10h-10z" />
            <path d="M1153 51h10v10h-10z" />
            <path d="M1173 51h10v10h-10z" />
            <path d="M1133 51h10v10h-10z" />
            <path d="M1173 61h10v10h-10z" />
            <path d="M1083 71h10v10h-10z" />
            <path d="M1093 71h10v10h-10z" />
            <path d="M1103 71h10v10h-10z" />
            <path d="M1113 71h10v10h-10z" />
            <path d="M1123 71h10v10h-10z" fill="transparent" />
            <path d="M1143 71h10v10h-10z" />
            <path d="M1153 71h10v10h-10z" />
            <path
              d="M1163.9 70.8h10v10h-10z"
              transform="rotate(9.46 1168.6042229 75.8819609)"
            />
            <path d="M1173 71h10v10h-10z" />
            <path d="M1133 71h11v10h-11z" />
          </g>
          <g className="meander">
            <path d="M1173 21h10v10h-10zM1083 21h10v10h-10zM1102 21h10v10h-10zM1113 21h10v10h-10zM1133 21h10v10h-10zM1143 21h10v10h-10z" />
            <path
              d="M1153.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 3.0063 -60.8481)"
            />
            <path d="M1163 21h10v10h-10z" />
            <path
              d="M1123.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 4 -73.3634)"
            />
            <path d="M1083 31h10v10h-10z" />
            <path d="M1103 31h10v10h-10z" />
            <path d="M1083 41h10v10h-10zM1103 41h10v10h-10zM1113 41h10v10h-10z" />
            <path
              d="M1133.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.5647 -75.6404)"
            />
            <path d="M1143 41h10v10h-10zM1153 41h10v10h-10zM1164 41h10v10h-10zM1123 41h10v10h-10z" />
            <path
              d="M1083.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 7.4922 -83.4131)"
            />
            <path d="M1163 51h10v10h-10zM1083 61h10v10h-10z" />
            <path
              d="M1093.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -1.8055 84.5473)"
            />
            <path
              d="M1103.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 6.8284 -73.601)"
            />
            <path d="M1113 61h10v10h-10z" />
            <path
              d="M1133.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -1.1864 103.3643)"
            />
            <path d="M1143 61h10v10h-10zM1153 61h10v10h-10z" />
            <path
              d="M1163.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 7.0267 -77.5816)"
            />
            <path d="M1123 61h10v10h-10z" />
          </g>
        </g>
        <g id="top_10_">
          <g className="trim">
            <path
              d="M1273.9.8h10v10h-10z"
              transform="matrix(.9862 -.1658 .1658 .9862 16.7505 212.1472)"
            />
            <path d="M1183 1h10v10h-10zM1193 1h10v10h-10zM1203 1h10v10h-10z" />
            <path
              d="M1213.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 4.038 -93.5389)"
            />
            <path d="M1233 1h10v10h-10z" />
            <path
              d="M1243.9.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 4.1265 -95.8416)"
            />
            <path d="M1253 1h10v10h-10zM1263 1h10v10h-10zM1223 1h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1183 11h10v10h-10z" />
            <path d="M1193 11h10v10h-10z" />
            <path d="M1203 11h10v10h-10z" />
            <path d="M1213 11h10v10h-10z" />
            <path d="M1223 11h10v10h-10z" />
            <path d="M1243 11h10v10h-10z" fill="transparent" />
            <path d="M1253 10h10v10h-10z" />
            <path d="M1263 11h10v10h-10z" />
            <path d="M1273 11h10v10h-10z" />
            <path d="M1232 11h10v10h-10z" />
            <path
              d="M1193.9 20.8h10v10h-10z"
              transform="matrix(.9971 .07675 -.07675 .9971 5.5132 -91.9359)"
            />
            <path d="M1193 31h10v10h-10z" />
            <path d="M1213 31h10v10h-10z" />
            <path d="M1223 31h10v10h-10z" />
            <path d="M1243 31h10v10h-10z" />
            <path d="M1253 31h10v10h-10z" />
            <path d="M1263 31h10v10h-10z" />
            <path d="M1273 31h10v10h-10z" />
            <path d="M1233 31h10v10h-10z" />
            <path d="M1273 41h10v10h-10z" />
            <path d="M1193 41h10v10h-10z" />
            <path d="M1193 51h10v10h-10z" />
            <path d="M1203 51h10v10h-10z" />
            <path
              d="M1213.9 50.8h10v10h-10z"
              transform="matrix(.9979 .06513 -.06513 .9979 6.22 -79.269)"
            />
            <path d="M1223 51h10v10h-10z" />
            <path d="M1243 51h10v10h-10z" />
            <path d="M1253 51h10v10h-10z" />
            <path d="M1273 51h10v10h-10z" />
            <path d="M1233 51h10v10h-10z" />
            <path d="M1273 61h10v10h-10z" />
            <path d="M1183 71h10v10h-10z" />
            <path d="M1193 71h10v10h-10z" fill="transparent" />
            <path d="M1203 71h10v10h-10z" />
            <path d="M1213 71h10v10h-10z" fill="transparent" />
            <path d="M1223 71h10v10h-10z" />
            <path d="M1243 71h10v10h-10z" />
            <path d="M1253 71h10v10h-10z" />
            <path
              d="M1263.9 70.8h10v10h-10z"
              transform="rotate(9.46 1268.58273179 75.89407202)"
            />
            <path d="M1273 71h10v10h-10z" />
            <path d="M1233 71h11v10h-11z" />
          </g>
          <g className="meander">
            <path d="M1273 21h10v10h-10zM1183 21h10v10h-10zM1202 21h10v10h-10zM1213 21h10v10h-10zM1233 21h10v10h-10zM1243 21h10v10h-10z" />
            <path
              d="M1253.9 21.8h10v10h-10z"
              transform="matrix(.9986 .05254 -.05254 .9986 3.1445 -66.102)"
            />
            <path d="M1263 21h10v10h-10z" />
            <path
              d="M1223.9 19.8h10v10h-10z"
              transform="matrix(.9979 .06503 -.06503 .9979 4.2117 -79.8668)"
            />
            <path d="M1183 31h10v10h-10z" />
            <path d="M1203 31h10v10h-10z" />
            <path d="M1183 41h10v10h-10zM1203 41h10v10h-10zM1213 41h10v10h-10z" />
            <path
              d="M1233.9 40.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 5.7861 -82.291)"
            />
            <path d="M1243 41h10v10h-10zM1253 41h10v10h-10zM1264 41h10v10h-10zM1223 41h10v10h-10z" />
            <path
              d="M1183.9 50.8h10v10h-10z"
              transform="matrix(.997 .07676 -.07676 .997 7.7872 -91.0887)"
            />
            <path d="M1263 51h10v10h-10zM1183 61h10v10h-10z" />
            <path
              d="M1193.9 60.8h10v10h-10z"
              transform="matrix(.997 -.07676 .07676 .997 -1.5105 92.2237)"
            />
            <path
              d="M1203.9 60.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 7.0498 -80.2516)"
            />
            <path d="M1213 61h10v10h-10z" />
            <path
              d="M1233.9 59.8h10v10h-10z"
              transform="matrix(.9959 -.09053 .09053 .9959 -.7758 112.417)"
            />
            <path d="M1243 61h10v10h-10zM1253 61h10v10h-10z" />
            <path
              d="M1263.9 61.8h10v10h-10z"
              transform="matrix(.9978 .0665 -.0665 .9978 7.2482 -84.2315)"
            />
            <path d="M1223 61h10v10h-10z" />
          </g>
        </g>
      </g>
      <g id="botSide">
        <g id="top_24_">
          <g className="trim">
            <path
              d="M1181.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 2505.376 1579.3066)"
            />
            <path d="M1273 889h10v10h-10zM1263 889h10v10h-10zM1253 889h10v10h-10z" />
            <path
              d="M1241.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2421.2031 1881.5388)"
            />
            <path d="M1223 889h10v10h-10z" />
            <path
              d="M1211.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2361.2915 1879.2361)"
            />
            <path d="M1203 889h10v10h-10zM1193 889h10v10h-10zM1233 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1273 879h10v10h-10z" />
            <path d="M1263 879h10v10h-10z" />
            <path d="M1253 879h10v10h-10z" />
            <path d="M1243 879h10v10h-10z" />
            <path d="M1233 879h10v10h-10z" />
            <path d="M1213 879h10v10h-10z" />
            <path d="M1203 880h10v10h-10z" />
            <path d="M1193 879h10v10h-10z" />
            <path d="M1183 879h10v10h-10z" />
            <path d="M1224 879h10v10h-10z" />
            <path
              d="M1261.8 869.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2462.6792 1843.1331)"
            />
            <path d="M1263 859h10v10h-10z" />
            <path d="M1243 859h10v10h-10z" />
            <path d="M1233 859h10v10h-10z" />
            <path d="M1213 859h10v10h-10z" />
            <path d="M1203 859h10v10h-10z" fill="transparent" />
            <path d="M1193 859h10v10h-10z" />
            <path d="M1183 859h10v10h-10z" />
            <path d="M1223 859h10v10h-10z" />
            <path d="M1183 849h10v10h-10z" />
            <path d="M1263 849h10v10h-10z" />
            <path d="M1263 839h10v10h-10z" />
            <path d="M1253 839h10v10h-10z" />
            <path
              d="M1241.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 2435.8853 1767.8907)"
            />
            <path d="M1233 839h10v10h-10z" />
            <path d="M1213 839h10v10h-10z" />
            <path d="M1203 839h10v10h-10z" />
            <path d="M1183 839h10v10h-10z" />
            <path d="M1223 839h10v10h-10z" />
            <path d="M1183 829h10v10h-10z" />
            <path d="M1273 819h10v10h-10z" />
            <path d="M1263 819h10v10h-10z" fill="transparent" />
            <path d="M1253 819h10v10h-10z" fill="transparent" />
            <path d="M1243 819h10v10h-10z" />
            <path d="M1233 819h10v10h-10z" />
            <path d="M1213 819h10v10h-10z" />
            <path d="M1203 819h10v10h-10z" />
            <path
              d="M1191.8 819.2h10v10h-10z"
              transform="rotate(-170.54 1196.7635375 824.21027894)"
            />
            <path d="M1183 819h10v10h-10z" />
            <path d="M1222 819h11v10h-11z" />
          </g>
          <g className="meander">
            <path d="M1183 869h10v10h-10zM1273 869h10v10h-10zM1254 869h10v10h-10zM1243 869h10v10h-10zM1223 869h10v10h-10zM1213 869h10v10h-10z" />
            <path
              d="M1201.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 2365.9741 1808.6757)"
            />
            <path d="M1193 869h10v10h-10z" />
            <path
              d="M1231.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 2413.9802 1829.0601)"
            />
            <path d="M1273 859h10v10h-10z" />
            <path d="M1253 859h10v10h-10z" />
            <path d="M1273 849h10v10h-10zM1253 849h10v10h-10zM1243 849h10v10h-10z" />
            <path
              d="M1221.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 2393.9915 1788.1761)"
            />
            <path d="M1213 849h10v10h-10zM1203 849h10v10h-10zM1192 849h10v10h-10zM1233 849h10v10h-10z" />
            <path
              d="M1271.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2484.9521 1783.989)"
            />
            <path d="M1193 839h10v10h-10zM1273 829h10v10h-10z" />
            <path
              d="M1261.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 2593.8223 1568.7776)"
            />
            <path
              d="M1251.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 2455.2551 1750.2156)"
            />
            <path d="M1243 829h10v10h-10z" />
            <path
              d="M1221.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 2524.0952 1555.9962)"
            />
            <path d="M1213 829h10v10h-10zM1203 829h10v10h-10z" />
            <path
              d="M1191.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 2335.4604 1744.2201)"
            />
            <path d="M1233 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_23_">
          <g className="trim">
            <path
              d="M1081.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 2306.7603 1595.8889)"
            />
            <path d="M1173 889h10v10h-10zM1163 889h10v10h-10zM1153 889h10v10h-10z" />
            <path
              d="M1141.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2221.498 1873.8633)"
            />
            <path d="M1123 889h10v10h-10z" />
            <path
              d="M1111.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2161.5864 1871.5605)"
            />
            <path d="M1103 889h10v10h-10zM1093 889h10v10h-10zM1133 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1173 879h10v10h-10z" />
            <path d="M1163 879h10v10h-10z" />
            <path d="M1153 879h10v10h-10z" />
            <path d="M1143 879h10v10h-10z" />
            <path d="M1133 879h10v10h-10z" />
            <path d="M1113 879h10v10h-10z" />
            <path d="M1103 880h10v10h-10z" />
            <path d="M1093 879h10v10h-10z" />
            <path d="M1083 879h10v10h-10z" />
            <path d="M1124 879h10v10h-10z" />
            <path
              d="M1161.8 869.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2262.9741 1835.4574)"
            />
            <path d="M1163 859h10v10h-10z" />
            <path d="M1143 859h10v10h-10z" />
            <path d="M1133 859h10v10h-10z" fill="transparent" />
            <path d="M1113 859h10v10h-10z" fill="transparent" />
            <path d="M1103 859h10v10h-10z" />
            <path d="M1093 859h10v10h-10z" />
            <path d="M1083 859h10v10h-10z" />
            <path d="M1123 859h10v10h-10z" />
            <path d="M1083 849h10v10h-10z" />
            <path d="M1163 849h10v10h-10z" />
            <path d="M1163 839h10v10h-10z" />
            <path d="M1153 839h10v10h-10z" />
            <path
              d="M1141.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 2236.0977 1761.3776)"
            />
            <path d="M1133 839h10v10h-10z" fill="transparent" />
            <path d="M1113 839h10v10h-10z" />
            <path d="M1103 839h10v10h-10z" />
            <path d="M1083 839h10v10h-10z" />
            <path d="M1123 839h10v10h-10z" />
            <path d="M1083 829h10v10h-10z" />
            <path d="M1173 819h10v10h-10z" />
            <path d="M1163 819h10v10h-10z" />
            <path d="M1153 819h10v10h-10z" />
            <path d="M1143 819h10v10h-10z" />
            <path d="M1133 819h10v10h-10z" />
            <path d="M1113 819h10v10h-10z" />
            <path d="M1103 819h10v10h-10z" fill="transparent" />
            <path
              d="M1091.8 819.2h10v10h-10z"
              transform="rotate(-170.54 1096.76439483 824.21212095)"
            />
            <path d="M1083 819h10v10h-10z" />
            <path d="M1122 819h11v10h-11z" />
          </g>
          <g className="meander">
            <path d="M1083 869h10v10h-10zM1173 869h10v10h-10zM1154 869h10v10h-10zM1143 869h10v10h-10zM1123 869h10v10h-10zM1113 869h10v10h-10z" />
            <path
              d="M1101.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 2166.1123 1803.4219)"
            />
            <path d="M1093 869h10v10h-10z" />
            <path
              d="M1131.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 2214.1919 1822.5566)"
            />
            <path d="M1173 859h10v10h-10z" />
            <path d="M1153 859h10v10h-10z" />
            <path d="M1173 849h10v10h-10zM1153 849h10v10h-10zM1143 849h10v10h-10z" />
            <path
              d="M1121.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 2194.2129 1781.5256)"
            />
            <path d="M1113 849h10v10h-10zM1103 849h10v10h-10zM1092 849h10v10h-10zM1133 849h10v10h-10z" />
            <path
              d="M1171.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2285.2473 1776.3135)"
            />
            <path d="M1093 839h10v10h-10zM1173 829h10v10h-10z" />
            <path
              d="M1161.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 2394.1172 1576.454)"
            />
            <path
              d="M1151.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 2255.4766 1743.5649)"
            />
            <path d="M1143 829h10v10h-10z" />
            <path
              d="M1121.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 2324.5059 1565.049)"
            />
            <path d="M1113 829h10v10h-10zM1103 829h10v10h-10z" />
            <path
              d="M1091.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 2135.6816 1737.5702)"
            />
            <path d="M1133 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_22_">
          <g className="trim">
            <path
              d="M981.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 2108.1448 1612.4714)"
            />
            <path d="M1073 889h10v10h-10zM1063 889h10v10h-10zM1053 889h10v10h-10z" />
            <path
              d="M1041.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2021.793 1866.1876)"
            />
            <path d="M1023 889h10v10h-10z" />
            <path
              d="M1011.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1961.8816 1863.885)"
            />
            <path d="M1003 889h10v10h-10zM993 889h10v10h-10zM1033 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1073 879h10v10h-10z" />
            <path d="M1063 879h10v10h-10z" />
            <path d="M1053 879h10v10h-10z" />
            <path d="M1043 879h10v10h-10z" />
            <path d="M1033 879h10v10h-10z" />
            <path d="M1013 879h10v10h-10z" />
            <path d="M1003 880h10v10h-10z" fill="transparent" />
            <path d="M993 879h10v10h-10z" />
            <path d="M983 879h10v10h-10z" />
            <path d="M1024 879h10v10h-10z" />
            <path
              d="M1061.8 869.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2063.269 1827.7817)"
            />
            <path d="M1063 859h10v10h-10z" />
            <path d="M1043 859h10v10h-10z" />
            <path d="M1033 859h10v10h-10z" fill="transparent" />
            <path d="M1013 859h10v10h-10z" fill="transparent" />
            <path d="M1003 859h10v10h-10z" />
            <path d="M993 859h10v10h-10z" />
            <path d="M983 859h10v10h-10z" />
            <path d="M1023 859h10v10h-10z" />
            <path d="M983 849h10v10h-10z" />
            <path d="M1063 849h10v10h-10z" />
            <path d="M1063 839h10v10h-10z" />
            <path d="M1053 839h10v10h-10z" />
            <path
              d="M1041.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 2036.3099 1754.8644)"
            />
            <path d="M1033 839h10v10h-10z" />
            <path d="M1013 839h10v10h-10z" />
            <path d="M1003 839h10v10h-10z" />
            <path d="M983 839h10v10h-10z" />
            <path d="M1023 839h10v10h-10z" />
            <path d="M983 829h10v10h-10z" />
            <path d="M1073 819h10v10h-10z" />
            <path d="M1063 819h10v10h-10z" />
            <path d="M1053 819h10v10h-10z" />
            <path d="M1043 819h10v10h-10z" />
            <path d="M1033 819h10v10h-10z" />
            <path d="M1013 819h10v10h-10z" fill="transparent" />
            <path d="M1003 819h10v10h-10z" />
            <path
              d="M991.8 819.2h10v10h-10z"
              transform="rotate(-170.54 996.76540217 824.21395054)"
            />
            <path d="M983 819h10v10h-10z" />
            <path d="M1022 819h11v10h-11z" />
          </g>
          <g className="meander">
            <path d="M983 869h10v10h-10zM1073 869h10v10h-10zM1054 869h10v10h-10zM1043 869h10v10h-10zM1023 869h10v10h-10zM1013 869h10v10h-10z" />
            <path
              className="meander"
              d="M1001.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 1966.2505 1798.168)"
            />
            <path d="M993 869h10v10h-10z" />
            <path
              d="M1031.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 2014.4036 1816.0532)"
            />
            <path d="M1073 859h10v10h-10z" />
            <path d="M1053 859h10v10h-10z" />
            <path d="M1073 849h10v10h-10zM1053 849h10v10h-10zM1043 849h10v10h-10z" />
            <path
              d="M1021.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1994.4342 1774.875)"
            />
            <path d="M1013 849h10v10h-10zM1003 849h10v10h-10zM992 849h10v10h-10zM1033 849h10v10h-10z" />
            <path
              d="M1071.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 2085.5422 1768.6378)"
            />
            <path d="M993 839h10v10h-10zM1073 829h10v10h-10z" />
            <path
              d="M1061.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 2194.4121 1584.1304)"
            />
            <path
              d="M1051.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 2055.698 1736.9144)"
            />
            <path d="M1043 829h10v10h-10z" />
            <path
              d="M1021.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 2124.9163 1574.1016)"
            />
            <path d="M1013 829h10v10h-10zM1003 829h10v10h-10z" />
            <path
              d="M991.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1935.9031 1730.9202)"
            />
            <path d="M1033 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_21_">
          <g className="trim">
            <path
              d="M881.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 1909.5293 1629.0538)"
            />
            <path d="M973 889h10v10h-10zM963 889h10v10h-10zM953 889h10v10h-10z" />
            <path
              d="M941.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1822.088 1858.512)"
            />
            <path d="M923 889h10v10h-10z" />
            <path
              d="M911.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1762.1765 1856.2092)"
            />
            <path d="M903 889h10v10h-10zM893 889h10v10h-10zM933 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M973 879h10v10h-10z" />
            <path d="M963 879h10v10h-10z" />
            <path d="M953 879h10v10h-10z" />
            <path d="M943 879h10v10h-10z" />
            <path d="M933 879h10v10h-10z" />
            <path d="M913 879h10v10h-10z" />
            <path d="M903 880h10v10h-10z" />
            <path d="M893 879h10v10h-10z" />
            <path d="M883 879h10v10h-10z" />
            <path d="M924 879h10v10h-10z" />
            <path
              d="M961.8 869.2h10v10h-10z"
              transform="matrix(-.9971 -.07675 .07675 -.9971 1863.567 1820.1029)"
            />
            <path d="M963 859h10v10h-10z" />
            <path d="M943 859h10v10h-10z" />
            <path d="M933 859h10v10h-10z" />
            <path d="M913 859h10v10h-10z" />
            <path d="M903 859h10v10h-10z" />
            <path d="M893 859h10v10h-10z" />
            <path d="M883 859h10v10h-10z" />
            <path d="M923 859h10v10h-10z" />
            <path d="M883 849h10v10h-10z" />
            <path d="M963 849h10v10h-10z" />
            <path d="M963 839h10v10h-10z" />
            <path d="M953 839h10v10h-10z" />
            <path
              d="M941.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 1836.5222 1748.3512)"
            />
            <path d="M933 839h10v10h-10z" />
            <path d="M913 839h10v10h-10z" />
            <path d="M903 839h10v10h-10z" />
            <path d="M883 839h10v10h-10z" />
            <path d="M923 839h10v10h-10z" fill="transparent" />
            <path d="M883 829h10v10h-10z" />
            <path d="M973 819h10v10h-10z" />
            <path d="M963 819h10v10h-10z" />
            <path d="M953 819h10v10h-10z" />
            <path d="M943 819h10v10h-10z" fill="transparent" />
            <path d="M933 819h10v10h-10z" />
            <path d="M913 819h10v10h-10z" />
            <path d="M903 819h10v10h-10z" />
            <path
              d="M891.8 819.2h10v10h-10z"
              transform="rotate(-170.54 896.76640536 824.21573012)"
            />
            <path d="M883 819h10v10h-10z" />
            <path d="M922 819h11v10h-11z" />
          </g>

          <g className="meander">
            <path d="M883 869h10v10h-10zM973 869h10v10h-10zM954 869h10v10h-10zM943 869h10v10h-10zM923 869h10v10h-10zM913 869h10v10h-10z" />
            <path
              d="M901.8 868.2h10v10h-10z"
              transform="rotate(-176.9895496 906.759691 873.23926) scale(.99998)"
            />
            <path d="M893 869h10v10h-10z" />
            <path
              d="M931.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 1814.6152 1809.5497)"
            />
            <path d="M973 859h10v10h-10z" />
            <path d="M953 859h10v10h-10z" />
            <path d="M973 849h10v10h-10zM953 849h10v10h-10zM943 849h10v10h-10z" />
            <path
              d="M921.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1794.6555 1768.2244)"
            />
            <path d="M913 849h10v10h-10zM903 849h10v10h-10zM892 849h10v10h-10zM933 849h10v10h-10z" />
            <path
              d="M971.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1885.8373 1760.9622)"
            />
            <path d="M893 839h10v10h-10zM973 829h10v10h-10z" />
            <path
              d="M961.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 1994.7073 1591.8068)"
            />
            <path
              d="M951.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1855.9193 1730.2638)"
            />
            <path d="M943 829h10v10h-10z" />
            <path
              d="M921.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 1925.3269 1583.1543)"
            />
            <path d="M913 829h10v10h-10zM903 829h10v10h-10z" />
            <path
              d="M891.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1736.1244 1724.2703)"
            />
            <path d="M933 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_20_">
          <g className="trim">
            <path
              d="M781.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 1710.9137 1645.6362)"
            />
            <path d="M873 889h10v10h-10zM863 889h10v10h-10zM853 889h10v10h-10z" />
            <path
              d="M841.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1622.3831 1850.8364)"
            />
            <path d="M823 889h10v10h-10z" />
            <path
              d="M811.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1562.4716 1848.5337)"
            />
            <path d="M803 889h10v10h-10zM793 889h10v10h-10zM833 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M873 879h10v10h-10z" />
            <path d="M863 879h10v10h-10z" />
            <path d="M853 879h10v10h-10z" />
            <path d="M843 879h10v10h-10z" fill="transparent" />
            <path d="M833 879h10v10h-10z" />
            <path d="M813 879h10v10h-10z" />
            <path d="M803 880h10v10h-10z" />
            <path d="M793 879h10v10h-10z" />
            <path d="M783 879h10v10h-10z" />
            <path d="M824 879h10v10h-10z" />
            <path
              d="M861.8 869.2h10v10h-10z"
              transform="matrix(-.9971 -.07675 .07675 -.9971 1663.8621 1812.4277)"
            />
            <path d="M863 859h10v10h-10z" />
            <path d="M843 859h10v10h-10z" />
            <path d="M833 859h10v10h-10z" />
            <path d="M813 859h10v10h-10z" />
            <path d="M803 859h10v10h-10z" />
            <path d="M793 859h10v10h-10z" />
            <path d="M783 859h10v10h-10z" />
            <path d="M823 859h10v10h-10z" />
            <path d="M783 849h10v10h-10z" />
            <path d="M863 849h10v10h-10z" />
            <path d="M863 839h10v10h-10z" />
            <path d="M853 839h10v10h-10z" />
            <path
              d="M841.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 1636.7346 1741.838)"
            />
            <path d="M833 839h10v10h-10z" />
            <path d="M813 839h10v10h-10z" />
            <path d="M803 839h10v10h-10z" />
            <path d="M783 839h10v10h-10z" />
            <path d="M823 839h10v10h-10z" />
            <path d="M783 829h10v10h-10z" />
            <path d="M873 819h10v10h-10z" />
            <path d="M863 819h10v10h-10z" fill="transparent" />
            <path d="M853 819h10v10h-10z" fill="transparent" />
            <path d="M843 819h10v10h-10z" />
            <path d="M833 819h10v10h-10z" />
            <path d="M813 819h10v10h-10z" />
            <path d="M803 819h10v10h-10z" />
            <path
              d="M791.8 819.2h10v10h-10z"
              transform="rotate(-170.54 796.76741683 824.21760971)"
            />
            <path d="M783 819h10v10h-10z" />
            <path d="M822 819h11v10h-11z" />
          </g>
          <g className="meander">
            <path d="M783 869h10v10h-10zM873 869h10v10h-10zM854 869h10v10h-10zM843 869h10v10h-10zM823 869h10v10h-10zM813 869h10v10h-10z" />
            <path
              d="M801.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 1566.5266 1787.6603)"
            />
            <path d="M793 869h10v10h-10z" />
            <path
              d="M831.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 1614.8269 1803.0461)"
            />
            <path d="M873 859h10v10h-10z" />
            <path d="M853 859h10v10h-10z" />
            <path d="M873 849h10v10h-10zM853 849h10v10h-10zM843 849h10v10h-10z" />
            <path
              d="M821.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1594.877 1761.5737)"
            />
            <path d="M813 849h10v10h-10zM803 849h10v10h-10zM792 849h10v10h-10zM833 849h10v10h-10z" />
            <path
              d="M871.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1686.1323 1753.2866)"
            />
            <path d="M793 839h10v10h-10zM873 829h10v10h-10z" />
            <path
              d="M861.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 1795.0024 1599.4832)"
            />
            <path
              d="M851.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1656.1406 1723.6133)"
            />
            <path d="M843 829h10v10h-10z" />
            <path
              d="M821.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 1725.7375 1592.207)"
            />
            <path d="M813 829h10v10h-10zM803 829h10v10h-10z" />
            <path
              d="M791.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1536.3457 1717.6204)"
            />
            <path d="M833 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_19_">
          <g className="trim">
            <path
              d="M681.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 1512.2982 1662.2188)"
            />
            <path d="M773 889h10v10h-10zM763 889h10v10h-10zM753 889h10v10h-10z" />
            <path
              d="M741.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1422.678 1843.1608)"
            />
            <path d="M723 889h10v10h-10z" />
            <path
              d="M711.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1362.7666 1840.8582)"
            />
            <path d="M703 889h10v10h-10zM693 889h10v10h-10zM733 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M773 879h10v10h-10z" />
            <path d="M763 879h10v10h-10z" />
            <path d="M753 879h10v10h-10z" />
            <path d="M743 879h10v10h-10z" />
            <path d="M733 879h10v10h-10z" fill="transparent" />
            <path d="M713 879h10v10h-10z" />
            <path d="M703 880h10v10h-10z" />
            <path d="M693 879h10v10h-10z" />
            <path d="M683 879h10v10h-10z" />
            <path d="M724 879h10v10h-10z" />
            <path
              d="M761.8 869.2h10v10h-10z"
              transform="matrix(-.9971 -.07675 .07675 -.9971 1464.157 1804.7524)"
            />
            <path d="M763 859h10v10h-10z" />
            <path d="M743 859h10v10h-10z" />
            <path d="M733 859h10v10h-10z" />
            <path d="M713 859h10v10h-10z" />
            <path d="M703 859h10v10h-10z" />
            <path d="M693 859h10v10h-10z" />
            <path d="M683 859h10v10h-10z" />
            <path d="M723 859h10v10h-10z" />
            <path d="M683 849h10v10h-10z" fill="transparent" />
            <path d="M763 849h10v10h-10z" fill="transparent" />
            <path d="M763 839h10v10h-10z" />
            <path d="M753 839h10v10h-10z" />
            <path
              d="M741.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 1436.947 1735.3247)"
            />
            <path d="M733 839h10v10h-10z" />
            <path d="M713 839h10v10h-10z" />
            <path d="M703 839h10v10h-10z" />
            <path d="M683 839h10v10h-10z" />
            <path d="M723 839h10v10h-10z" />
            <path d="M683 829h10v10h-10z" />
            <path d="M773 819h10v10h-10z" />
            <path d="M763 819h10v10h-10z" fill="transparent" />
            <path d="M753 819h10v10h-10z" />
            <path d="M743 819h10v10h-10z" />
            <path d="M733 819h10v10h-10z" />
            <path d="M713 819h10v10h-10z" />
            <path d="M703 819h10v10h-10z" />
            <path
              d="M691.8 819.2h10v10h-10z"
              transform="rotate(-170.54 696.76837417 824.21944344)"
            />
            <path d="M683 819h10v10h-10z" />
            <path d="M722 819h11v10h-11z" />
          </g>
          <g className="meander">
            <path d="M683 869h10v10h-10zM773 869h10v10h-10zM754 869h10v10h-10zM743 869h10v10h-10zM723 869h10v10h-10zM713 869h10v10h-10z" />
            <path
              d="M701.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 1366.6648 1782.4065)"
            />
            <path d="M693 869h10v10h-10z" />
            <path
              d="M731.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 1415.0387 1796.5427)"
            />
            <path d="M773 859h10v10h-10z" />
            <path d="M753 859h10v10h-10z" />
            <path d="M773 849h10v10h-10zM753 849h10v10h-10zM743 849h10v10h-10z" />
            <path
              d="M721.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1395.0984 1754.9231)"
            />
            <path d="M713 849h10v10h-10zM703 849h10v10h-10zM692 849h10v10h-10zM733 849h10v10h-10z" />
            <path
              d="M771.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1486.4272 1745.611)"
            />
            <path d="M693 839h10v10h-10zM773 829h10v10h-10z" />
            <path
              d="M761.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 1595.2975 1607.1594)"
            />
            <path
              d="M751.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1456.3621 1716.9626)"
            />
            <path d="M743 829h10v10h-10z" />
            <path
              d="M721.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 1526.1481 1601.2596)"
            />
            <path d="M713 829h10v10h-10zM703 829h10v10h-10z" />
            <path
              d="M691.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1336.5671 1710.9703)"
            />
            <path d="M733 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_18_">
          <g className="trim">
            <path
              d="M581.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 1313.6827 1678.801)"
            />
            <path d="M673 889h10v10h-10zM663 889h10v10h-10zM653 889h10v10h-10z" />
            <path
              d="M641.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1222.9731 1835.4851)"
            />
            <path d="M623 889h10v10h-10z" />
            <path
              d="M611.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1163.0615 1833.1824)"
            />
            <path d="M603 889h10v10h-10zM593 889h10v10h-10zM633 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M673 879h10v10h-10z" />
            <path d="M663 879h10v10h-10z" />
            <path d="M653 879h10v10h-10z" />
            <path d="M643 879h10v10h-10z" />
            <path d="M633 879h10v10h-10z" />
            <path d="M613 879h10v10h-10z" />
            <path d="M603 880h10v10h-10z" />
            <path d="M593 879h10v10h-10z" />
            <path d="M583 879h10v10h-10z" />
            <path d="M624 879h10v10h-10z" />
            <path
              d="M661.8 869.2h10v10h-10z"
              transform="matrix(-.9971 -.07675 .07675 -.9971 1264.4519 1797.0771)"
            />
            <path d="M663 859h10v10h-10z" />
            <path d="M643 859h10v10h-10z" />
            <path d="M633 859h10v10h-10z" />
            <path d="M613 859h10v10h-10z" />
            <path d="M603 859h10v10h-10z" />
            <path d="M593 859h10v10h-10z" />
            <path d="M583 859h10v10h-10z" />
            <path d="M623 859h10v10h-10z" />
            <path d="M583 849h10v10h-10z" />
            <path d="M663 849h10v10h-10z" />
            <path d="M663 839h10v10h-10z" />
            <path d="M653 839h10v10h-10z" />
            <path
              d="M641.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 1237.1593 1728.8115)"
            />
            <path d="M633 839h10v10h-10z" />
            <path d="M613 839h10v10h-10z" fill="transparent" />
            <path d="M603 839h10v10h-10z" />
            <path d="M583 839h10v10h-10z" />
            <path d="M623 839h10v10h-10z" />
            <path d="M583 829h10v10h-10z" />
            <path d="M673 819h10v10h-10z" />
            <path d="M663 819h10v10h-10z" />
            <path d="M653 819h10v10h-10z" />
            <path d="M643 819h10v10h-10z" />
            <path d="M633 819h10v10h-10z" />
            <path d="M613 819h10v10h-10z" />
            <path d="M603 819h10v10h-10z" />
            <path
              d="M591.8 819.2h10v10h-10z"
              transform="rotate(-170.54 596.76937736 824.22122303)"
            />
            <path d="M583 819h10v10h-10z" />
            <path d="M622 819h11v10h-11z" />
          </g>

          <g className="meander">
            <path d="M583 869h10v10h-10zM673 869h10v10h-10zM654 869h10v10h-10zM643 869h10v10h-10zM623 869h10v10h-10zM613 869h10v10h-10z" />
            <path
              d="M601.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 1166.8029 1777.1526)"
            />
            <path d="M593 869h10v10h-10z" />
            <path
              d="M631.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 1215.2504 1790.0392)"
            />
            <path d="M673 859h10v10h-10z" />
            <path d="M653 859h10v10h-10z" />
            <path d="M673 849h10v10h-10zM653 849h10v10h-10zM643 849h10v10h-10z" />
            <path
              d="M621.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1195.3198 1748.2725)"
            />
            <path d="M613 849h10v10h-10zM603 849h10v10h-10zM592 849h10v10h-10zM633 849h10v10h-10z" />
            <path
              d="M671.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1286.7224 1737.9353)"
            />
            <path d="M593 839h10v10h-10zM673 829h10v10h-10z" />
            <path
              d="M661.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 1395.5925 1614.8359)"
            />
            <path
              d="M651.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1256.5835 1710.312)"
            />
            <path d="M643 829h10v10h-10z" />
            <path
              d="M621.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 1326.5587 1610.3123)"
            />
            <path d="M613 829h10v10h-10zM603 829h10v10h-10z" />
            <path
              d="M591.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1136.7885 1704.3203)"
            />
            <path d="M633 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_17_">
          <g className="trim">
            <path
              d="M480.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 1113.0811 1695.5493)"
            />
            <path d="M572 889h10v10h-10zM562 889h10v10h-10zM552 889h10v10h-10z" />
            <path
              d="M540.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1021.271 1827.7328)"
            />
            <path d="M522 889h10v10h-10z" />
            <path
              d="M510.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 961.3595 1825.4302)"
            />
            <path d="M502 889h10v10h-10zM492 889h10v10h-10zM532 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M572 879h10v10h-10z" />
            <path d="M562 879h10v10h-10z" />
            <path d="M552 879h10v10h-10z" />
            <path d="M542 879h10v10h-10z" />
            <path d="M532 879h10v10h-10z" />
            <path d="M512 879h10v10h-10z" />
            <path d="M502 880h10v10h-10z" />
            <path d="M492 879h10v10h-10z" />
            <path d="M482 879h10v10h-10z" />
            <path d="M523 879h10v10h-10z" />
            <path
              d="M560.8 869.2h10v10h-10z"
              transform="matrix(-.9971 -.07675 .07675 -.9971 1062.75 1789.3252)"
            />
            <path d="M562 859h10v10h-10z" />
            <path d="M542 859h10v10h-10z" />
            <path d="M532 859h10v10h-10z" />
            <path d="M512 859h10v10h-10z" />
            <path d="M502 859h10v10h-10z" />
            <path d="M492 859h10v10h-10z" />
            <path d="M482 859h10v10h-10z" />
            <path d="M522 859h10v10h-10z" />
            <path d="M482 849h10v10h-10z" />
            <path d="M562 849h10v10h-10z" />
            <path d="M562 839h10v10h-10z" />
            <path d="M552 839h10v10h-10z" fill="transparent" />
            <path
              d="M540.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 1035.3738 1722.2333)"
            />
            <path d="M532 839h10v10h-10z" />
            <path d="M512 839h10v10h-10z" />
            <path d="M502 839h10v10h-10z" />
            <path d="M482 839h10v10h-10z" />
            <path d="M522 839h10v10h-10z" />
            <path d="M482 829h10v10h-10z" fill="transparent" />
            <path d="M572 819h10v10h-10z" />
            <path d="M562 819h10v10h-10z" />
            <path d="M552 819h10v10h-10z" />
            <path d="M542 819h10v10h-10z" fill="transparent" />
            <path d="M532 819h10v10h-10z" />
            <path d="M512 819h10v10h-10z" />
            <path d="M502 819h10v10h-10z" />
            <path
              d="M490.8 819.2h10v10h-10z"
              transform="rotate(-170.54 495.7703847 824.22305262)"
            />
            <path d="M482 819h10v10h-10z" />
            <path d="M521 819h11v10h-11z" />
          </g>

          <g className="meander">
            <path d="M482 869h10v10h-10zM572 869h10v10h-10zM553 869h10v10h-10zM542 869h10v10h-10zM522 869h10v10h-10zM512 869h10v10h-10z" />
            <path
              d="M500.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 964.9424 1771.8462)"
            />
            <path d="M492 869h10v10h-10z" />
            <path
              d="M530.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 1013.4642 1783.4707)"
            />
            <path d="M572 859h10v10h-10z" />
            <path d="M552 859h10v10h-10z" />
            <path d="M572 849h10v10h-10zM552 849h10v10h-10zM542 849h10v10h-10z" />
            <path
              d="M520.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 993.5434 1741.5554)"
            />
            <path d="M512 849h10v10h-10zM502 849h10v10h-10zM491 849h10v10h-10zM532 849h10v10h-10z" />
            <path
              d="M570.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 1085.0203 1730.183)"
            />
            <path d="M492 839h10v10h-10zM572 829h10v10h-10z" />
            <path
              d="M560.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 1193.8906 1622.5891)"
            />
            <path
              d="M550.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 1054.8071 1703.5948)"
            />
            <path d="M542 829h10v10h-10z" />
            <path
              d="M520.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 1124.9734 1619.4556)"
            />
            <path d="M512 829h10v10h-10zM502 829h10v10h-10z" />
            <path
              d="M490.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 935.012 1697.6039)"
            />
            <path d="M532 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_16_">
          <g className="trim">
            <path
              d="M380.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 914.4655 1712.1317)"
            />
            <path d="M472 889h10v10h-10zM462 889h10v10h-10zM452 889h10v10h-10z" />
            <path
              d="M440.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 821.566 1820.0571)"
            />
            <path d="M422 889h10v10h-10z" />
            <path
              d="M410.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 761.6545 1817.7544)"
            />
            <path d="M402 889h10v10h-10zM392 889h10v10h-10zM432 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M472 879h10v10h-10z" />
            <path d="M462 879h10v10h-10z" />
            <path d="M452 879h10v10h-10z" />
            <path d="M442 879h10v10h-10z" />
            <path d="M432 879h10v10h-10z" />
            <path d="M412 879h10v10h-10z" />
            <path d="M402 880h10v10h-10z" />
            <path d="M392 879h10v10h-10z" />
            <path d="M382 879h10v10h-10z" />
            <path d="M423 879h10v10h-10z" />
            <path
              d="M460.8 869.2h10v10h-10z"
              transform="matrix(-.9971 -.07675 .07675 -.9971 863.0449 1781.6499)"
            />
            <path d="M462 859h10v10h-10z" fill="transparent" />
            <path d="M442 859h10v10h-10z" />
            <path d="M432 859h10v10h-10z" />
            <path d="M412 859h10v10h-10z" />
            <path d="M402 859h10v10h-10z" />
            <path d="M392 859h10v10h-10z" />
            <path d="M382 859h10v10h-10z" />
            <path d="M422 859h10v10h-10z" />
            <path d="M382 849h10v10h-10z" fill="transparent" />
            <path d="M462 849h10v10h-10z" />
            <path d="M462 839h10v10h-10z" />
            <path d="M452 839h10v10h-10z" />
            <path
              d="M440.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 835.5861 1715.7201)"
            />
            <path d="M432 839h10v10h-10z" />
            <path d="M412 839h10v10h-10z" />
            <path d="M402 839h10v10h-10z" />
            <path d="M382 839h10v10h-10z" />
            <path d="M422 839h10v10h-10z" />
            <path d="M382 829h10v10h-10z" />
            <path d="M472 819h10v10h-10z" />
            <path d="M462 819h10v10h-10z" />
            <path d="M452 819h10v10h-10z" />
            <path d="M442 819h10v10h-10z" />
            <path d="M432 819h10v10h-10z" />
            <path d="M412 819h10v10h-10z" fill="transparent" />
            <path d="M402 819h10v10h-10z" />
            <path
              d="M390.8 819.2h10v10h-10z"
              transform="rotate(-170.54 395.77134203 824.22488635)"
            />
            <path d="M382 819h10v10h-10z" />
            <path d="M421 819h11v10h-11z" />
          </g>

          <g className="meander">
            <path d="M382 869h10v10h-10zM472 869h10v10h-10zM453 869h10v10h-10zM442 869h10v10h-10zM422 869h10v10h-10zM412 869h10v10h-10z" />
            <path
              d="M400.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 765.0804 1766.5924)"
            />
            <path d="M392 869h10v10h-10z" />
            <path
              d="M430.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 813.6759 1776.9673)"
            />
            <path d="M472 859h10v10h-10z" />
            <path d="M452 859h10v10h-10z" />
            <path d="M472 849h10v10h-10zM452 849h10v10h-10zM442 849h10v10h-10z" />
            <path
              d="M420.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 793.7648 1734.9048)"
            />
            <path d="M412 849h10v10h-10zM402 849h10v10h-10zM391 849h10v10h-10zM432 849h10v10h-10z" />
            <path
              d="M470.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 885.3153 1722.5073)"
            />
            <path d="M392 839h10v10h-10zM472 829h10v10h-10z" />
            <path
              d="M460.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 994.1857 1630.2654)"
            />
            <path
              d="M450.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 855.0284 1696.9443)"
            />
            <path d="M442 829h10v10h-10z" />
            <path
              d="M420.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 925.384 1628.5083)"
            />
            <path d="M412 829h10v10h-10zM402 829h10v10h-10z" />
            <path
              d="M390.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 735.2333 1690.9539)"
            />
            <path d="M432 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_15_">
          <g className="trim">
            <path
              d="M280.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 715.85 1728.7141)"
            />
            <path d="M372 889h10v10h-10zM362 889h10v10h-10zM352 889h10v10h-10z" />
            <path
              d="M340.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 621.861 1812.3816)"
            />
            <path d="M322 889h10v10h-10z" />
            <path
              d="M310.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 561.9496 1810.0789)"
            />
            <path d="M302 889h10v10h-10zM292 889h10v10h-10zM332 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M372 879h10v10h-10z" />
            <path d="M362 879h10v10h-10z" />
            <path d="M352 879h10v10h-10z" />
            <path d="M342 879h10v10h-10z" />
            <path d="M332 879h10v10h-10z" />
            <path d="M312 879h10v10h-10z" />
            <path d="M302 880h10v10h-10z" />
            <path d="M292 879h10v10h-10z" />
            <path d="M282 879h10v10h-10z" />
            <path d="M323 879h10v10h-10z" />
            <path
              d="M360.8 869.2h10v10h-10z"
              transform="matrix(-.9971 -.07675 .07675 -.9971 663.3399 1773.9746)"
            />
            <path d="M362 859h10v10h-10z" />
            <path d="M342 859h10v10h-10z" />
            <path d="M332 859h10v10h-10z" />
            <path d="M312 859h10v10h-10z" />
            <path d="M302 859h10v10h-10z" />
            <path d="M292 859h10v10h-10z" />
            <path d="M282 859h10v10h-10z" />
            <path d="M322 859h10v10h-10z" />
            <path d="M282 849h10v10h-10z" />
            <path d="M362 849h10v10h-10z" />
            <path d="M362 839h10v10h-10z" />
            <path d="M352 839h10v10h-10z" />
            <path
              d="M340.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 635.7984 1709.2069)"
            />
            <path d="M332 839h10v10h-10z" />
            <path d="M312 839h10v10h-10z" />
            <path d="M302 839h10v10h-10z" />
            <path d="M282 839h10v10h-10z" />
            <path d="M322 839h10v10h-10z" />
            <path d="M282 829h10v10h-10z" />
            <path d="M372 819h10v10h-10z" fill="transparent" />
            <path d="M362 819h10v10h-10z" />
            <path d="M352 819h10v10h-10z" fill="transparent" />
            <path d="M342 819h10v10h-10z" />
            <path d="M332 819h10v10h-10z" />
            <path d="M312 819h10v10h-10z" />
            <path d="M302 819h10v10h-10z" />
            <path
              d="M290.8 819.2h10v10h-10z"
              transform="rotate(-170.54 295.77234522 824.22666593)"
            />
            <path d="M282 819h10v10h-10z" />
            <path d="M321 819h11v10h-11z" />
          </g>

          <g className="meander">
            <path d="M282 869h10v10h-10zM372 869h10v10h-10zM353 869h10v10h-10zM342 869h10v10h-10zM322 869h10v10h-10zM312 869h10v10h-10z" />
            <path
              d="M300.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 565.2186 1761.3386)"
            />
            <path d="M292 869h10v10h-10z" />
            <path
              d="M330.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 613.8876 1770.4636)"
            />
            <path d="M372 859h10v10h-10z" />
            <path d="M352 859h10v10h-10z" />
            <path d="M372 849h10v10h-10zM352 849h10v10h-10zM342 849h10v10h-10z" />
            <path
              d="M320.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 593.9862 1728.2542)"
            />
            <path d="M312 849h10v10h-10zM302 849h10v10h-10zM291 849h10v10h-10zM332 849h10v10h-10z" />
            <path
              d="M370.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 685.6104 1714.8318)"
            />
            <path d="M292 839h10v10h-10zM372 829h10v10h-10z" />
            <path
              d="M360.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 794.4807 1637.9418)"
            />
            <path
              d="M350.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 655.2499 1690.2937)"
            />
            <path d="M342 829h10v10h-10z" />
            <path
              d="M320.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 725.7946 1637.5609)"
            />
            <path d="M312 829h10v10h-10zM302 829h10v10h-10z" />
            <path
              d="M290.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 535.4547 1684.304)"
            />
            <path d="M332 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_9_">
          <g className="trim">
            <path
              d="M180.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 517.2344 1745.2966)"
            />
            <path d="M272 889h10v10h-10zM262 889h10v10h-10zM252 889h10v10h-10z" />
            <path
              d="M240.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 422.1561 1804.7059)"
            />
            <path d="M222 889h10v10h-10z" />
            <path
              d="M210.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 362.2446 1802.4033)"
            />
            <path d="M202 889h10v10h-10zM192 889h10v10h-10zM232 889h10v10h-10z" />
          </g>

          <g className="frame-white">
            <path d="M272 879h10v10h-10z" />
            <path d="M262 879h10v10h-10z" />
            <path d="M252 879h10v10h-10z" />
            <path d="M242 879h10v10h-10z" />
            <path d="M232 879h10v10h-10z" />
            <path d="M212 879h10v10h-10z" />
            <path d="M202 880h10v10h-10z" />
            <path d="M192 879h10v10h-10z" />
            <path d="M182 879h10v10h-10z" />
            <path d="M223 879h10v10h-10z" />
            <path
              d="M260.8 869.2h10v10h-10z"
              transform="matrix(-.9971 -.07675 .07675 -.9971 463.6378 1766.2986)"
            />
            <path d="M262 859h10v10h-10z" />
            <path d="M242 859h10v10h-10z" />
            <path d="M232 859h10v10h-10z" />
            <path d="M212 859h10v10h-10z" />
            <path d="M202 859h10v10h-10z" />
            <path d="M192 859h10v10h-10z" />
            <path d="M182 859h10v10h-10z" />
            <path d="M222 859h10v10h-10z" />
            <path d="M182 849h10v10h-10z" />
            <path d="M262 849h10v10h-10z" />
            <path d="M262 839h10v10h-10z" />
            <path d="M252 839h10v10h-10z" />
            <path
              d="M240.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 436.0107 1702.6937)"
            />
            <path d="M232 839h10v10h-10z" />
            <path d="M212 839h10v10h-10z" />
            <path d="M202 839h10v10h-10z" fill="transparent" />
            <path d="M182 839h10v10h-10z" />
            <path d="M222 839h10v10h-10z" />
            <path d="M182 829h10v10h-10z" />
            <path d="M272 819h10v10h-10z" />
            <path d="M262 819h10v10h-10z" />
            <path d="M252 819h10v10h-10z" />
            <path d="M242 819h10v10h-10z" fill="transparent" />
            <path d="M232 819h10v10h-10z" />
            <path d="M212 819h10v10h-10z" />
            <path d="M202 819h10v10h-10z" />
            <path
              d="M190.8 819.2h10v10h-10z"
              transform="rotate(-170.54 195.7733067 824.22854966)"
            />
            <path d="M182 819h10v10h-10z" />
            <path d="M221 819h11v10h-11z" />
          </g>

          <g className="meander">
            <path d="M182 869h10v10h-10zM272 869h10v10h-10zM253 869h10v10h-10zM242 869h10v10h-10zM222 869h10v10h-10zM212 869h10v10h-10z" />
            <path
              d="M200.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 365.3567 1756.0847)"
            />
            <path d="M192 869h10v10h-10z" />
            <path
              d="M230.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 414.0993 1763.9602)"
            />
            <path d="M272 859h10v10h-10z" />
            <path d="M252 859h10v10h-10z" />
            <path d="M272 849h10v10h-10zM252 849h10v10h-10zM242 849h10v10h-10z" />
            <path
              d="M220.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 394.2076 1721.6036)"
            />
            <path d="M212 849h10v10h-10zM202 849h10v10h-10zM191 849h10v10h-10zM232 849h10v10h-10z" />
            <path
              d="M270.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 485.9053 1707.1561)"
            />
            <path d="M192 839h10v10h-10zM272 829h10v10h-10z" />
            <path
              d="M260.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 594.7758 1645.6182)"
            />
            <path
              d="M250.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 455.4713 1683.6431)"
            />
            <path d="M242 829h10v10h-10z" />
            <path
              d="M220.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 526.2052 1646.6135)"
            />
            <path d="M212 829h10v10h-10zM202 829h10v10h-10z" />
            <path
              d="M190.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 335.6761 1677.6541)"
            />
            <path d="M232 829h10v10h-10z" />
          </g>
        </g>
        <g id="top_5_">
          <g className="trim">
            <path
              d="M80.8 889.2h10v10h-10z"
              transform="matrix(-.9862 .1658 -.1658 -.9862 318.6189 1761.8789)"
            />
            <path d="M172 889h10v10h-10zM162 889h10v10h-10zM152 889h10v10h-10z" />
            <path
              d="M140.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 222.4511 1797.0303)"
            />
            <path d="M122 889h10v10h-10z" />
            <path
              d="M110.8 889.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 162.5396 1794.7275)"
            />
            <path d="M102 889h10v10h-10zM92 889h10v10H92zM132 889h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M172 879h10v10h-10z" />
            <path d="M162 879h10v10h-10z" />
            <path d="M152 879h10v10h-10z" />
            <path d="M142 879h10v10h-10z" />
            <path d="M132 879h10v10h-10z" />
            <path d="M112 879h10v10h-10z" />
            <path d="M102 880h10v10h-10z" />
            <path d="M92 879h10v10H92z" />
            <path d="M82 879h10v10H82z" />
            <path d="M123 879h10v10h-10z" />
            <path
              d="M160.8 869.2h10v10h-10z"
              transform="matrix(-.9971 -.07675 .07675 -.9971 263.9328 1758.6237)"
            />
            <path d="M162 859h10v10h-10z" />
            <path d="M142 859h10v10h-10z" />
            <path d="M132 859h10v10h-10z" />
            <path d="M112 859h10v10h-10z" />
            <path d="M102 859h10v10h-10z" />
            <path d="M92 859h10v10H92z" />
            <path d="M82 859h10v10H82z" />
            <path d="M122 859h10v10h-10z" />
            <path d="M82 849h10v10H82z" />
            <path d="M162 849h10v10h-10z" />
            <path d="M162 839h10v10h-10z" />
            <path d="M152 839h10v10h-10z" />
            <path
              d="M140.8 839.2h10v10h-10z"
              transform="matrix(-.9979 -.06513 .06513 -.9979 236.2231 1696.1804)"
            />
            <path d="M132 839h10v10h-10z" />
            <path d="M112 839h10v10h-10z" />
            <path d="M102 839h10v10h-10z" />
            <path d="M82 839h10v10H82z" />
            <path d="M122 839h10v10h-10z" />
            <path d="M82 829h10v10H82z" />
            <path d="M172 819h10v10h-10z" />
            <path d="M162 819h10v10h-10z" fill="transparent" />
            <path d="M152 819h10v10h-10z" />
            <path d="M142 819h10v10h-10z" fill="transparent" />
            <path d="M132 819h10v10h-10z" />
            <path d="M112 819h10v10h-10z" />
            <path d="M102 819h10v10h-10z" />
            <path
              d="M90.8 819.2h10v10h-10z"
              transform="rotate(-170.54 95.77431403 824.23037925)"
            />
            <path d="M82 819h10v10H82z" />
            <path d="M121 819h11v10h-11z" />
          </g>

          <g className="meander">
            <path d="M82 869h10v10H82zM172 869h10v10h-10zM153 869h10v10h-10zM142 869h10v10h-10zM122 869h10v10h-10zM112 869h10v10h-10z" />
            <path
              d="M100.8 868.2h10v10h-10z"
              transform="matrix(-.9986 -.05254 .05254 -.9986 165.4948 1750.8308)"
            />
            <path d="M92 869h10v10H92z" />
            <path
              d="M130.8 870.2h10v10h-10z"
              transform="matrix(-.9979 -.06503 .06503 -.9979 214.311 1757.4568)"
            />
            <path d="M172 859h10v10h-10z" />
            <path d="M152 859h10v10h-10z" />
            <path d="M172 849h10v10h-10zM152 849h10v10h-10zM142 849h10v10h-10z" />
            <path
              d="M120.8 849.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 194.429 1714.953)"
            />
            <path d="M112 849h10v10h-10zM102 849h10v10h-10zM91 849h10v10H91zM132 849h10v10h-10z" />
            <path
              d="M170.8 839.2h10v10h-10z"
              transform="matrix(-.997 -.07676 .07676 -.997 286.2004 1699.4805)"
            />
            <path d="M92 839h10v10H92zM172 829h10v10h-10z" />
            <path
              d="M160.8 829.2h10v10h-10z"
              transform="matrix(-.997 .07676 -.07676 -.997 395.0708 1653.2946)"
            />
            <path
              d="M150.8 829.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 255.6927 1676.9924)"
            />
            <path d="M142 829h10v10h-10z" />
            <path
              d="M120.8 830.2h10v10h-10z"
              transform="matrix(-.9959 .09053 -.09053 -.9959 326.6158 1655.6663)"
            />
            <path d="M112 829h10v10h-10zM102 829h10v10h-10z" />
            <path
              d="M90.8 828.2h10v10h-10z"
              transform="matrix(-.9978 -.0665 .0665 -.9978 135.8974 1671.004)"
            />
            <path d="M132 829h10v10h-10z" />
          </g>
        </g>
      </g>
      <g id="leftSide">
        <g id="top_30_">
          <g className="trim">
            <path d="M10 606.4l1.7 10.4-10 1.7L0 608.1zM1 703h10v11H1zM1 693h10v10H1zM1 682h10v11H1zM11.3 670.7l-.8 10.5-10.1-.9.8-10.4zM1 651h10v10H1zM11.3 639.1l-.8 10.5-10.1-.8.8-10.5z" />
            <path d="M1 630h10v10H1zM1 619h10v11H1zM1 661h10v11H1z" />
          </g>
          <g className="frame-white">
            <path d="M11 703h10v11H11z" />
            <path d="M11 693h10v10H11z" />
            <path d="M11 682h10v11H11z" />
            <path d="M11 672h10v10H11z" />
            <path d="M11 661h10v11H11z" />
            <path d="M11 640h10v11H11z" />
            <path d="M10 630h10v10H10z" />
            <path d="M11 619h10v11H11z" />
            <path d="M11 609h10v10H11z" />
            <path d="M11 652h10v10H11z" />
            <path d="M31.5 691.7l-.8 10.5-10.1-.8.8-10.5z" />
            <path d="M31 693h11v10H31z" />
            <path d="M31 672h11v10H31z" />
            <path d="M31 661h11v11H31z" />
            <path d="M31 640h11v11H31z" />
            <path d="M31 630h11v10H31z" />
            <path d="M31 619h11v11H31z" />
            <path d="M31 609h11v10H31z" />
            <path d="M31 651h11v10H31z" />
            <path d="M42 609h10v10H42z" />
            <path d="M42 693h10v10H42z" />
            <path d="M52 693h10v10H52z" />
            <path d="M52 682h10v11H52z" />
            <path d="M61.8 670.6l-.6 10.5-10.1-.7.6-10.5z" />
            <path d="M52 661h10v11H52z" />
            <path d="M52 640h10v11H52z" />
            <path d="M52 630h10v10H52z" />
            <path d="M52 609h10v10H52z" />
            <path d="M52 651h10v10H52z" />
            <path d="M62 609h10v10H62z" fill="transparent" />
            <path d="M72 703h10v11H72z" />
            <path d="M72 693h10v10H72z" />
            <path d="M72 682h10v11H72z" />
            <path d="M72 672h10v10H72z" />
            <path d="M72 661h10v11H72z" />
            <path d="M72 640h10v11H72z" />
            <path d="M72 630h10v10H72z" fill="transparent" />
            <path
              d="M82.5 618.6L80.8 629l-9.9-1.7 1.6-10.4z"
              fill="transparent"
            />
            <path d="M72 609h10v10H72z" />
            <path d="M72 650h10v11H72z" />
          </g>
          <g className="meander">
            <path d="M21 609h10v10H21zM21 703h10v11H21zM21 683h10v11H21zM21 672h10v10H21zM21 651h10v10H21zM21 640h10v11H21z" />
            <path d="M32.4 628.5l-.5 10.5-10.1-.6.5-10.5z" />
            <path d="M21 619h10v11H21zM30.4 660.1l-.6 10.5-10.1-.7.6-10.5zM31 703h11v11H31z" />
            <path d="M31 682h11v11H31z" />
            <path d="M42 703h10v11H42zM42 682h10v11H42zM42 672h10v10H42zM51.7 649.6l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M42 640h10v11H42zM42 630h10v10H42zM42 618h10v11H42zM42 661h10v11H42zM61.9 702.2l-.8 10.5-10.1-.8.8-10.5zM52 619h10v11H52zM62 703h10v11H62zM71.2 690.9l.8 10.5-10.1.8-.8-10.5z" />
            <path d="M72 681.1l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M62 672h10v10H62z" />
            <path d="M70.1 648.8l1 10.4-10.1 1-.9-10.5z" />
            <path d="M62 640h10v11H62zM62 630h10v10H62zM73 618.1l-.7 10.5-10.1-.7.7-10.5zM62 661h10v11H62z" />
          </g>
        </g>
        <g id="top_29_">
          <g className="trim">
            <path d="M10 501.3l1.7 10.4-10 1.7L0 503.1zM1 598h10v11H1zM1 588h10v10H1zM1 577h10v11H1zM11.3 565.6l-.8 10.5-10.1-.8.8-10.5zM1 546h10v10H1zM11.3 534.1l-.8 10.4-10.1-.8.8-10.5z" />
            <path d="M1 525h10v10H1zM1 514h10v11H1zM1 556h10v11H1z" />
          </g>
          <g className="frame-white">
            <path d="M11 598h10v11H11z" />
            <path d="M11 588h10v10H11z" />
            <path d="M11 577h10v11H11z" />
            <path d="M11 567h10v10H11z" />
            <path d="M11 556h10v11H11z" />
            <path d="M11 535h10v11H11z" />
            <path d="M10 525h10v10H10z" />
            <path d="M11 514h10v11H11z" fill="transparent" />
            <path d="M11 504h10v10H11z" />
            <path d="M11 547h10v10H11z" />
            <path d="M31.5 586.6l-.8 10.5-10.1-.8.8-10.5z" />
            <path d="M31 588h11v10H31z" />
            <path d="M31 567h11v10H31z" />
            <path d="M31 556h11v11H31z" />
            <path d="M31 535h11v11H31z" />
            <path d="M31 525h11v10H31z" fill="transparent" />
            <path d="M31 514h11v11H31z" />
            <path d="M31 504h11v10H31z" />
            <path d="M31 546h11v10H31z" />
            <path d="M42 504h10v10H42z" fill="transparent" />
            <path d="M42 588h10v10H42z" />
            <path d="M52 588h10v10H52z" />
            <path d="M52 577h10v11H52z" />
            <path d="M61.8 565.5l-.6 10.5-10.1-.7.6-10.5z" />
            <path d="M52 556h10v11H52z" />
            <path d="M52 535h10v11H52z" />
            <path d="M52 525h10v10H52z" />
            <path d="M52 504h10v10H52z" fill="transparent" />
            <path d="M52 546h10v10H52z" />
            <path d="M62 504h10v10H62z" />
            <path d="M72 598h10v11H72z" />
            <path d="M72 588h10v10H72z" />
            <path d="M72 577h10v11H72z" />
            <path d="M72 567h10v10H72z" />
            <path d="M72 556h10v11H72z" />
            <path d="M72 535h10v11H72z" />
            <path d="M72 525h10v10H72z" />
            <path d="M82.5 513.6l-1.7 10.3-9.9-1.7 1.6-10.4z" />
            <path d="M72 504h10v10H72z" />
            <path d="M72 545h10v11H72z" />
          </g>

          <g className="meander">
            <path d="M21 504h10v10H21zM21 598h10v11H21zM21 578h10v11H21zM21 567h10v10H21zM21 546h10v10H21zM21 535h10v11H21z" />
            <path d="M32.4 523.4l-.5 10.5-10.1-.5.5-10.5z" />
            <path d="M21 514h10v11H21zM30.4 555l-.6 10.5-10.1-.7.6-10.5zM31 598h11v11H31z" />
            <path d="M31 577h11v11H31z" />
            <path d="M42 598h10v11H42zM42 577h10v11H42zM42 567h10v10H42zM51.7 544.5L51 555l-10.1-.7.7-10.5z" />
            <path d="M42 535h10v11H42zM42 525h10v10H42zM42 513h10v11H42zM42 556h10v11H42zM61.9 597.1l-.8 10.5-10.1-.8.8-10.5zM52 514h10v11H52zM62 598h10v11H62zM71.2 585.8l.8 10.5-10.1.8-.8-10.5z" />
            <path d="M72 576l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M62 567h10v10H62z" />
            <path d="M70.1 543.7l1 10.5-10.1.9-.9-10.5z" />
            <path d="M62 535h10v11H62zM62 525h10v10H62zM73 513l-.7 10.5-10.1-.7.7-10.5zM62 556h10v11H62z" />
          </g>
        </g>
        <g id="top_28_">
          <g className="trim">
            <path d="M10 396.2l1.7 10.4-10 1.7L0 398zM1 493h10v11H1zM1 483h10v10H1zM1 472h10v11H1zM11.3 460.5l-.8 10.5-10.1-.8.8-10.5zM1 440h10v11H1zM11.3 429l-.8 10.4-10.1-.8.8-10.4z" />
            <path d="M1 419h10v10H1zM1 408h10v11H1zM1 451h10v11H1z" />
          </g>
          <g className="frame-white">
            <path d="M11 493h10v11H11z" />
            <path d="M11 483h10v10H11z" />
            <path d="M11 472h10v11H11z" />
            <path d="M11 462h10v10H11z" />
            <path d="M11 451h10v11H11z" />
            <path d="M11 429h10v11H11z" />
            <path d="M10 419h10v10H10z" />
            <path d="M11 408h10v11H11z" />
            <path d="M11 398h10v10H11z" />
            <path d="M11 441h10v11H11z" />
            <path d="M31.5 481.5l-.8 10.5-10.1-.8.8-10.5z" />
            <path d="M31 483h11v10H31z" />
            <path d="M31 462h11v10H31z" />
            <path d="M31 451h11v11H31z" />
            <path d="M31 429h11v11H31z" />
            <path d="M31 419h11v10H31z" />
            <path d="M31 408h11v11H31z" />
            <path d="M31 398h11v10H31z" />
            <path d="M31 440h11v11H31z" fill="transparent" />
            <path d="M42 398h10v10H42z" />
            <path d="M42 483h10v10H42z" />
            <path d="M52 483h10v10H52z" />
            <path d="M52 472h10v11H52z" />
            <path d="M61.8 460.4l-.6 10.5-10.1-.7.6-10.5z" />
            <path d="M52 451h10v11H52z" />
            <path d="M52 429h10v11H52z" />
            <path d="M52 419h10v10H52z" />
            <path d="M52 398h10v10H52z" />
            <path d="M52 440h10v11H52z" />
            <path d="M62 398h10v10H62z" />
            <path d="M72 493h10v11H72z" />
            <path d="M72 483h10v10H72z" />
            <path d="M72 472h10v11H72z" />
            <path d="M72 462h10v10H72z" />
            <path d="M72 451h10v11H72z" />
            <path d="M72 429h10v11H72z" fill="transparent" />
            <path d="M72 419h10v10H72z" fill="transparent" />
            <path d="M82.5 408.5l-1.7 10.3-9.9-1.7 1.6-10.4z" />
            <path d="M72 398h10v10H72z" />
            <path d="M72 439h10v12H72z" />
          </g>
          <g className="meander">
            <path d="M21 398h10v10H21zM21 493h10v11H21zM21 473h10v11H21zM21 462h10v10H21zM21 440h10v11H21zM21 429h10v11H21z" />
            <path d="M32.4 418.3l-.5 10.5-10.1-.5.5-10.5z" />
            <path d="M21 408h10v11H21zM30.4 449.9l-.6 10.5-10.1-.7.6-10.5zM31 493h11v11H31z" />
            <path d="M31 472h11v11H31z" />
            <path d="M42 493h10v11H42zM42 472h10v11H42zM42 462h10v10H42zM51.7 439.4l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M42 429h10v11H42zM42 419h10v10H42zM42 407h10v11H42zM42 451h10v11H42zM61.9 492l-.8 10.5-10.1-.8.8-10.5zM52 408h10v11H52zM62 493h10v11H62zM71.2 480.7l.8 10.5-10.1.8-.8-10.5z" />
            <path d="M72 470.9l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M62 462h10v10H62z" />
            <path d="M70.1 438.6l1 10.5-10.1.9-.9-10.4z" />
            <path d="M62 429h10v11H62zM62 419h10v10H62zM73 407.9l-.7 10.5-10.1-.7.7-10.5zM62 451h10v11H62z" />
          </g>
        </g>
        <g id="top_27_">
          <g className="trim">
            <path d="M10 291.1l1.7 10.4-10 1.7L0 292.9zM1 387h10v11H1zM1 377h10v10H1zM1 366h10v11H1zM11.3 355.4l-.8 10.5-10.1-.8.8-10.5zM1 335h10v10H1zM11.3 323.9l-.8 10.4-10.1-.8.8-10.4z" />
            <path d="M1 314h10v10H1zM1 303h10v11H1zM1 345h10v11H1z" />
          </g>

          <g className="frame-white">
            <path d="M11 387h10v11H11z" />
            <path d="M11 377h10v10H11z" />
            <path d="M11 366h10v11H11z" />
            <path d="M11 356h10v10H11z" />
            <path d="M11 345h10v11H11z" />
            <path d="M11 324h10v11H11z" fill="transparent" />
            <path d="M10 314h10v10H10z" />
            <path d="M11 303h10v11H11z" />
            <path d="M11 293h10v10H11z" />
            <path d="M11 336h10v11H11z" />
            <path d="M31.5 376.4l-.8 10.5-10.1-.8.8-10.5z" />
            <path d="M31 377h11v10H31z" />
            <path d="M31 356h11v10H31z" />
            <path d="M31 345h11v11H31z" />
            <path d="M31 324h11v11H31z" />
            <path d="M31 314h11v10H31z" fill="transparent" />
            <path d="M31 303h11v11H31z" />
            <path d="M31 293h11v10H31z" />
            <path d="M31 335h11v10H31z" />
            <path d="M42 293h10v10H42z" />
            <path d="M42 377h10v10H42z" />
            <path d="M52 377h10v10H52z" />
            <path d="M52 366h10v11H52z" />
            <path d="M61.8 355.3l-.6 10.5-10.1-.7.6-10.5z" />
            <path d="M52 345h10v11H52z" />
            <path d="M52 324h10v11H52z" />
            <path d="M52 314h10v10H52z" fill="transparent" />
            <path d="M52 293h10v10H52z" fill="transparent" />
            <path d="M52 335h10v10H52z" />
            <path d="M62 293h10v10H62z" />
            <path d="M72 387h10v11H72z" />
            <path d="M72 377h10v10H72z" />
            <path d="M72 366h10v11H72z" fill="transparent" />
            <path d="M72 356h10v10H72z" />
            <path d="M72 345h10v11H72z" />
            <path d="M72 324h10v11H72z" />
            <path d="M72 314h10v10H72z" />
            <path d="M82.5 303.4l-1.7 10.3-9.9-1.7 1.6-10.4z" />
            <path d="M72 293h10v10H72z" />
            <path d="M72 334h10v11H72z" />
          </g>
          <g className="meander">
            <path d="M21 293h10v10H21zM21 387h10v11H21zM21 368h10v10H21zM21 356h10v10H21zM21 335h10v10H21zM21 324h10v11H21z" />
            <path d="M32.4 313.2l-.5 10.5-10.1-.5.5-10.5z" />
            <path d="M21 303h10v11H21zM30.4 344.8l-.6 10.5-10.1-.7.6-10.5zM31 387h11v11H31z" />
            <path d="M31 366h11v11H31z" />
            <path d="M42 387h10v11H42zM42 366h10v11H42zM42 356h10v10H42zM51.7 334.3l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M42 324h10v11H42zM42 314h10v10H42zM42 302h10v11H42zM42 345h10v11H42zM61.9 386.9l-.8 10.5-10.1-.8.8-10.5zM52 303h10v11H52zM62 387h10v11H62z" />
            <path d="M71.2 375.6l.8 10.5-10.1.8-.8-10.5z" />
            <path d="M72 365.8l-.7 10.5-10.1-.7.7-10.4z" />
            <path d="M62 356h10v10H62z" />
            <path d="M70.1 333.5l1 10.5-10.1.9-.9-10.4z" />
            <path d="M62 324h10v11H62zM62 314h10v10H62zM73 302.8l-.7 10.5-10.1-.7.7-10.5zM62 345h10v11H62z" />
          </g>
        </g>
        <g id="top_26_">
          <g className="trim">
            <path d="M10 186l1.7 10.4-10 1.7L0 187.8zM1 283h10v10H1zM1 272h10v11H1zM1 262h10v10H1zM11.3 250.3l-.8 10.5L.4 260l.8-10.5zM1 230h10v11H1zM11.3 218.8l-.8 10.5-10.1-.8.8-10.5z" />
            <path d="M1 209h10v11H1zM1 199h10v10H1zM1 241h10v10H1z" />
          </g>
          <g className="frame-white">
            <path d="M11 283h10v10H11z" />
            <path d="M11 272h10v11H11z" />
            <path d="M11 262h10v10H11z" />
            <path d="M11 251h10v11H11z" />
            <path d="M11 241h10v10H11z" />
            <path d="M11 220h10v10H11z" />
            <path d="M10 209h10v11H10z" />
            <path d="M11 199h10v10H11z" />
            <path d="M11 188h10v11H11z" />
            <path d="M11 231h10v11H11z" />
            <path d="M31.5 271.3l-.8 10.5-10.1-.8.8-10.5z" />
            <path d="M31 272h11v11H31z" />
            <path d="M31 251h11v11H31z" />
            <path d="M31 241h11v10H31z" fill="transparent" />
            <path d="M31 220h11v10H31z" />
            <path d="M31 209h11v11H31z" />
            <path d="M31 199h11v10H31z" />
            <path d="M31 188h11v11H31z" />
            <path d="M31 230h11v11H31z" />
            <path d="M42 188h10v11H42z" />
            <path d="M42 272h10v11H42z" />
            <path d="M52 272h10v11H52z" />
            <path d="M52 262h10v10H52z" />
            <path d="M61.8 250.2l-.6 10.5-10.1-.7.6-10.4z" />
            <path d="M52 241h10v10H52z" />
            <path d="M52 220h10v10H52z" />
            <path d="M52 209h10v11H52z" />
            <path d="M52 188h10v11H52z" />
            <path d="M52 230h10v11H52z" />
            <path d="M62 188h10v11H62z" />
            <path d="M72 283h10v10H72z" />
            <path d="M72 272h10v11H72z" />
            <path d="M72 262h10v10H72z" />
            <path d="M72 251h10v11H72z" />
            <path d="M72 241h10v10H72z" />
            <path d="M72 220h10v10H72z" />
            <path d="M72 209h10v11H72z" />
            <path d="M82.5 198.3l-1.7 10.3-9.9-1.7 1.6-10.4z" />
            <path d="M72 188h10v11H72z" />
            <path d="M72 229h10v12H72z" />
          </g>

          <g className="meander">
            <path d="M21 188h10v11H21zM21 283h10v10H21zM21 263h10v10H21zM21 251h10v11H21zM21 230h10v11H21zM21 220h10v10H21z" />
            <path d="M32.4 208.1l-.5 10.5-10.1-.5.5-10.5z" />
            <path d="M21 199h10v10H21zM30.4 239.7l-.6 10.5-10.1-.7.6-10.5zM31 283h11v10H31z" />
            <path d="M31 262h11v10H31z" />
            <path d="M42 283h10v10H42zM42 262h10v10H42zM42 251h10v11H42zM51.7 229.2l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M42 220h10v10H42zM42 209h10v11H42zM42 197h10v11H42zM42 241h10v10H42zM61.9 281.8l-.8 10.5-10.1-.8.8-10.5zM52 199h10v10H52zM62 283h10v10H62zM71.2 270.5L72 281l-10.1.8-.8-10.5z" />
            <path d="M72 260.8l-.7 10.4-10.1-.7.7-10.4z" />
            <path d="M62 251h10v11H62z" />
            <path d="M70.1 228.4l1 10.5-10.1.9-.9-10.4z" />
            <path d="M62 220h10v10H62zM62 209h10v11H62zM73 197.7l-.7 10.5-10.1-.7.7-10.5zM62 241h10v10H62z" />
          </g>
        </g>
        <g id="top_25_">
          <g className="trim">
            <path d="M10 79.9l1.7 10.5-10 1.8L0 81.7zM1 178h10v10H1zM1 167h10v11H1zM1 157h10v10H1zM11.3 144.8l-.8 10.6-10.1-.8.8-10.6zM1 124h10v12H1zM11.3 113l-.8 10.6-10.1-.8.8-10.6z" />
            <path d="M1 103h10v11H1zM1 93h10v10H1zM1 136h10v10H1z" />
          </g>
          <g className="frame-white">
            <path d="M11 178h10v10H11z" />
            <path d="M11 167h10v11H11z" />
            <path d="M11 157h10v10H11z" />
            <path d="M11 146h10v11H11z" />
            <path d="M11 136h10v10H11z" />
            <path d="M11 114h10v10H11z" />
            <path d="M10 103h10v11H10z" />
            <path d="M11 93h10v10H11z" />
            <path d="M11 82h10v11H11z" />
            <path d="M11 125h10v12H11z" />
            <path d="M31.5 166l-.8 10.6-10.1-.8.8-10.6z" />
            <path d="M31 167h11v11H31z" />
            <path d="M31 146h11v11H31z" />
            <path d="M31 136h11v10H31z" />
            <path d="M31 114h11v10H31z" />
            <path d="M31 103h11v11H31z" />
            <path d="M31 93h11v10H31z" />
            <path d="M31 82h11v11H31z" />
            <path d="M31 124h11v12H31z" />
            <path d="M42 82h10v11H42z" />
            <path d="M42 167h10v11H42z" />
            <path d="M52 167h10v11H52z" />
            <path d="M52 157h10v10H52z" />
            <path d="M61.8 144.7l-.6 10.6-10.1-.7.6-10.5z" />
            <path d="M52 136h10v10H52z" />
            <path d="M52 114h10v10H52z" fill="transparent" />
            <path d="M52 103h10v11H52z" />
            <path d="M52 82h10v11H52z" />
            <path d="M52 124h10v12H52z" />
            <path d="M62 82h10v11H62z" />
            <path d="M72 178h10v10H72z" />
            <path d="M72 167h10v11H72z" />
            <path d="M72 157h10v10H72z" />
            <path d="M72 146h10v11H72z" />
            <path d="M72 136h10v10H72z" />
            <path d="M72 114h10v10H72z" />
            <path d="M72 103h10v11H72z" />
            <path d="M82.5 92.3l-1.7 10.5-9.9-1.8 1.6-10.4z" />
            <path d="M72 82h10v11H72z" />
            <path d="M72 123h10v13H72z" />
          </g>

          <g className="meander">
            <path d="M21 82h10v11H21zM21 178h10v10H21zM21 158h10v10H21zM21 146h10v11H21zM21 124h10v12H21zM21 114h10v10H21z" />
            <path d="M32.4 102.2l-.5 10.6-10.1-.5.5-10.6z" />
            <path d="M21 93h10v10H21zM30.4 134.1l-.6 10.6-10.1-.7.6-10.5zM31 178h11v10H31z" />
            <path d="M31 157h11v10H31z" />
            <path d="M42 178h10v10H42zM42 157h10v10H42zM42 146h10v11H42zM51.7 123.5l-.7 10.6-10.1-.7.7-10.6z" />
            <path d="M42 114h10v10H42zM42 103h10v11H42zM42 92h10v10H42zM42 136h10v10H42zM61.9 176.6l-.8 10.6-10.1-.8.8-10.6zM52 93h10v10H52zM62 178h10v10H62zM71.2 165.2l.8 10.6-10.1.8-.8-10.6z" />
            <path d="M72 155.4l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M62 146h10v11H62z" />
            <path d="M70.1 122.7l1 10.6-10.1.9-.9-10.5z" />
            <path d="M62 114h10v10H62zM62 103h10v11H62zM73 91.7l-.7 10.6-10.1-.7.7-10.6zM62 136h10v10H62z" />
          </g>
        </g>
        <g id="top_31_">
          <g className="trim">
            <path d="M10 710.4l1.7 10.4-10 1.7L0 712.2zM1 807h10v11H1zM1 797h10v10H1zM1 786h10v11H1zM11.3 774.7l-.8 10.5-10.1-.8.8-10.5zM1 755h10v10H1zM11.3 743.2l-.8 10.5-10.1-.8.8-10.5z" />
            <path d="M1 734h10v10H1zM1 723h10v11H1zM1 765h10v11H1z" />
          </g>
          <g className="frame-white">
            <path d="M11 807h10v11H11z" fill="transparent" />
            <path d="M11 797h10v10H11z" />
            <path d="M11 786h10v11H11z" />
            <path d="M11 776h10v10H11z" />
            <path d="M11 765h10v11H11z" />
            <path d="M11 744h10v11H11z" />
            <path d="M10 734h10v10H10z" />
            <path d="M11 723h10v11H11z" />
            <path d="M11 713h10v10H11z" />
            <path d="M11 756h10v10H11z" />
            <path d="M31.5 795.7l-.8 10.5-10.1-.8.8-10.5z" />
            <path d="M31 797h11v10H31z" />
            <path d="M31 776h11v10H31z" />
            <path d="M31 765h11v11H31z" />
            <path d="M31 744h11v11H31z" />
            <path d="M31 734h11v10H31z" fill="transparent" />
            <path d="M31 723h11v11H31z" />
            <path d="M31 713h11v10H31z" fill="transparent" />
            <path d="M31 755h11v10H31z" />
            <path d="M42 713h10v10H42z" />
            <path d="M42 797h10v10H42z" />
            <path d="M52 797h10v10H52z" />
            <path d="M52 786h10v11H52z" />
            <path d="M61.8 774.6l-.6 10.5-10.1-.6.6-10.5z" />
            <path d="M52 765h10v11H52z" />
            <path d="M52 744h10v11H52z" />
            <path d="M52 734h10v10H52z" />
            <path d="M52 713h10v10H52z" />
            <path d="M52 755h10v10H52z" />
            <path d="M62 713h10v10H62z" fill="transparent" />
            <path d="M72 807h10v11H72z" />
            <path d="M72 797h10v10H72z" />
            <path d="M72 786h10v11H72z" />
            <path d="M72 776h10v10H72z" />
            <path d="M72 765h10v11H72z" />
            <path d="M72 744h10v11H72z" />
            <path d="M72 734h10v10H72z" />
            <path d="M82.5 722.7l-1.7 10.4-9.9-1.8 1.6-10.3z" />
            <path d="M72 713h10v10H72z" />
            <path d="M72 754h10v11H72z" />
          </g>

          <g className="meander">
            <path d="M21 713h10v10H21zM21 807h10v11H21zM21 787h10v11H21zM21 776h10v10H21zM21 755h10v10H21zM21 744h10v11H21z" />
            <path d="M32.4 732.5l-.5 10.5-10.1-.5.5-10.5z" />
            <path d="M21 723h10v11H21zM30.4 764.1l-.6 10.5-10.1-.7.6-10.4zM31 807h11v11H31z" />
            <path d="M31 786h11v11H31z" />
            <path d="M42 807h10v11H42zM42 786h10v11H42zM42 776h10v10H42zM51.7 753.6l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M42 744h10v11H42zM42 734h10v10H42zM42 722h10v11H42zM42 765h10v11H42zM61.9 806.2l-.8 10.5-10.1-.8.8-10.5zM52 723h10v11H52zM62 807h10v11H62zM71.2 794.9l.8 10.5-10.1.8-.8-10.5z" />
            <path d="M72 785.2l-.7 10.5-10.1-.7.7-10.5z" />
            <path d="M62 776h10v10H62z" />
            <path d="M70.1 752.8l1 10.5-10.1.9-.9-10.4z" />
            <path d="M62 744h10v11H62zM62 734h10v10H62zM73 722.1l-.7 10.5-10.1-.7.7-10.5zM62 765h10v11H62z" />
          </g>
        </g>
      </g>
      <g id="rtSide">
        <g id="top_38_">
          <g className="trim">
            <path d="M1355.6 291.5l-1.7-10.3 9.9-1.8 1.7 10.4zM1355 184h10v11h-10zM1355 195h10v10h-10zM1355 205h10v11h-10zM1354.3 227.3l.8-10.5 10 .8-.8 10.5zM1355 237h10v10h-10zM1354.3 258.8l.8-10.5 10 .8-.8 10.5z" />
            <path d="M1355 258h10v10h-10zM1355 268h10v11h-10zM1355 226h10v11h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1345 184h10v11h-10z" />
            <path d="M1345 195h10v10h-10z" />
            <path d="M1345 205h10v11h-10z" />
            <path d="M1345 216h10v10h-10z" />
            <path d="M1345 226h10v11h-10z" />
            <path d="M1345 247h10v11h-10z" />
            <path d="M1346 258h10v10h-10z" />
            <path d="M1345 268h10v11h-10z" />
            <path d="M1345 279h10v10h-10z" />
            <path d="M1345 236h10v10h-10z" />
            <path d="M1334.2 206.2l.8-10.4 10 .8-.8 10.5z" />
            <path d="M1324 195h11v10h-11z" />
            <path d="M1324 216h11v10h-11z" />
            <path d="M1324 226h11v11h-11z" />
            <path d="M1324 247h11v11h-11z" />
            <path d="M1324 258h11v10h-11z" />
            <path d="M1324 268h11v11h-11z" />
            <path d="M1324 279h11v10h-11z" />
            <path d="M1324 237h11v10h-11z" fill="transparent" />
            <path d="M1314 279h10v10h-10z" />
            <path d="M1314 195h10v10h-10z" />
            <path d="M1304 195h10v10h-10z" fill="transparent" />
            <path d="M1304 205h10v11h-10z" />
            <path d="M1304.1 227.3l.6-10.5 10.1.7-.7 10.5z" />
            <path d="M1304 226h10v11h-10z" />
            <path d="M1304 247h10v11h-10z" />
            <path d="M1304 258h10v10h-10z" />
            <path d="M1304 279h10v10h-10z" />
            <path d="M1304 237h10v10h-10z" fill="transparent" />
            <path d="M1294 279h10v10h-10z" />
            <path d="M1285 184h9v11h-9z" />
            <path d="M1285 195h9v10h-9z" />
            <path d="M1285 205h9v11h-9z" />
            <path d="M1285 216h9v10h-9z" />
            <path d="M1285 226h9v11h-9z" />
            <path d="M1285 247h9v11h-9z" />
            <path d="M1285 258h9v10h-9z" />
            <path d="M1283.5 279.3l1.7-10.4 9.9 1.8-1.7 10.3z" />
            <path d="M1285 279h9v10h-9z" />
            <path d="M1285 237h9v11h-9z" />
          </g>

          <g className="meander">
            <path d="M1335 279h10v10h-10zM1335 184h10v11h-10zM1335 204h10v11h-10zM1335 216h10v10h-10zM1335 237h10v10h-10zM1335 247h10v11h-10z" />
            <path d="M1333.3 269.4l.5-10.5 10.1.6-.5 10.5z" />
            <path d="M1335 268h10v11h-10zM1335.3 237.8l.6-10.4 10.1.6-.7 10.5zM1324 184h11v11h-11z" />
            <path d="M1324 205h11v11h-11z" />
            <path d="M1314 184h10v11h-10zM1314 205h10v11h-10zM1314 216h10v10h-10zM1314.1 248.3l.7-10.4 10 .7-.6 10.4z" />
            <path d="M1314 247h10v11h-10zM1314 258h10v10h-10zM1314 269h10v11h-10zM1314 226h10v11h-10zM1304 195.7l.8-10.4 10 .8-.7 10.4zM1304 268h10v11h-10zM1294 184h10v11h-10zM1294.7 207.1l-.7-10.5 10-.8.8 10.4z" />
            <path d="M1294 216.8l.7-10.5 10 .7-.7 10.5z" />
            <path d="M1294 216h10v10h-10z" />
            <path d="M1295.8 249.2l-.9-10.5 10-1 .9 10.5z" />
            <path d="M1294 247h10v11h-10zM1294 258h10v10h-10zM1293 279.9l.7-10.5 10 .7-.7 10.5zM1294 226h10v11h-10z" />
          </g>
        </g>
        <g id="top_37_">
          <g className="trim">
            <path d="M1355.6 396.6l-1.7-10.3 9.9-1.8 1.7 10.4zM1355 289h10v11h-10zM1355 300h10v10h-10zM1355 310h10v11h-10zM1354.3 332.4l.8-10.5 10 .8-.8 10.5zM1355 342h10v10h-10zM1354.3 363.9l.8-10.5 10 .8-.8 10.5z" />
            <path d="M1355 363h10v10h-10zM1355 373h10v11h-10zM1355 331h10v11h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1345 289h10v11h-10z" />
            <path d="M1345 300h10v10h-10z" />
            <path d="M1345 310h10v11h-10z" />
            <path d="M1345 321h10v10h-10z" />
            <path d="M1345 331h10v11h-10z" />
            <path d="M1345 352h10v11h-10z" />
            <path d="M1346 363h10v10h-10z" />
            <path d="M1345 373h10v11h-10z" />
            <path d="M1345 384h10v10h-10z" />
            <path d="M1345 341h10v10h-10z" />
            <path d="M1334.2 311.3l.8-10.4 10 .8-.8 10.4z" />
            <path d="M1324 300h11v10h-11z" />
            <path d="M1324 321h11v10h-11z" />
            <path d="M1324 331h11v11h-11z" fill="transparent" />
            <path d="M1324 352h11v11h-11z" />
            <path d="M1324 363h11v10h-11z" />
            <path d="M1324 373h11v11h-11z" />
            <path d="M1324 384h11v10h-11z" />
            <path d="M1324 342h11v10h-11z" />
            <path d="M1314 384h10v10h-10z" fill="transparent" />
            <path d="M1314 300h10v10h-10z" />
            <path d="M1304 300h10v10h-10z" />
            <path d="M1304 310h10v11h-10z" />
            <path d="M1304.1 332.4l.6-10.5 10.1.7-.7 10.5z" />
            <path d="M1304 331h10v11h-10z" />
            <path d="M1304 352h10v11h-10z" />
            <path d="M1304 363h10v10h-10z" />
            <path d="M1304 384h10v10h-10z" fill="transparent" />
            <path d="M1304 342h10v10h-10z" fill="transparent" />
            <path d="M1294 384h10v10h-10z" />
            <path d="M1285 289h9v11h-9z" />
            <path d="M1285 300h9v10h-9z" />
            <path d="M1285 310h9v11h-9z" />
            <path d="M1285 321h9v10h-9z" />
            <path d="M1285 331h9v11h-9z" />
            <path d="M1285 352h9v11h-9z" />
            <path d="M1285 363h9v10h-9z" />
            <path d="M1283.5 384.4l1.7-10.4 9.9 1.8-1.7 10.3z" />
            <path d="M1285 384h9v10h-9z" />
            <path d="M1285 342h9v11h-9z" />
          </g>
          <g className="meander">
            <path d="M1335 384h10v10h-10zM1335 289h10v11h-10zM1335 309h10v11h-10zM1335 321h10v10h-10zM1335 342h10v10h-10zM1335 352h10v11h-10z" />
            <path d="M1333.3 374.5l.5-10.5 10.1.6-.5 10.5z" />
            <path d="M1335 373h10v11h-10zM1335.3 342.9l.6-10.5 10.1.7-.7 10.5zM1324 289h11v11h-11z" />
            <path d="M1324 310h11v11h-11z" />
            <path d="M1314 289h10v11h-10zM1314 310h10v11h-10zM1314 321h10v10h-10zM1314.1 353.4l.7-10.5 10 .7-.6 10.5z" />
            <path d="M1314 352h10v11h-10zM1314 363h10v10h-10zM1314 374h10v11h-10zM1314 331h10v11h-10zM1304 300.8l.8-10.4 10 .8-.7 10.4zM1304 373h10v11h-10zM1294 289h10v11h-10zM1294.7 312.1l-.7-10.4 10-.8.8 10.4z" />
            <path d="M1294 321.9l.7-10.5 10 .7-.7 10.5z" />
            <path d="M1294 321h10v10h-10z" />
            <path d="M1295.8 354.3l-.9-10.5 10-1 .9 10.5z" />
            <path d="M1294 352h10v11h-10zM1294 363h10v10h-10zM1293 385l.7-10.5 10 .7-.7 10.5zM1294 331h10v11h-10z" />
          </g>
        </g>
        <g id="top_36_">
          <g className="trim">
            <path d="M1355.6 501.7l-1.7-10.3 9.9-1.8 1.7 10.4zM1355 394h10v11h-10zM1355 405h10v10h-10zM1355 415h10v11h-10zM1354.3 437.5l.8-10.5 10 .8-.8 10.5zM1355 447h10v11h-10zM1354.3 469l.8-10.5 10 .8-.8 10.5z" />
            <path d="M1355 469h10v10h-10zM1355 479h10v11h-10zM1355 436h10v11h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1345 394h10v11h-10z" />
            <path d="M1345 405h10v10h-10z" />
            <path d="M1345 415h10v11h-10z" />
            <path d="M1345 426h10v10h-10z" />
            <path d="M1345 436h10v11h-10z" />
            <path d="M1345 458h10v11h-10z" />
            <path d="M1346 469h10v10h-10z" />
            <path d="M1345 479h10v11h-10z" />
            <path d="M1345 490h10v10h-10z" fill="transparent" />
            <path d="M1345 446h10v11h-10z" />
            <path d="M1334.2 416.4l.8-10.4 10 .8-.8 10.4z" />
            <path d="M1324 405h11v10h-11z" />
            <path d="M1324 426h11v10h-11z" />
            <path d="M1324 436h11v11h-11z" />
            <path d="M1324 458h11v11h-11z" />
            <path d="M1324 469h11v10h-11z" />
            <path d="M1324 479h11v11h-11z" />
            <path d="M1324 490h11v10h-11z" />
            <path d="M1324 447h11v11h-11z" />
            <path d="M1314 490h10v10h-10z" />
            <path d="M1314 405h10v10h-10z" />
            <path d="M1304 405h10v10h-10z" />
            <path d="M1304 415h10v11h-10z" />
            <path d="M1304.1 437.5l.6-10.5 10.1.7-.7 10.5z" />
            <path d="M1304 436h10v11h-10z" />
            <path d="M1304 458h10v11h-10z" />
            <path d="M1304 469h10v10h-10z" />
            <path d="M1304 490h10v10h-10z" />
            <path d="M1304 447h10v11h-10z" />
            <path d="M1294 490h10v10h-10z" />
            <path d="M1285 394h9v11h-9z" />
            <path d="M1285 405h9v10h-9z" />
            <path d="M1285 415h9v11h-9z" />
            <path d="M1285 426h9v10h-9z" fill="transparent" />
            <path d="M1285 436h9v11h-9z" />
            <path d="M1285 458h9v11h-9z" />
            <path d="M1285 469h9v10h-9z" fill="transparent" />
            <path d="M1283.5 489.5l1.7-10.4 9.9 1.7-1.7 10.4z" />
            <path d="M1285 490h9v10h-9z" />
            <path d="M1285 447h9v12h-9z" />
          </g>
          <g className="meander">
            <path d="M1335 490h10v10h-10zM1335 394h10v11h-10zM1335 414h10v11h-10zM1335 426h10v10h-10zM1335 447h10v11h-10zM1335 458h10v11h-10z" />
            <path d="M1333.3 479.6l.5-10.5 10.1.6-.5 10.5z" />
            <path d="M1335 479h10v11h-10zM1335.3 448l.6-10.5 10.1.7-.7 10.5zM1324 394h11v11h-11z" />
            <path d="M1324 415h11v11h-11z" />
            <path d="M1314 394h10v11h-10zM1314 415h10v11h-10zM1314 426h10v10h-10zM1314.1 458.5l.7-10.5 10 .7-.6 10.5z" />
            <path d="M1314 458h10v11h-10zM1314 469h10v10h-10zM1314 480h10v11h-10zM1314 436h10v11h-10zM1304 405.9l.8-10.5 10 .9-.7 10.4zM1304 479h10v11h-10zM1294 394h10v11h-10zM1294.7 417.2l-.7-10.4 10-.8.8 10.4z" />
            <path d="M1294 427l.7-10.5 10 .7-.7 10.5z" />
            <path d="M1294 426h10v10h-10z" />
            <path d="M1295.8 459.3l-.9-10.4 10-1 .9 10.5z" />
            <path d="M1294 458h10v11h-10zM1294 469h10v10h-10zM1293 490.1l.7-10.5 10 .7-.7 10.5zM1294 436h10v11h-10z" />
          </g>
        </g>
        <g id="top_35_">
          <g className="trim">
            <path d="M1355.6 606.8l-1.7-10.3 9.9-1.8 1.7 10.4zM1355 500h10v11h-10zM1355 511h10v10h-10zM1355 521h10v11h-10zM1354.3 542.5l.8-10.4 10 .8-.8 10.4zM1355 553h10v10h-10zM1354.3 574.1l.8-10.5 10 .8-.8 10.5z" />
            <path d="M1355 574h10v10h-10zM1355 584h10v11h-10zM1355 542h10v11h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1345 500h10v11h-10z" />
            <path d="M1345 511h10v10h-10z" />
            <path d="M1345 521h10v11h-10z" />
            <path d="M1345 532h10v10h-10z" />
            <path d="M1345 542h10v11h-10z" />
            <path d="M1345 563h10v11h-10z" />
            <path d="M1346 574h10v10h-10z" />
            <path d="M1345 584h10v11h-10z" />
            <path d="M1345 595h10v10h-10z" />
            <path d="M1345 551h10v11h-10z" />
            <path d="M1334.2 521.5l.8-10.5 10 .9-.8 10.4z" />
            <path d="M1324 511h11v10h-11z" />
            <path d="M1324 532h11v10h-11z" />
            <path d="M1324 542h11v11h-11z" />
            <path d="M1324 563h11v11h-11z" />
            <path d="M1324 574h11v10h-11z" />
            <path d="M1324 584h11v11h-11z" />
            <path d="M1324 595h11v10h-11z" />
            <path d="M1324 553h11v10h-11z" />
            <path d="M1314 595h10v10h-10z" />
            <path d="M1314 511h10v10h-10z" />
            <path d="M1304 511h10v10h-10z" />
            <path d="M1304 521h10v11h-10z" />
            <path d="M1304.1 542.6l.6-10.5 10.1.7-.7 10.5z" />
            <path d="M1304 542h10v11h-10z" />
            <path d="M1304 563h10v11h-10z" />
            <path d="M1304 574h10v10h-10z" />
            <path d="M1304 595h10v10h-10z" />
            <path d="M1304 553h10v10h-10z" />
            <path d="M1294 595h10v10h-10z" />
            <path d="M1285 500h9v11h-9z" />
            <path d="M1285 511h9v10h-9z" />
            <path d="M1285 521h9v11h-9z" />
            <path d="M1285 532h9v10h-9z" />
            <path d="M1285 542h9v11h-9z" />
            <path d="M1285 563h9v11h-9z" />
            <path d="M1285 574h9v10h-9z" />
            <path d="M1283.5 594.6l1.7-10.4 9.9 1.7-1.7 10.4z" />
            <path d="M1285 595h9v10h-9z" />
            <path d="M1285 553h9v11h-9z" />
          </g>
          <g className="meander">
            <path d="M1335 595h10v10h-10zM1335 500h10v11h-10zM1335 520h10v10h-10zM1335 532h10v10h-10zM1335 553h10v10h-10zM1335 563h10v11h-10z" />
            <path d="M1333.3 584.7l.5-10.5 10.1.6-.5 10.5z" />
            <path d="M1335 584h10v11h-10zM1335.3 553.1l.6-10.5 10.1.7-.7 10.5zM1324 500h11v11h-11z" />
            <path d="M1324 521h11v11h-11z" />
            <path d="M1314 500h10v11h-10zM1314 521h10v11h-10zM1314 532h10v10h-10zM1314.1 563.6l.7-10.5 10 .7-.6 10.5z" />
            <path d="M1314 563h10v11h-10zM1314 574h10v10h-10zM1314 585h10v11h-10zM1314 542h10v11h-10zM1304 511l.8-10.5 10 .8-.7 10.5zM1304 584h10v11h-10zM1294 500h10v11h-10zM1294.7 522.3l-.7-10.4 10-.9.8 10.5z" />
            <path d="M1294 532.1l.7-10.5 10 .7-.7 10.5z" />
            <path d="M1294 532h10v10h-10z" />
            <path d="M1295.8 564.4l-.9-10.4 10-1 .9 10.5z" />
            <path d="M1294 563h10v11h-10zM1294 574h10v10h-10zM1293 595.1l.7-10.4 10 .7-.7 10.4zM1294 542h10v11h-10z" />
          </g>
        </g>
        <g id="top_34_">
          <g className="trim">
            <path d="M1355.6 711.9l-1.7-10.4 9.9-1.7 1.7 10.4zM1355 605h10v10h-10zM1355 615h10v11h-10zM1355 626h10v10h-10zM1354.3 647.6l.8-10.4 10 .8-.8 10.4zM1355 657h10v11h-10zM1354.3 679.2l.8-10.5 10 .8-.8 10.5z" />
            <path d="M1355 678h10v11h-10zM1355 689h10v10h-10zM1355 647h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1345 605h10v10h-10z" />
            <path d="M1345 615h10v11h-10z" />
            <path d="M1345 626h10v10h-10z" />
            <path d="M1345 636h10v11h-10z" />
            <path d="M1345 647h10v10h-10z" />
            <path d="M1345 668h10v10h-10z" />
            <path d="M1346 678h10v11h-10z" />
            <path d="M1345 689h10v10h-10z" />
            <path d="M1345 699h10v11h-10z" />
            <path d="M1345 656h10v11h-10z" />
            <path d="M1334.2 626.6l.8-10.5 10 .8-.8 10.5z" />
            <path d="M1324 615h11v11h-11z" fill="transparent" />
            <path d="M1324 636h11v11h-11z" fill="transparent" />
            <path d="M1324 647h11v10h-11z" fill="transparent" />
            <path d="M1324 668h11v10h-11z" />
            <path d="M1324 678h11v11h-11z" />
            <path d="M1324 689h11v10h-11z" />
            <path d="M1324 699h11v11h-11z" />
            <path d="M1324 657h11v11h-11z" />
            <path d="M1314 699h10v11h-10z" />
            <path d="M1314 615h10v11h-10z" />
            <path d="M1304 615h10v11h-10z" />
            <path d="M1304 626h10v10h-10z" />
            <path d="M1304.1 647.7l.6-10.5 10.1.7-.7 10.5z" />
            <path d="M1304 647h10v10h-10z" />
            <path d="M1304 668h10v10h-10z" />
            <path d="M1304 678h10v11h-10z" />
            <path d="M1304 699h10v11h-10z" />
            <path d="M1304 657h10v11h-10z" />
            <path d="M1294 699h10v11h-10z" />
            <path d="M1285 605h9v10h-9z" />
            <path d="M1285 615h9v11h-9z" />
            <path d="M1285 626h9v10h-9z" />
            <path d="M1285 636h9v11h-9z" />
            <path d="M1285 647h9v10h-9z" fill="transparent" />
            <path d="M1285 668h9v10h-9z" />
            <path d="M1285 678h9v11h-9z" />
            <path d="M1283.5 699.7l1.7-10.4 9.9 1.7-1.7 10.4z" />
            <path d="M1285 699h9v11h-9z" />
            <path d="M1285 657h9v12h-9z" />
          </g>
          <g className="meander">
            <path d="M1335 699h10v11h-10zM1335 605h10v10h-10zM1335 625h10v10h-10zM1335 636h10v11h-10zM1335 657h10v11h-10zM1335 668h10v10h-10z" />
            <path d="M1333.3 689.8l.5-10.5 10.1.6-.5 10.5z" />
            <path d="M1335 689h10v10h-10zM1335.3 658.2l.6-10.5 10.1.7-.7 10.5zM1324 605h11v10h-11z" />
            <path d="M1324 626h11v10h-11z" />
            <path d="M1314 605h10v10h-10zM1314 626h10v10h-10zM1314 636h10v11h-10zM1314.1 668.7l.7-10.5 10 .7-.6 10.5z" />
            <path d="M1314 668h10v10h-10zM1314 678h10v11h-10zM1314 690h10v11h-10zM1314 647h10v10h-10zM1304 616.1l.8-10.5 10 .8-.7 10.5zM1304 689h10v10h-10zM1294 605h10v10h-10zM1294.7 627.4l-.7-10.5 10-.8.8 10.5z" />
            <path d="M1294 637.2l.7-10.5 10 .7-.7 10.5z" />
            <path d="M1294 636h10v11h-10z" />
            <path d="M1295.8 669.5l-.9-10.4 10-1 .9 10.5z" />
            <path d="M1294 668h10v10h-10zM1294 678h10v11h-10zM1293 700.2l.7-10.4 10 .7-.7 10.4zM1294 647h10v10h-10z" />
          </g>
        </g>
        <g id="top_33_">
          <g className="trim">
            <path d="M1355.5 820l-1.7-10.7 10-1.7 1.7 10.6zM1355 710h10v10h-10zM1355 720h10v11h-10zM1355 731h10v10h-10zM1354.2 753.9l.8-10.7 10.1.8-.8 10.8zM1355 762h10v14h-10z" />
            <path d="M1354.2 786.3l.8-10.7 10.1.8-.8 10.8z" />
            <path d="M1355 786h10v11h-10zM1355 797h10v10h-10zM1355 752h10v10h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1345 710h10v10h-10z" />
            <path d="M1345 720h10v11h-10z" />
            <path d="M1345 731h10v10h-10z" />
            <path d="M1345 741h10v11h-10z" />
            <path d="M1345 752h10v10h-10z" />
            <path d="M1345 776h10v10h-10z" />
            <path d="M1346 786h10v11h-10z" />
            <path d="M1345 797h10v10h-10z" />
            <path d="M1345 807h10v11h-10z" />
            <path d="M1345 761h10v14h-10z" />
            <path d="M1333.8 732.3l.8-10.8 10.2.9-.8 10.7z" />
            <path d="M1323 720h12v11h-12z" />
            <path d="M1323 741h12v11h-12z" />
            <path d="M1323 752h12v10h-12z" />
            <path d="M1323 776h12v10h-12z" />
            <path d="M1323 786h12v11h-12z" />
            <path d="M1323 797h12v10h-12z" />
            <path d="M1323 807h12v11h-12z" />
            <path d="M1323 762h12v14h-12z" />
            <path d="M1313 807h10v11h-10z" />
            <path d="M1313 720h10v11h-10z" />
            <path d="M1303 720h10v11h-10z" />
            <path d="M1303 731h10v10h-10z" />
            <path d="M1303.3 754l.7-10.8 10.1.7-.6 10.8z" />
            <path d="M1303 752h10v10h-10z" />
            <path d="M1303 776h10v10h-10z" />
            <path d="M1303 786h10v11h-10z" />
            <path d="M1303 807h10v11h-10z" />
            <path d="M1303 762h10v14h-10z" />
            <path d="M1293 807h10v11h-10z" />
            <path d="M1284 710h9v10h-9z" />
            <path d="M1284 720h9v11h-9z" />
            <path d="M1284 731h9v10h-9z" />
            <path d="M1284 741h9v11h-9z" />
            <path d="M1284 752h9v10h-9z" />
            <path d="M1284 776h9v10h-9z" />
            <path d="M1284 786h9v11h-9z" fill="transparent" />
            <path d="M1282.5 807.4l1.7-10.6 10 1.7-1.6 10.7z" />
            <path d="M1284 807h9v11h-9z" />
            <path d="M1284 762h9v15h-9z" />
          </g>
          <g className="meander">
            <path d="M1335 807h10v11h-10zM1335 710h10v10h-10zM1335 730h10v10h-10zM1335 741h10v11h-10zM1335 762h10v14h-10zM1335 776h10v10h-10z" />
            <path d="M1332.9 797.3l.5-10.8 10.2.6-.5 10.7z" />
            <path d="M1335 797h10v10h-10zM1334.9 764.8l.7-10.8 10.1.7-.6 10.8zM1323 710h12v10h-12z" />
            <path d="M1323 731h12v10h-12z" />
            <path d="M1313 710h10v10h-10zM1313 731h10v10h-10zM1313 741h10v11h-10zM1313.5 775.6l.7-10.8 10.1.7-.6 10.8z" />
            <path d="M1313 776h10v10h-10zM1313 786h10v11h-10zM1313 798h10v10h-10zM1313 752h10v10h-10zM1303.3 721.5l.8-10.8 10.1.9-.8 10.7zM1303 797h10v10h-10zM1293 710h10v10h-10zM1293.9 733.1l-.8-10.7 10.1-.9.8 10.8z" />
            <path d="M1293.1 743.2l.7-10.8 10.2.7-.7 10.8z" />
            <path d="M1293 741h10v11h-10z" />
            <path d="M1295 776.4l-1-10.7 10.2-1 .9 10.8z" />
            <path d="M1293 776h10v10h-10zM1293 786h10v11h-10zM1292.1 808l.7-10.8 10.2.7-.7 10.8zM1293 752h10v10h-10z" />
          </g>
        </g>
        <g id="top_32_">
          <g className="trim">
            <path d="M1355.6 187.5l-1.7-10.4 9.9-1.7 1.7 10.4zM1355 80h10v11h-10zM1355 91h10v10h-10zM1355 101h10v11h-10zM1354.3 123.2l.8-10.4 10 .8-.8 10.4zM1355 133h10v10h-10zM1354.3 154.8l.8-10.5 10 .8-.8 10.5z" />
            <path d="M1355 154h10v10h-10zM1355 164h10v11h-10zM1355 122h10v11h-10z" />
          </g>
          <g className="frame-white">
            <path d="M1345 80h10v11h-10z" />
            <path d="M1345 91h10v10h-10z" />
            <path d="M1345 101h10v11h-10z" />
            <path d="M1345 112h10v10h-10z" />
            <path d="M1345 122h10v11h-10z" />
            <path d="M1345 143h10v11h-10z" />
            <path d="M1346 154h10v10h-10z" />
            <path d="M1345 164h10v11h-10z" />
            <path d="M1345 175h10v10h-10z" />
            <path d="M1345 132h10v10h-10z" />
            <path d="M1334.2 102.2l.8-10.5 10 .8-.8 10.5z" />
            <path d="M1324 91h11v10h-11z" />
            <path d="M1324 112h11v10h-11z" />
            <path d="M1324 122h11v11h-11z" />
            <path d="M1324 143h11v11h-11z" />
            <path d="M1324 154h11v10h-11z" />
            <path d="M1324 164h11v11h-11z" />
            <path d="M1324 175h11v10h-11z" />
            <path d="M1324 133h11v10h-11z" />
            <path d="M1314 175h10v10h-10z" />
            <path d="M1314 91h10v10h-10z" />
            <path d="M1304 91h10v10h-10z" />
            <path d="M1304 101h10v11h-10z" />
            <path d="M1304.1 123.3l.6-10.5 10.1.7-.7 10.5z" />
            <path d="M1304 122h10v11h-10z" />
            <path d="M1304 143h10v11h-10z" />
            <path d="M1304 154h10v10h-10z" />
            <path d="M1304 175h10v10h-10z" />
            <path d="M1304 133h10v10h-10z" />
            <path d="M1294 175h10v10h-10z" />
            <path d="M1285 80h9v11h-9z" />
            <path d="M1285 91h9v10h-9z" />
            <path d="M1285 101h9v11h-9z" />
            <path d="M1285 112h9v10h-9z" />
            <path d="M1285 122h9v11h-9z" />
            <path d="M1285 143h9v11h-9z" />
            <path d="M1285 154h9v10h-9z" />
            <path d="M1283.5 175.3l1.7-10.4 9.9 1.7-1.7 10.4z" />
            <path d="M1285 175h9v10h-9z" />
            <path d="M1285 133h9v11h-9z" fill="transparent" />
          </g>
          <g className="meander">
            <path d="M1335 175h10v10h-10zM1335 80h10v11h-10zM1335 100h10v11h-10zM1335 112h10v10h-10zM1335 133h10v10h-10zM1335 143h10v11h-10z" />
            <path d="M1333.3 165.4l.5-10.5 10.1.6-.5 10.5z" />
            <path d="M1335 164h10v11h-10zM1335.3 133.8l.6-10.5 10.1.7-.7 10.5zM1324 80h11v11h-11z" />
            <path d="M1324 101h11v11h-11z" />
            <path d="M1314 80h10v11h-10zM1314 101h10v11h-10zM1314 112h10v10h-10zM1314.1 144.3l.7-10.5 10 .7-.6 10.5z" />
            <path d="M1314 143h10v11h-10zM1314 154h10v10h-10zM1314 165h10v11h-10zM1314 122h10v11h-10zM1304 91.7l.8-10.5 10 .8-.7 10.5zM1304 164h10v11h-10zM1294 80h10v11h-10zM1294.7 103l-.7-10.5 10-.8.8 10.5z" />
            <path d="M1294 112.8l.7-10.5 10 .7-.7 10.5z" />
            <path d="M1294 112h10v10h-10z" />
            <path d="M1295.8 145.1l-.9-10.4 10-1 .9 10.5z" />
            <path d="M1294 143h10v11h-10zM1294 154h10v10h-10zM1293 175.8l.7-10.5 10 .7-.7 10.5zM1294 122h10v11h-10z" />
          </g>
        </g>
      </g>
      <g id="topRt">
        <g className="meander">
          <path
            d="M1333.7 41.3h10v10h-10z"
            transform="matrix(-.0665 .9978 -.9978 -.0665 1474.0021 -1286.3651)"
          />
          <path d="M1334 51h10v10h-10z" />
          <path
            d="M1334.7 71.3h10v10h-10z"
            transform="rotate(84.8061117 1339.73240976 76.32875662)"
          />
          <path d="M1334 61h10v10h-10zM1323 41h10v10h-10zM1313 41h10v10h-10zM1293 41h10v10h-10z" />
          <path
            d="M1293.5 51.1h10v10h-10z"
            transform="matrix(.07441 .9972 -.9972 .07441 1257.8114 -1242.984)"
          />
          <path d="M1303 41h10v10h-10zM1293 61h10v10h-10zM1303 62h10v10h-10zM1313 61h10v10h-10z" />
          <path
            d="M1313.5 51.1h10v10h-10z"
            transform="rotate(99.462 1318.47874163 56.07122187)"
          />
          <path d="M1313 31h10v10h-10zM1313 21h10v10h-10zM1303 21h10v10h-10zM1293 21h10v10h-10zM1283 21h10v10h-10z" />
        </g>
        <g className="frame-white">
          <path d="M1283 31h10v10h-10z" />
          <path d="M1284.2 51.9l-1.3-10.2 9.9-1.4 1.3 10.2z" />
          <path d="M1283 51h10v10h-10z" />
          <path d="M1283 72h10v10h-10z" />
          <path d="M1283.9 73.2l-.8-11.3 10-.8.8 11.3z" />
          <path
            d="M1323.7 71.3h10v10h-10z"
            transform="matrix(-.07666 .9971 -.9971 -.07666 1506.7064 -1242.6492)"
          />
          <path d="M1314 72h10v10h-10z" />
          <path d="M1304 72h10v10h-10z" />
          <path d="M1294 71h10v10h-10z" />
          <path d="M1323 20h10v10h-10z" />
          <path d="M1323 30h10v11h-10zM1324 50h10v11h-10z" />
          <path d="M1324 61h10v10h-10z" />
          <path d="M1334 20h10v10h-10z" />
          <path d="M1334.9 42.2l-.8-11.3 10-.8.8 11.3z" />
          <path d="M1346.2 50.9l-1.3-10.2 9.9-1.4 1.3 10.2z" />
          <path d="M1345 50h10v10h-10z" />
          <path d="M1345 71h10v10h-10z" />
          <path d="M1345.9 72.2l-.8-11.3 10-.8.8 11.3z" />
          <path d="M1303 51h10v10h-10zM1345 10h10v10h-10z" />
          <path d="M1345 30h10v10h-10z" />
          <path d="M1345.9 31.2l-.8-11.3 10-.8.8 11.3z" />
          <path d="M1312 9h10v11h-10z" />
          <path d="M1323.9 21.2l-.8-11.3 10-.8.8 11.3z" />
          <path d="M1334 9h10v10h-10z" />
          <path
            d="M1302.7 10.3h10v10h-10z"
            transform="matrix(-.07666 .9971 -.9971 -.07666 1423.276 -1287.3873)"
          />
          <path d="M1293 10h10v10h-10z" />
          <path d="M1283 11h10v10h-10z" />

          <path d="M1304 31h10v10h-10z" />
          <path d="M1293 31h10v10h-10z" />
        </g>
      </g>
      <g className="trim">
        <path d="M1355 0h10v10h-10zM1355 10h10v10h-10zM1355 20h10v10h-10z" />
        <path
          d="M1354.2 30.6h10v10h-10z"
          transform="rotate(94.4023618 1359.15138 35.55999331) scale(.99995)"
        />
        <path d="M1355 50h10v10h-10z" />
        <path
          d="M1354.8 61.6h10v10h-10z"
          transform="matrix(-.07676 .997 -.997 -.07676 1530.5112 -1284.0908)"
        />
        <path d="M1355 72h10v10h-10zM1355 40h10v10h-10zM1345 0h10v10h-10zM1333.6 10.1l.9-10 10.2.9-.9 10z" />
        <path d="M1324 0h10v10h-10zM1314 0h10v10h-10z" />
        <path d="M1302.5 10.4l1.7-9.8 10.1 1.6-1.7 9.9z" />
        <path d="M1293 0h11v10h-11zM1283 0h10v10h-10z" />
      </g>
      <g id="topLt">
        <g className="meander">
          <path
            d="M41.2 21.4h10v10h-10z"
            transform="matrix(.9978 .0665 -.0665 .9978 1.8582 -3.0133)"
          />
          <path d="M51 21h10v10H51z" />
          <path
            d="M71.2 20.4h10v10h-10z"
            transform="matrix(.9959 -.09053 .09053 .9959 -1.9867 7.0013)"
          />
          <path d="M61 21h10v10H61zM41 32h10v10H41zM41 42h10v10H41zM41 62h10v10H41z" />
          <path
            d="M50.9 61.6h10v10h-10z"
            transform="matrix(.9972 -.07441 .07441 .9972 -4.8039 4.3479)"
          />
          <path d="M41 52h10v10H41zM61 62h10v10H61zM62 52h10v10H62zM61 42h10v10H61z" />
          <path
            d="M50.9 41.6h10v10h-10z"
            transform="rotate(9.46 55.93507794 46.63432445)"
          />
          <path d="M31 42h10v10H31zM21 42h10v10H21zM21 52h10v10H21zM21 62h10v10H21zM21 72h10v10H21z" />
        </g>
        <g className="frame-white">
          <path d="M31 72h10v10H31z" />
          <path d="M51.8 80.9l-10.2 1.4-1.5-9.9L50.3 71z" />
          <path d="M51 72h10v10H51z" />
          <path d="M72 72h10v10H72z" />
          <path d="M73.1 81.2l-11.3.8-.8-9.9 11.3-.9z" />
          <path
            d="M71.2 31.4h10v10h-10z"
            transform="matrix(.9971 .07666 -.07666 .9971 3.0147 -5.7334)"
          />
          <path d="M72 41h10v10H72z" />
          <path d="M72 51h10v10H72z" />
          <path d="M71 61h10v10H71z" />
          <path d="M20 32h10v10H20z" />
          <path d="M30 32h11v10H30zM50 31h11v10H50z" />
          <path d="M61 31h10v10H61z" />
          <path d="M20 21h10v10H20z" />
          <path d="M42.1 30.2l-11.3.8-.8-9.9 11.3-.9z" />
          <path d="M50.8 18.9l-10.2 1.4-1.5-9.9L49.3 9z" />
          <path d="M50 10h10v10H50z" />
          <path d="M71 10h10v10H71z" />
          <path d="M72.1 19.2l-11.3.8-.8-9.9 11.3-.9z" />
          <path d="M51 52h10v10H51zM10 10h10v10H10z" />
          <path d="M30 10h10v10H30z" />
          <path d="M31.1 19.2l-11.3.8-.8-9.9 11.3-.9z" />
          <path d="M9 43h11v10H9z" />
          <path d="M21.1 41.2L9.8 42 9 32.1l11.3-.9z" />
          <path d="M9 21h10v10H9z" />
          <path
            d="M10.2 52.4h10v10h-10z"
            transform="matrix(.9971 .07666 -.07666 .9971 4.4451 -.9953)"
          />
          <path d="M10 62h10v10H10z" />
          <path d="M11 72h10v10H11z" />

          <path d="M31 51h10v10H31z" />
          <path d="M31 62h10v10H31z" />
        </g>
      </g>
      <g className="trim">
        <path d="M0 0h10v10H0zM10 0h10v10H10zM20 0h10v10H20z" />
        <path
          d="M30.4 1h10v10h-10z"
          transform="matrix(.997 .07676 -.07676 .997 .5642 -2.701)"
        />
        <path d="M50 0h10v10H50z" />
        <path
          d="M61.4.4h10v10h-10z"
          transform="matrix(.997 .07676 -.07676 .997 .608 -5.0823)"
        />
        <path d="M72 0h10v10H72zM40 0h10v10H40zM0 10h10v10H0zM10 31.5l-10-.9.9-10.2 9.9.9z" />
        <path d="M0 31h10v10H0zM0 41h10v10H0z" />
        <path d="M10.3 62.6L.4 60.9l1.7-10.1 9.8 1.7z" />
        <path d="M0 61h10v11H0zM0 72h10v10H0z" />
      </g>
      <g id="botLt">
        <g className="meander">
          <path
            d="M22.4 849h10v10h-10z"
            transform="matrix(.0665 -.9978 .9978 .0665 -826.485 824.5049)"
          />
          <path d="M22 839h10v10H22z" />
          <path
            d="M21.4 819h10v10h-10z"
            transform="matrix(-.09053 -.9959 .9959 -.09053 -791.7809 924.8408)"
          />
          <path d="M22 829h10v10H22zM33 849h10v10H33zM43 849h10v10H43zM63 849h10v10H63z" />
          <path
            d="M62.6 839.2h10v10h-10z"
            transform="matrix(-.07441 -.9972 .9972 -.07441 -769.1794 974.4695)"
          />
          <path d="M53 849h10v10H53zM63 829h10v10H63zM53 828h10v10H53zM43 829h10v10H43z" />
          <path
            d="M42.6 839.2h10v10h-10z"
            transform="rotate(-80.538 47.63876552 844.18588044)"
          />
          <path d="M43 859h10v10H43zM43 869h10v10H43zM53 869h10v10H53zM63 869h10v10H63zM73 869h10v10H73z" />
        </g>
        <g className="frame-white">
          <path d="M73 859h10v10H73z" />
          <path d="M81.9 848.4l1.4 10.2-9.9 1.4-1.4-10.2z" />
          <path d="M73 839h10v10H73z" />
          <path d="M73 818h10v10H73z" />
          <path d="M82.2 827.1l.8 11.3-9.9.7-.9-11.2z" />
          <path
            d="M32.4 819h10v10h-10z"
            transform="matrix(.07666 -.9971 .9971 .07666 -786.9964 798.0845)"
          />
          <path d="M42 818h10v10H42z" />
          <path d="M52 818h10v10H52z" />
          <path d="M62 819h10v10H62z" />
          <path d="M33 870h10v10H33z" />
          <path d="M33 859h10v11H33zM32 839h10v11H32z" />
          <path d="M32 829h10v10H32z" />
          <path d="M22 870h10v10H22z" />
          <path d="M31.2 858.1l.8 11.3-9.9.7-.9-11.2z" />
          <path d="M19.9 849.4l1.4 10.2-9.9 1.4-1.4-10.2z" />
          <path d="M11 840h10v10H11z" />
          <path d="M11 819h10v10H11z" />
          <path d="M20.2 828.1l.8 11.3-9.9.7-.9-11.2z" />
          <path d="M53 839h10v10H53zM11 880h10v10H11z" />
          <path d="M11 860h10v10H11z" />
          <path d="M20.2 869.1l.8 11.3-9.9.7-.9-11.2z" />
          <path d="M44 880h10v11H44z" />
          <path d="M42.2 879.1l.8 11.3-9.9.7-.9-11.2z" />
          <path d="M22 881h10v10H22z" fill="transparent" />
          <path
            d="M53.4 880h10v10h-10z"
            transform="matrix(.07666 -.9971 .9971 .07666 -828.4267 875.3465)"
          />
          <path d="M63 880h10v10H63z" />
          <path d="M73 879h10v10H73z" />
          <path d="M64 859h10v10H64z" />
          <path d="M53 859h10v10H53z" />
        </g>
        <g className="trim">
          <path d="M0 890h10v10H0zM0 880h10v10H0zM0 870h10v10H0z" />
          <path
            d="M.6 859.6h10v10H.6z"
            transform="matrix(.0767 -.9971 .9971 .0767 -856.8333 803.8749)"
          />
          <path d="M0 840h10v10H0z" />
          <path
            d="M.6 828.6h10v10H.6z"
            transform="matrix(.0767 -.9971 .9971 .0767 -825.9246 775.2528)"
          />
          <path d="M0 818h10v10H0zM0 850h10v10H0zM10 890h10v10H10zM31.2 890l-.9 10-10.2-.9.9-9.9z" />
          <path d="M31 890h10v10H31zM41 890h10v10H41z" />
          <path d="M62.3 889.7l-1.7 9.9-10.1-1.7 1.7-9.8z" />
          <path d="M61 890h11v10H61zM72 890h10v10H72z" />
        </g>
      </g>
      <g id="botRt">
        <g className="meander">
          <path
            d="M1313.8 868.6h10v10h-10z"
            transform="matrix(-.9978 -.0665 .0665 -.9978 2576.6057 1832.9702)"
          />
          <path d="M1304 869h10v10h-10z" />
          <path
            d="M1283.8 869.6h10v10h-10z"
            transform="matrix(-.9959 .09053 -.09053 -.9959 2651.5088 1628.9331)"
          />
          <path d="M1294 869h10v10h-10zM1314 858h10v10h-10zM1314 848h10v10h-10zM1314 828h10v10h-10z" />
          <path
            d="M1304.1 828.4h10v10h-10z"
            transform="matrix(-.9972 .07441 -.07441 -.9972 2676.4873 1566.9963)"
          />
          <path d="M1314 838h10v10h-10zM1294 828h10v10h-10zM1293 838h10v10h-10zM1294 848h10v10h-10z" />
          <path
            d="M1304.1 848.4h10v10h-10z"
            transform="rotate(-170.54 1309.06443638 853.33452812)"
          />
          <path d="M1324 848h10v10h-10zM1334 848h10v10h-10zM1334 838h10v10h-10zM1334 828h10v10h-10zM1334 818h10v10h-10z" />
        </g>
        <g className="frame-white">
          <path d="M1324 818h10v10h-10z" />
          <path d="M1313.2 819.1l10.2-1.4 1.5 9.9-10.2 1.4z" />
          <path d="M1304 818h10v10h-10z" />
          <path d="M1283 818h10v10h-10z" />
          <path d="M1291.9 818.8l11.3-.8.8 9.9-11.3.9z" />
          <path
            d="M1283.8 858.6h10v10h-10z"
            transform="matrix(-.9971 -.07666 .07666 -.9971 2507.6299 1823.4543)"
          />
          <path d="M1283 849h10v10h-10z" />
          <path d="M1283 839h10v10h-10z" />
          <path d="M1284 829h10v10h-10z" />
          <path d="M1335 858h10v10h-10z" />
          <path d="M1324 858h11v10h-11zM1304 859h11v10h-11z" />
          <path d="M1294 859h10v10h-10z" />
          <path d="M1335 869h10v10h-10z" />
          <path d="M1322.9 869.8l11.3-.8.8 9.9-11.3.9z" />
          <path d="M1314.2 881.1l10.2-1.4 1.5 9.9-10.2 1.4z" />
          <path d="M1305 880h10v10h-10z" />
          <path d="M1284 880h10v10h-10z" />
          <path d="M1292.9 880.8l11.3-.8.8 9.9-11.3.9z" />
          <path d="M1304 838h10v10h-10zM1345 880h10v10h-10z" />
          <path d="M1325 880h10v10h-10z" />
          <path d="M1333.9 880.8l11.3-.8.8 9.9-11.3.9z" />
          <path d="M1345 847h11v10h-11z" />
          <path d="M1343.9 858.8l11.3-.8.8 9.9-11.3.9z" />
          <path d="M1346 869h10v10h-10z" />
          <path
            d="M1344.8 837.6h10v10h-10z"
            transform="matrix(-.9971 -.07666 .07666 -.9971 2631.0601 1786.1924)"
          />
          <path d="M1324 839h10v10h-10z" />
          <path d="M1324 828h10v10h-10z" />
          <path d="M1345 828h10v10h-10z" />
          <path d="M1344 818h10v10h-10z" fill="transparent" />
        </g>
        <g className="trim">
          <path d="M1355 890h10v10h-10zM1345 890h10v10h-10zM1335 890h10v10h-10z" />
          <path
            d="M1324.6 889h10v10h-10z"
            transform="matrix(-.997 -.07676 .07676 -.997 2586.6167 1887.4385)"
          />
          <path d="M1305 890h10v10h-10z" />
          <path
            d="M1293.6 889.6h10v10h-10z"
            transform="matrix(-.997 -.07676 .07676 -.997 2524.6606 1886.2974)"
          />
          <path d="M1283 890h10v10h-10zM1315 890h10v10h-10zM1355 880h10v10h-10zM1355 868.5l10 .9-.9 10.2-9.9-.9z" />
          <path d="M1355 859h10v10h-10zM1355 849h10v10h-10z" />
          <path d="M1354.7 837.4l9.9 1.7-1.7 10.1-9.8-1.7z" />
          <path d="M1355 828h10v11h-10zM1355 818h10v10h-10z" />
        </g>
      </g>
      <text id="txt-shad" x="683.5" y="71" textAnchor="middle">
        NEФELE
      </text>
      <text x="682.5" y="70" textAnchor="middle">
        NEФELE
      </text>
    </StyledTileFrameSVG>
  );
};
export default TileFrameSVG;
