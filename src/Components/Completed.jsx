import React from "react";

import arrowBottomGray from "../Assets/images/icons/arrow-gray.png";

const Completed = () => {
  return (
    <div className="all-petition completed">
      <div className="all-petition__main">
        <div className="all-petition__main--left">
          <h3>Заявка №541156</h3>
          <p>от 15 октября 2020г. в 16:18</p>
        </div>
        <div className="all-petition__main--right">
          <button className="completed-bnt btn">Завершена</button>
          <img src={arrowBottomGray} alt="arrow bottom" />
        </div>
      </div>

      <div className="all-petition__hero">
        <div className="all-petition__hero--left">
          <div className="all-petition__hero--left-1">
            <h4>
              <div className="green-span"></div>Выставлен счёт на оплату
            </h4>
          </div>
        </div>
        <div className="all-petition__hero--right">
          <img src={arrowBottomGray} alt="arrow bottom" />
        </div>
      </div>
    </div>
  );
};

export default Completed;
