/* eslint-disable react/prop-types */
import React from "react";
import "../App.scss";
import WorkCards from "../data.js";

const Work = () => {
  // THAT SECTION DISPLAY THE CARDS WEBSITES
  return (
    <div className="work">
      {WorkCards &&
        WorkCards.map(({ title, desc, tech, img, link }) => (
          <div className="card">
            {/* card was supppose to a flip card in CSS but didnt end up well, so I kept for now this code naming  */}
            <div className="flip-card-inner">
              <div className="card-front">
                <a href={link}>
                  <img
                    src={img}
                    alt="ok"
                    style={{
                      width: "220px",
                      height: "57vh",
                    }}
                  />
                </a>
                <div className="card-back">
                  <h4 style={{ fontSize: "larger" }}>{title} </h4>
                  <p style={{ fontSize: "medium" }}>{desc}</p>
                  <p style={{ fontSize: "smaller" }}>{tech}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Work;
