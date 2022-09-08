import "../App.scss";
import React from "react";

const About = () => {
  return (
    // Carte en deux parties, coté gauche img? coté droit descriptif, fond wood
    <div className="Header">
      <h1>Let me introduce my self</h1>
      <div className="leftSide">
        <img src="" alt="" />
      </div>
      <div className="rightSide">
        <p>
          Alexis, french dude, originaly from Paris, I also lived in UK,
          Australia and parts of south east Asia, for now I m located in south
          west France.
        </p>
        <p>
          What do I do would you ask ? I am a fresh newborn Webdevelopper, I got
          huge influences from videogames as you can see here, but not only, I
          got a realy big interest in web design too, I imagine, then I create !
        </p>
      </div>
    </div>
  );
};

export default About;
