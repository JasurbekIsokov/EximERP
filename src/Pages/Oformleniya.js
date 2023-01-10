import React from "react";

import Header from "../Layouts/Header";
import Sidebar from "../Layouts/Sidebar";

const Oformleniya = () => {
  return (
    <div className="oformleniya">
      <Sidebar />

      <div className="oformleniya__right-section">
        <Header />
      </div>
    </div>
  );
};

export default Oformleniya;
