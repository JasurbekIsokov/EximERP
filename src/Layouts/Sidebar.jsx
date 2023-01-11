import React from "react";

import { useStateContext } from "../Contexts/ContextProvider";

import HomeLogo from "../Components/HomeLogo";

const Sidebar = () => {
  const { toogleNavLink } = useStateContext();
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <HomeLogo />
      </div>

      {/* Navbar */}
      <div className="sidebar__nav">
        <ul>
          <li className="sidebar__nav--back">
            <a href="#" className="back-white-link">
              Таможенное оформление
            </a>
          </li>
          <li>
            <a href="#">Сертификация груза</a>
          </li>
          <li>
            <a href="#">Определение кода ТНВ</a>
          </li>
          <li>
            <a href="#">Подготовка контракта</a>
          </li>
          <li>
            <a href="#">Образцы документов</a>
          </li>
          <li>
            <a href="#">Помощь</a>
          </li>

          <li style={{ display: toogleNavLink ? "inline-block" : "none" }}>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
