// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Classes from "./Components/Classes";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";

import React from "react";

const App = () => {
  return (
    <div>
      <Navbar />
    <main>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/classes" element={<Classes />} />
      <Route exact path="/Shop" element={<Shop />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
    </main>
  </div>
  );
};

export default App;
