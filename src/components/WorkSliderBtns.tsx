"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import React from "react";

// Define the props type
interface WorkSliderBtnsProps {
  containerStyles: string;
  btnStyles: string;
  iconsStyle: string;
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles, iconsStyle }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyle} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyle} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
