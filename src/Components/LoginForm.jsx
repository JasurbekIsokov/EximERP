import React from "react";

import HomeLogo from "./HomeLogo";
import LoginFormData from "./LoginFormData";
import LoginFormRegister from "./LoginFormRegister";

const LoginForm = () => {
  return (
    <div className="login__form">
      <div className="login__form--logo"></div>
      <HomeLogo />
      <LoginFormData />
      <LoginFormRegister />
    </div>
  );
};

export default LoginForm;
