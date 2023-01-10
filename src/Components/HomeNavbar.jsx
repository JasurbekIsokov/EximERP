import React from "react";
import { useNavigate } from "react-router-dom";

import faq from "../Assets/images/icons/faq-icon.png";
import information from "../Assets/images/icons/information-icon.png";
import login from "../Assets/images/icons/log-in.png";
import news from "../Assets/images/icons/news-icon.png";
import phone from "../Assets/images/icons/phone-icon.png";

const HomeNavbar = () => {
  const navigate = useNavigate();

  const navClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-page__main--navbars">
      <div className="home-page__main--nav home-page__main--nav-1">
        <div className="home-page__main--navbar home-page__main--navbar-1">
          <img src={phone} alt="icon" />
          <p>Контакты</p>
        </div>
      </div>
      <div className="home-page__main--nav home-page__main--nav-2">
        <div className="home-page__main--navbar home-page__main--navbar-2">
          <img src={information} alt="icon" />
          <p>О нас</p>
        </div>
      </div>
      <div
        className="home-page__main--nav home-page__main--nav-3"
        onClick={navClick}
      >
        <div className="home-page__main--navbar home-page__main--navbar-3">
          <img src={login} alt="icon" />
          <p>Вход</p>
        </div>
      </div>

      <div className="home-page__main--nav home-page__main--nav-4">
        <div className="home-page__main--navbar home-page__main--navbar-4">
          <img src={news} alt="icon" />
          <p>Новости</p>
        </div>
      </div>

      <div className="home-page__main--nav home-page__main--nav-5">
        <div className="home-page__main--navbar home-page__main--navbar-5">
          <img src={faq} alt="icon" />
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
