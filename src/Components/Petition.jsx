import React from "react";

import Completed from "./Completed";
import FollowSteps from "./FollowSteps";
import Processing from "./Processing";
import Rejected from "./Rejected";

const Petition = () => {
  return (
    <div className="petition">
      <div className="petition__head">
        <p>Таможенное оформление</p>
        <button className="petition__head--send-btn btn">
          + Подать заявку
        </button>
      </div>

      <Rejected />
      <Processing />
      <Completed />
      <FollowSteps />
    </div>
  );
};

export default Petition;
