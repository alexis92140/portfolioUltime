import React from "react";
import "../App.scss";
import Blizzard from "../assets/Blizzard.mp4";

const Video = () => {
  return (
    <div className="video">
      <video src={Blizzard} autoPlay loop muted />
    </div>
  );
};

export default Video;
