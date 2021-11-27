// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

import React from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
