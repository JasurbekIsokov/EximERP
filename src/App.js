import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./Assets/Styles/index.scss";
import "./Assets/Styles/fonts.scss";
import "./Assets/Styles/home.scss";
import "./Assets/Styles/login.scss";

// Pages
import { Home, Login } from "./Pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
