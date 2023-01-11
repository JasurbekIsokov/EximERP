import React, { useState } from "react";

import { useStateContext } from "../Contexts/ContextProvider";
import arrowBottomGray from "../Assets/images/icons/arrow-gray.png";

const Rejected = () => {
  const {
    activeDataRejected,
    closeDataRejected,
    dataOpenClickedRejected,
    handleToogleSubmitRejected,
  } = useStateContext();

  return (
    <div className="all-petition rejected">
      <div className="all-petition__main">
        <div className="all-petition__main--left">
          <h3>Заявка №541156</h3>
          <p>от 15 октября 2020г. в 16:18</p>
        </div>
        <div className="all-petition__main--right">
          <button className="btn" onClick={handleToogleSubmitRejected}>
            Отклонена
          </button>
          <img
            src={arrowBottomGray}
            alt="arrow bottom"
            onClick={dataOpenClickedRejected}
            style={{
              display: activeDataRejected ? "none" : "flex",
            }}
          />
        </div>
      </div>

      <div
        className="all-petition__hero"
        style={{ display: activeDataRejected ? "flex" : "none" }}
      >
        <div className="all-petition__hero--left">
          <div className="all-petition__hero--left-1">
            <h4>
              <div className="red-span"></div> Не хватает документов
            </h4>
            <h4>
              Причина отклонения заявки: <span>Не хватает документов</span>
            </h4>
            <h4>
              Причина отклонения заявки: <span>Нет отгрузочных документов</span>
            </h4>
          </div>
          <div className="all-petition__hero--left-2">
            <h4>Комментарий к заявке</h4>
            <p>
              Товарищи! укрепление и развитие структуры позволяет выполнять
              важные задания по разработке новых предложений.
            </p>
          </div>
        </div>
        <div className="all-petition__hero--right">
          <img
            src={arrowBottomGray}
            alt="arrow bottom"
            onClick={dataOpenClickedRejected}
            style={{ display: closeDataRejected ? "none" : "inline-block" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Rejected;
