import React from "react";
import { useStateContext } from "../Contexts/ContextProvider";

import Completed from "./Completed";
import FollowSteps from "./FollowSteps";
import Processing from "./Processing";
import Rejected from "./Rejected";
import SubmitPetition from "./SubmitPetition";

const Petition = () => {
  const { handletooglePetition, tooglePetition } = useStateContext();

  return (
    <>
      <div className="petition">
        <div className="petition__head">
          <p>Таможенное оформление</p>
          <button
            className="petition__head--send-btn btn"
            onClick={handletooglePetition}
          >
            + Подать заявку
          </button>
        </div>

        <Rejected />
        <Processing />
        <Completed />
        <FollowSteps />
      </div>

      <div
        className="petition__back"
        style={{ display: tooglePetition ? "inline-block" : "none" }}
      >
        <SubmitPetition />
      </div>
    </>
  );
};

export default Petition;
