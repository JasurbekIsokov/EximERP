import React from "react";

import arrowBottom from "../Assets/images/icons/arrow-bottom.png";
import profile from "../Assets/images/Avatar.png";
import notification from "../Assets/images/icons/notification.png";

const Header = () => {
  return (
    <div className="header">
      <img src={notification} alt="notification ison" />
      <img src={profile} alt="profile image" />
      <p>Иван Иванович</p>
      <img src={arrowBottom} alt="arrow bottom" />
    </div>
  );
};

export default Header;
