import React from "react";
import cn from "classnames";

import css from "./HumidityWidget.module.css";

const drawSVGAnimationIcon = (stopPosition, color) => {
  return (
    <svg
      className={cn(css["Widget-svg"])}
      width="351"
      height="142"
      viewBox="0 0 351 142"
      fill="url(#left-to-right)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="left-to-right" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#333FAA" stopOpacity="0.8">
            <animate
              dur="2s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to={stopPosition / 4}
            />
          </stop>
          <stop offset="0" stopColor="#333FAA" stopOpacity="0.55">
            <animate
              dur="2s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to={stopPosition / 2}
            />
          </stop>
          <stop offset="1" stopColor="#0028B8" stopOpacity="0">
            <animate
              dur="2s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to={stopPosition}
            />
          </stop>
          <stop offset="1" stopColor="transparent">
            <animate
              dur="2s"
              attributeName="offset"
              fill="freeze"
              from="0"
              to={stopPosition}
            />
          </stop>
        </linearGradient>
      </defs>
      <path
        d="M1 140C1 140 2.02135 84.3529 21.5 85.3339C35.4492 86.0365 38.3898 113.696 52 117.319C75.8258 123.663 74.0685 42.0412 98.5 42.8806C122.264 43.697 113.256 111.515 136.5 117.319C175.262 126.999 141.869 -0.228276 181.5 1.00897C220.626 2.23044 185.28 127.134 223.5 117.319C249.434 110.66 243 75.6915 261.5 73.1213C280 70.5511 277.745 134.678 304.5 120.809C322.446 111.506 320.438 73.1213 334 69.0505C349.5 64.3979 350.5 141.5 350.5 141.5"
        stroke={color}
      />
    </svg>
  );
};

export default drawSVGAnimationIcon;
