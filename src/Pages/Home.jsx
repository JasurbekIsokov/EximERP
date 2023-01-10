import React from "react";

import { HomeLogo, HomeMain } from "../Components";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page__back-img"></div>
      <div className="home-page__back-filter"></div>
      <HomeLogo />
      <HomeMain />
    </div>
  );
};

export default Home;
