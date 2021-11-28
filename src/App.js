import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Classes from "./Components/Classes";
import Contact from "./Components/Contact";
import MainNav from "./Components/MainNav";
import Membership from "./Components/Membership";
// import Shop from "./Components/Shop";

import React from "react";

const App = () => {
  return (
    <>
      <MainNav />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/membership" element={<Membership />} />
          {/* <Route exact path="/shop" element={<Shop />} /> */}
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
