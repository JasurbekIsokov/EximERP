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
  const { isClicked, handleClick } = useStateContext();

  return (
    <>
      <div className="petition">
        <div className="petition__head">
          <p>Таможенное оформление</p>
          <button
            className="petition__head--send-btn btn"
            onClick={() => handleClick("submitPetition")}
          >
            + Подать заявку
          </button>
        </div>
        <Rejected customeFunc={() => handleClick("submitRejected")} />
        <Processing customeFunc={() => handleClick("submitRejected")} />
        <Completed customeFunc={() => handleClick("submitRejected")} />
        <FollowSteps customeFunc={() => handleClick("submitFollowSteps")} />
      </div>

      <div
        className="petition__back"
        style={{
          display:
            isClicked.submitPetition ||
            isClicked.submitFollowSteps ||
            isClicked.submitRejected
              ? "inline-block"
              : "none",
        }}
      >
        {isClicked.submitPetition && <SubmitPetition />}
        {isClicked.submitFollowSteps && <SubmitFollowSteps />}
        {isClicked.submitRejected && <SubmitRejected />}
      </div>
    </>
  );
};

export default Petition;
