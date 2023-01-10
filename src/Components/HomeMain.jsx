import React from "react";

import HomeArrows from "./HomeArrows";
import HomeDesc from "./HomeDesc";
import HomeNavbar from "./HomeNavbar";

const HomeMain = () => {
  return (
    <div className="home-page__main">
      <HomeNavbar />
      <HomeArrows />
      <HomeDesc />
    </div>
  );
};

export default HomeMain;
