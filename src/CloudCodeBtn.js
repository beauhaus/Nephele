import React, { Component } from "react";
import styled from "styled-components";

const StyledBtn = styled.svg`
  width: 100%;
  height: 100%;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-linecap: round;
  &.ui-closed {
    & .brackets {
      opacity: 1;
      stroke-width: 8;
      fill: none;
      & #Lbracket {
        animation: leaveLt 0.4s cubic-bezier(0.72, 0.03, 0.33, 1.97) forwards;
      }
      & #Rbracket {
        animation: leaveRt 0.4s cubic-bezier(0.72, 0.03, 0.33, 1.97) forwards;
      }
    }
    g#cloud-group {
      & #outline {
        transform-origin: 50% 50%;
        fill: rgba(29, 52, 80, 0.4);
        animation: outline-un-squeeze 0.2s cubic-bezier(0.72, 0.03, 0.33, 1.97)
          forwards;
      }
      & #white-cloud {
        transform-origin: 50% 50%;
        animation: cloud-un-squeeze 0.2s cubic-bezier(0.72, 0.03, 0.33, 1.97)
          forwards;
      }
    }
    &:hover {
      g#cloud-group {
        & #white-cloud {
          transform-origin: 50% 50%;
          animation: cloud-squeeze 0.2s cubic-bezier(0.72, 0.03, 0.33, 1.97)
            forwards;
        }
        & #outline {
          animation: outline-squeeze 0.2s cubic-bezier(0.72, 0.03, 0.33, 1.97)
            forwards;
        }
      }
      & .brackets {
        & #Lbracket {
          animation: appearLt 0.2s cubic-bezier(0.72, 0.03, 0.33, 1.97) forwards;
        }
        & #Rbracket {
          animation: appearRt 0.2s cubic-bezier(0.72, 0.03, 0.33, 1.97) forwards;
        }
      }
    }
  }
  &.ui-open {
    g#cloud-group {
      transform-origin: 50% 50%;
      transform: scale3d(0.8, 1.1, 2);
      stroke: #fff;
      & #outline {
        opacity: 0;
      }
    }
    & .brackets {
      opacity: 1;
      stroke-width: 12;
      fill: none;
      & #Lbracket {
        opacity: 1;
        stroke: lightgreen;
        animation: unflipL 0.2s cubic-bezier(0.72, 0.03, 0.33, 1.97) forwards;
      }
      & #Rbracket {
        opacity: 1;
        stroke: lightgreen;
        animation: unflipR 0.2s cubic-bezier(0.72, 0.03, 0.33, 1.97) forwards;
      }
    }
    transform-origin: 50% 50%;
    &:hover {
      polyline#Lbracket {
        transform-origin: 25% 50%;
        stroke: #fff;
        animation: flipperL 0.3s ease-in-out 0.1s forwards;
      }
      polyline#Rbracket {
        transform-origin: 75% 50%;
        stroke: #fff;
        animation: flipperR 0.3s ease-in-out 0.1s forwards;
      }
    }
  }

  @keyframes appearRt {
    0% {
      opacity: 0;
      stroke: #fff;
      transform: translateX(40px);
    }

    100% {
      opacity: 1;
      stroke: lightgreen;
      transform: translateX(-20px);
    }
  }
  @keyframes leaveRt {
    0% {
      opacity: 1;
      stroke: lightgreen;
      transform: translateX(-20px);
    }

    100% {
      opacity: 0;
      transform: translateX(40px);
      stroke: lightgreen;
    }
  }

  @keyframes appearLt {
    0% {
      opacity: 0;
      stroke: #fff;
      transform: translateX(-40px);
    }

    100% {
      opacity: 1;
      stroke: lightgreen;
      transform: translateX(20px);
    }
  }
  @keyframes leaveLt {
    0% {
      opacity: 1;
      stroke: lightgreen;
      transform: translateX(20px);
    }

    100% {
      opacity: 0;
      transform: translateX(-40px);
      stroke: lightgreen;
    }
  }

  @keyframes cloud-un-squeeze {
    0% {
      transform-origin: 50% 50%;
      stroke: #fff;
    }
    100% {
      transform-origin: 50% 50%;
      transform: scale3d(1.2, 0.8, 1);
      stroke: #212121;
    }
  }
  @keyframes outline-un-squeeze {
    0% {
      transform-origin: 50% 50%;
      stroke: #fff;
    }
    100% {
      transform-origin: 50% 50%;
      transform: scale3d(1.2, 0.8, 1);
      stroke: #212121;
    }
  }

  @keyframes cloud-squeeze {
    0% {
      transform-origin: 50% 50%;
      transform: scale3d(1.1, 0.8, 0.5);
      stroke: #212121;
    }
    100% {
      transform: scale3d(0.8, 1.1, 2);
      stroke: #fff;
    }
  }
  @keyframes outline-squeeze {
    0% {
      transform-origin: 50% 50%;
      transform: scale3d(1.1, 0.8, 0.5);
      opacity: 1;
    }
    100% {
      transform: scale3d(0.8, 1.1, 2);
      opacity: 0;
    }
  }

  @keyframes unflipL {
    0% {
      transform-origin: 26% 50%;
      stroke: #b43838;
      transform: rotateY(180deg) translateX(-20px);
    }
    100% {
      transform-origin: 26% 50%;
      opacity: 1;
      stroke: #fff;
      transform: rotateY(0deg) translateX(20px);
    }
  }
  @keyframes unflipR {
    0% {
      transform-origin: 75% 50%;
      stroke: #b43838;
      transform: rotateY(180deg) translateX(28px);
    }
    100% {
      transform-origin: 75% 50%;
      stroke: #fff;
      transform: rotateY(0deg) translateX(-20px);
    }
  }
  @keyframes flipperL {
    0% {
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: rotateY(180deg) translateX(-28px);
      stroke: #b43838;
    }
  }
  @keyframes flipperR {
    0% {
      /* transform-origin: 75% 50%; */
      transform: rotateY(0deg) translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: rotateY(180deg) translateX(28px);
      stroke: #b43838;
    }
  }
`;

class CloudCodeBtn extends Component {
  state = {
    init: "state",
    msg: "start"
  };

  render() {
    console.log("p>btn: ", this.props);
    /* 2 states:
      closed-ui-btn
      open-ui-btn
    */
    const { sliderMode } = this.props;
    return (
      <StyledBtn
        className={sliderMode ? "ui-open" : "ui-closed"}
        viewBox="0 0 400 160"
        preserveAspectRatio="none"
      >
        <linearGradient
          id="white-grad"
          x1="200"
          x2="200"
          y1="145.6768"
          y2="14.3232"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ddd" stopOpacity="0" />
          <stop offset="1" stopColor="#ddd" />
        </linearGradient>

        <g id="cloud-group">
          <path
            id="white-cloud"
            fill="url(#white-grad)"
            d="M165.1 43c-13.2-34.3-32.5-9.3-26.1 8.9-1.4-23.2-20.4-1.2-13.9 20.4l-4.4-6.4C83 35.4 92.3 111.4 113.9 93c-11 22.6 30.2 57.9 46.1 28.1 5.9 23.1 52.9 44.1 63.2 6.9 0 .2 11.9 29.6 22.6.1 5.1 30.5 38.4 13.3 24.8-18.4v-.3c8.8 23.5 35 1.5 23.7-16.3-.2 0-1 .1-1.2 0 20.1-2.9 12.4-43.5-6.6-32.4 10.3-30.9-59.3-47.1-56.1-25.2-16.9-31.7-91.9-34.5-65 8.5l-.3-1z"
          />
          <path
            id="outline"
            d="M165.1 43c-13.2-34.3-32.5-9.3-26.1 8.9-1.4-23.2-20.4-1.2-13.9 20.4l-4.4-6.4C83 35.4 92.3 111.4 113.9 93c-11 22.6 30.2 57.9 46.1 28.1 5.9 23.1 52.9 44.1 63.2 6.9 0 .2 11.9 29.6 22.6.1 5.1 30.5 38.4 13.3 24.8-18.4v-.3c8.8 23.5 35 1.5 23.7-16.3-.2 0-1 .1-1.2 0 20.1-2.9 12.4-43.5-6.6-32.4 10.3-30.9-59.3-47.1-56.1-25.2-16.9-31.7-91.9-34.5-65 8.5l-.3-1z"
          />
        </g>
        <g className="brackets">
          <polyline id="Lbracket" points="100.2 150.4 27.8 80 100.2 9.6" />
          <polyline id="Rbracket" points="299.8 150.4 372.2 80 299.8 9.6" />
        </g>
      </StyledBtn>
    );
  }
}
export default CloudCodeBtn;
