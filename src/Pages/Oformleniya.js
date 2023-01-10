import React from "react";

import { Petition } from "../Components";
import Header from "../Layouts/Header";
import Sidebar from "../Layouts/Sidebar";

const Oformleniya = () => {
  return (
    <div className="oformleniya">
      <Sidebar />

      <div className="oformleniya__right-section">
        <Header />
        <Petition />
      </div>
    </div>
  );
};

export default Oformleniya;
