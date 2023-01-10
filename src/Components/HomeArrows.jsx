import React from "react";

import arrowLeft from "../Assets/images/icons/arrow-left.png";
import arrowRight from "../Assets/images/icons/arrow-right.png";

const HomeArrows = () => {
  return (
    <div className="home-page__main--arrows">
      <img src={arrowLeft} alt="arrow left" />
      <img src={arrowRight} alt="arrow right" />
    </div>
  );
};

export default HomeArrows;
