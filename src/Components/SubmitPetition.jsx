import React from "react";
import { useStateContext } from "../Contexts/ContextProvider";

import closeIcon from "../Assets/images/icons/close-icon.png";
import arrowBottom from "../Assets/images/icons/arrow-blue.png";
import arrowRight from "../Assets/images/icons/arrow-right-mini.png";

const SubmitPetition = () => {
  const { closeHandleClick } = useStateContext();

  return (
    <div className="submit-petition">
      <div className="submit-petition__back"></div>
      <div className="submit-petition__form">
        <div
          className="submit-petition__form--close"
          onClick={() => closeHandleClick("submitPetition")}
        >
          <img src={closeIcon} alt="close icon" />
        </div>
        <h2 className="submit-petition__form--title">Добавление заявки</h2>
        <p className="submit-petition__form--miniTitle">Выбор процедуры</p>
        <div className="submit-petition__form--items">
          <p>Выбрать...</p>
          <img src={arrowBottom} alt="arrow" />
        </div>
        <p className="submit-petition__form--miniTitle"> Выбор режима</p>
        <div className="submit-petition__form--items">
          <p>Выбрать...</p>
          <img src={arrowBottom} alt="arrow" />
        </div>
        <p className="submit-petition__form--miniTitle">
          Транспортная накладная ( TIR, CMR, жд, накладная, авиа накладная,
          коносамент и т.д
        </p>
        <div className="submit-petition__form--items submit-petition__form--items-back">
          <p>Выберите файл...</p>
          <img src={arrowRight} alt="arrow" />
        </div>

        <p className="submit-petition__form--miniTitle">Инвойс</p>
        <div className="submit-petition__form--items submit-petition__form--items-back">
          <p>Выберите файл...</p>
          <img src={arrowRight} alt="arrow" />
        </div>

        <p className="submit-petition__form--miniTitle">Упаковочный лист</p>
        <div className="submit-petition__form--items submit-petition__form--items-back">
          <p>Выберите файл...</p>
          <img src={arrowRight} alt="arrow" />
        </div>

        <p className="submit-petition__form--miniTitle">Конракт</p>
        <div className="submit-petition__form--items submit-petition__form--items-back">
          <p>Выберите файл...</p>
          <img src={arrowRight} alt="arrow" />
        </div>

        <p className="submit-petition__form--miniTitle">
          Сертификат происхождения
        </p>
        <div className="submit-petition__form--items submit-petition__form--items-back">
          <p>Выберите файл...</p>
          <img src={arrowRight} alt="arrow" />
        </div>

        <p className="submit-petition__form--miniTitle">
          Дополнительная документация
        </p>
        <div className="submit-petition__form--items submit-petition__form--items-back">
          <p>Выберите файл...</p>
          <img src={arrowRight} alt="arrow" />
        </div>

        <p className="submit-petition__form--miniTitle">Фотографии товаров</p>
        <div className="submit-petition__form--items submit-petition__form--items-back">
          <p>Выберите файл...</p>
          <img src={arrowRight} alt="arrow" />
        </div>

        <p className="submit-petition__form--miniTitle">
          Дополнительные услуги
        </p>

        <div className="submit-petition__form--checkbox">
          <input type="checkbox" />
          <p>Определение кодов ТНВЭД в “Узбекэспертиза”</p>
        </div>

        <div className="submit-petition__form--checkbox">
          <input type="checkbox" />
          <p>
            Составление договора ( контракта ) и сопроводительных документов{" "}
          </p>
        </div>

        <p className="submit-petition__form--miniTitle">Прочие документы</p>
        <div className="submit-petition__form--items submit-petition__form--items-back">
          <p>Выберите файл...</p>
          <img src={arrowRight} alt="arrow" />
        </div>

        <p className="submit-petition__form--miniTitle">Комментарий к заявке</p>
        <textarea
          className="submit-petition__form--comment"
          placeholder="Введите комментарий..."
        ></textarea>

        <button className="submit-petition__form--button btn">
          Подать заявку
        </button>
      </div>
    </div>
  );
};

export default SubmitPetition;
