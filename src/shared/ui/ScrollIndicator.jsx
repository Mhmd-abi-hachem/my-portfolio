import React from "react";
import { HiArrowSmDown } from "react-icons/hi";

function ScrollIndicator() {
  return (
    <div className="absolute bottom-[5vh] left-1/2 md:left-auto md:right-12 transform -translate-x-1/2 md:translate-x-0  flex items-center justify-center scroll-indicator-animate">
      <div className="relative  w-40 h-40 md:w-54 md:h-54">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-spin-slow">
          <defs>
            <path
              id="circlePath"
              d="M 200,200
               m -140,0
               a 140,140 0 1,1 280,0
               a 140,140 0 1,1 -280,0"
            />
          </defs>
          <text
            fill="#8e8e8e"
            fontSize="36"
            fontWeight="bold"
            letterSpacing="10"
          >
            <textPath href="#circlePath" startOffset="0%">
              • SCROLL DOWN • EXPLORE MORE • SCROLL DOWN • EXPLORE MORE
            </textPath>
          </text>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <HiArrowSmDown className="text-[#7b7b7b] text-5xl" />
        </div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
