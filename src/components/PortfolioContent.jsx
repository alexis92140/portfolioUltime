import React from "react";
import { Link } from "react-router-dom";

const PortfolioContent = () => {
  return (
    <div className="Content">
      <nav className="menu">
        <Link to="/about">
          <p className="section">More about me</p>
        </Link>
        <Link to="/work">
          <p className="section"> See my work</p>
        </Link>
        <p className="section">Contact me</p>
      </nav>
    </div>
  );
};

export default PortfolioContent;
