import React from "react";

import { useStateContext } from "../Contexts/ContextProvider";

import closeIcon from "../Assets/images/icons/close-icon.png";
import arrowBottom from "../Assets/images/icons/arrow-blue.png";
import arrowRight from "../Assets/images/icons/arrow-right-mini.png";
import arrowLittleRight from "../Assets/images/icons/arrov-litle-right.png";

const SubmitRejected = () => {
  const { handleToogleSubmitRejected, handletooglePetition, closeHandleClick } =
    useStateContext();
  return (
    <div className="submit-rejected">
      <div className="submit-rejected__back"></div>
      <div className="submit-rejected__form">
        <div
          className="submit-petition__form--close"
          onClick={() => closeHandleClick("submitRejected")}
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
          <div className="submit-rejected__form--right">
            <p className="submit-rejected__form--right-title">История</p>
            <div className="submit-rejected__form--right-box">
              <div className="submit-rejected__form--right-box-head">
                <h2>Стадия изменена</h2>
                <p>29.12.2022г. в 15:32</p>
                <h2>Иван Иванович</h2>
              </div>
              <div className="submit-rejected__form--right-box-item">
                <p>Оплата произведена</p>
                <img src={arrowLittleRight} alt="arrowLittleRight" />
                <p>Ожидание подтверждения клиентом</p>
              </div>
            </div>

            <div className="submit-rejected__form--right-box">
              <div className="submit-rejected__form--right-box-head">
                <h2>Стадия изменена</h2>
                <p>29.12.2022г. в 15:32</p>
                <h2>Иван Иванович</h2>
              </div>
              <div className="submit-rejected__form--right-box-item">
                <p>WON</p>
                <img src={arrowLittleRight} alt="arrowLittleRight" />
                <p>Выставить счёт на оплату</p>
              </div>
            </div>

            <div className="submit-rejected__form--right-box">
              <div className="submit-rejected__form--right-box-head">
                <h2>Стадия изменена</h2>
                <p>29.12.2022г. в 15:32</p>
                <h2>Иван Иванович</h2>
              </div>
              <div className="submit-rejected__form--right-box-item">
                <p>Оценка стоимости декларирования</p>
                <img src={arrowLittleRight} alt="arrowLittleRight" />
                <p>WON</p>
              </div>
            </div>

            <div className="submit-rejected__form--right-box">
              <div className="submit-rejected__form--right-box-head">
                <h2>Стадия изменена</h2>
                <p>29.12.2022г. в 15:32</p>
                <h2>Иван Иванович</h2>
              </div>
              <div className="submit-rejected__form--right-box-item">
                <p>Проверка документов</p>
                <img src={arrowLittleRight} alt="arrowLittleRight" />
                <p>Документы корректны</p>
              </div>
            </div>

            <div className="submit-rejected__form--right-box">
              <div className="submit-rejected__form--right-box-head">
                <h2>Создана заявка</h2>
                <p>29.12.2022г. в 15:32</p>
                <h2>Олег Константинович</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="submit-rejected__form--midle">
          <h2>Спецификация к декларированию</h2>

          <div className="submit-rejected__form--midle-box">
            <p>Наименование</p>
            <p>Цена ( UZS )</p>
            <p>Кол-во</p>
            <p>Ед.измерения</p>
            <p>Налог</p>
            <p>НДС</p>
            <p>ИТОГО</p>
          </div>

          <div className="submit-rejected__form--midle-box">
            <p>Общая стоимость декларирования</p>
            <p>900 000.00</p>
            <p>900 000.00</p>
            <p>шт.</p>
            <p>15%</p>
            <p>135 000</p>
            <p>1 035 000.00</p>
          </div>

          <div className="submit-rejected__form--midle-box">
            <p>2. Таможенные платежи: таможенные сборы</p>
            <p>245 000.00</p>
            <p>245 000.00</p>
            <p>шт.</p>
            <p>15%</p>
            <p>0</p>
            <p>245 000.00</p>
          </div>
          <div className="submit-rejected__form--midle-box">
            <p>3. Таможенные платежи: Пошлина</p>
            <p>24 500 000.00</p>
            <p>24 500 000.00</p>
            <p>шт.</p>
            <p>15%</p>
            <p>0</p>
            <p>245 000.00</p>
          </div>

          <div className="submit-rejected__form--midle-box">
            <p>3. Таможенные платежи: НДС</p>
            <p>3 500 000.00</p>
            <p>3 500 000.00</p>
            <p>шт.</p>
            <p>15%</p>
            <p>0</p>
            <p>350 000.00</p>
          </div>
        </div>

        <div className="submit-rejected__form--sum">
          <div>
            <p>Сумма без НДС:</p>
            <h2>29 145 000 UZS</h2>
          </div>
          <div>
            <p>НДС:</p>
            <h2>135 000 UZS</h2>
          </div>
          <div>
            <p>Общая сумма:</p>
            <h2>29 280 000 UZS</h2>
          </div>
        </div>

        <div className="submit-rejected__form--buttons">
          <button className="submit-rejected__form--button1 btn">
            Согласиться с условиями
          </button>
          <button className="submit-rejected__form--button2 btn">
            Отказаться
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitRejected;
