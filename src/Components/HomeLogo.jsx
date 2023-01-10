import React from "react";

import vector3 from "../Assets/images/Vector.svg";

const HomeLogo = () => {
  return (
    <div className="home-page__logo">
      <div className="home-page__logo--part1">
        <img src={vector3} alt="vector" />
      </div>
      <div className="home-page__logo--part2"></div>
      <div className="home-page__logo--part3">
        <p>software</p>
      </div>
    </div>
  );
};

export default HomeLogo;
