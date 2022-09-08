/* eslint-disable jsx-a11y/media-has-caption */
import "./App.scss";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import PortfolioContent from "./components/PortfolioContent";
import Doors from "./Doors";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Doors />
        <PortfolioContent />
      </HashRouter>
    </div>
  );
}

export default App;
