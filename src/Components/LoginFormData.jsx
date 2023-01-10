import React from "react";

import profile from "../Assets/images/icons/login-login-icon.png";
import build from "../Assets/images/icons/building-icon.png";

const LoginFormData = () => {
  return (
    <div className="login__form--data">
      <div className="login__form--title">Вход с помощью ЭЦП</div>
      <div className="login__form--profile1 login__form--profile">
        <img src={profile} alt="profile" />
        <div className="login__form--description">
          <p className="login__form--profile-name">
            John Washington - 64518413485
          </p>
          <p className="login__form--profile--desc">
            Срок действия сертификата: 05.06.2020 - 05.06.2022
          </p>
        </div>
      </div>
      <div className="login__form--profile2 login__form--profile">
        <img src={build} alt="profile" />
        <div className="login__form--description">
          <p className="login__form--profile-name">
            John Washington - 64518413485
          </p>
          <p className="login__form--profile--desc">
            Срок действия сертификата: 05.06.2020 - 05.06.2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFormData;
