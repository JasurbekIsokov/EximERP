import React from "react";
import { useStateContext } from "../Contexts/ContextProvider";

import Completed from "./Completed";
import FollowSteps from "./FollowSteps";
import Processing from "./Processing";
import Rejected from "./Rejected";
import SubmitFollowSteps from "./SubmitFollowSteps";
import SubmitPetition from "./SubmitPetition";
import SubmitRejected from "./SubmitRejected";

const Petition = () => {
  const {
    handletooglePetition,
    tooglePetition,
    toogleSubmitFollowSteps,
    toogleSubmitRejected,
  } = useStateContext();

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
        {tooglePetition && <SubmitPetition />}
      </div>

      <div
        className="petition__back"
        style={{ display: toogleSubmitFollowSteps ? "inline-block" : "none" }}
      >
        {toogleSubmitFollowSteps && <SubmitFollowSteps />}
      </div>

      <div
        className="petition__back"
        style={{ display: toogleSubmitRejected ? "inline-block" : "none" }}
      >
        {toogleSubmitRejected && <SubmitRejected />}
      </div>
    </>
  );
};

export default Petition;
