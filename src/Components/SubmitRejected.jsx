import React from "react";

import { useStateContext } from "../Contexts/ContextProvider";

import closeIcon from "../Assets/images/icons/close-icon.png";
import arrowBottom from "../Assets/images/icons/arrow-blue.png";
import arrowRight from "../Assets/images/icons/arrow-right-mini.png";

const SubmitRejected = () => {
  const { handleToogleSubmitRejected, handletooglePetition } =
    useStateContext();
  return (
    <div className="submit-rejected">
      <div className="submit-rejected__back"></div>
      <div className="submit-rejected__form">
        <div
          className="submit-petition__form--close"
          onClick={handleToogleSubmitRejected}
        >
          <img src={closeIcon} alt="close icon" />
        </div>

        <div className="submit-rejected__form--main">
          <div>
            <h2>Заявка №321551</h2>
            <p>29 декабря 2022г. в 16:20</p>
          </div>
          <div className="submit-rejected__form--main-left">
            <button className="btn" onClick={handleToogleSubmitRejected}>
              Создать копию
            </button>
            <button className="btn">К списку</button>
          </div>
        </div>

        <div className="submit-rejected__form--sections">
          <div className="submit-rejected__form--left">
            <div className="submit-rejected__form--status">
              <div>
                <div className="sircle"></div>
                <p>Статус</p>
              </div>
              <p>В обработке</p>
            </div>

            <div className="submit-rejected__form--status2">
              <div>
                <div className="sircle"></div>
                <p>Ожидается подтверждением клиенту</p>
              </div>
              <div className="submit-rejected__form--status2-desc">
                <h2>
                  Ответственный:<span>Александр Иванович</span>
                </h2>
                <p>
                  Контактная информация: <span>+998 ( 90 ) 857 23 42</span>
                </p>
              </div>
            </div>

            <div className="submit-rejected__form--pet">
              <h2>Заявка №321551</h2>
              <p>29 декабря 2022г. в 16:20</p>

              <div className="submit-rejected__form--box">
                <h2>Выбор процедуры</h2>
                <p id="gray-text">Импорт</p>
              </div>

              <div className="submit-rejected__form--box">
                <h2>Выбор режима</h2>
                <p>Таможенный склад [74]</p>
              </div>

              <div className="submit-rejected__form--box">
                <h2>
                  Транспортная накладная ( TIR, CMR, жд, накладная, авиа
                  накладная, коносамент и т.д )
                </h2>
                <p>Example.png</p>
              </div>

              <div className="submit-rejected__form--box">
                <h2>Инвойс</h2>
                <p>Example.png</p>
              </div>

              <div className="submit-rejected__form--box">
                <h2>Упаковочный лист</h2>
                <p>Example.png</p>
              </div>

              <div className="submit-rejected__form--box">
                <h2>Контракт</h2>
                <p>Example.png</p>
              </div>

              <div className="submit-rejected__form--box">
                <h2>Сертификат происхождения</h2>
                <p>Example.png</p>
              </div>
            </div>

            <div className="submit-rejected__form--pet">
              <h2>Информация по декларированию</h2>
              <p>29 декабря 2022г. в 16:20</p>

              <div className="submit-rejected__form--box">
                <h2>Режим</h2>
                <p id="gray-text">
                  Выпуск для свободного обращения (импорт) [40]
                </p>
              </div>

              <div className="submit-rejected__form--box">
                <h2>Список необходимых разрешительных док-в</h2>
                <p>Сертификат соотвествия</p>
              </div>

              <div className="submit-rejected__form--box">
                <h2>Метод</h2>
                <p>Резервный</p>
              </div>

              <div className="submit-rejected__form--box">
                <h2>Пост</h2>
                <p>Таможенный пост ВЭД “Аркбулак</p>
              </div>
            </div>
          </div>
          <div className="submit-rejected__form--right"></div>
        </div>
      </div>
    </div>
  );
};

export default SubmitRejected;
