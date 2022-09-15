/* eslint-disable jsx-a11y/no-distracting-elements */
import "../App.scss";
import { useState } from "react";
import AboutCard from "../dataAbout";
import MapCard from "../dataMap";
import Modal from "./Modal";

const About = () => {
  // THAT SECTION IS ABOUT ME & ALSO CONTACT NOW
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="Page">
      {AboutCard &&
        AboutCard.map(
          ({
            title,
            subtitle,
            img,
            key1,
            key2,
            key3,
            key4,
            key5,
            icone1,
            icone2,
            icone3,
            icone4,
            icone5,
          }) => (
            <div className="Page__description">
              <div className="Page__description__Portrait">
                <img
                  src={img}
                  alt="background"
                  style={{
                    width: "220px",
                    height: "30vh",
                  }}
                />
                <div className="Page__description__Portrait__Name">
                  <h4>Alexis Breen</h4>
                  <h6>Web developper</h6>
                </div>
              </div>
              <div className="Page__description__Infos">
                <h3>{title}</h3>
                <h6>{subtitle}</h6>
                <ul>
                  <li>
                    <img
                      src={icone1}
                      style={{ width: "32px", height: "32px" }}
                      alt="ingé"
                    />
                    &nbsp;&nbsp;
                    {key1}
                  </li>
                  <li>
                    <img
                      src={icone2}
                      alt="stone"
                      style={{ width: "32px", height: "32px" }}
                    />
                    &nbsp;&nbsp;
                    {key2}
                  </li>
                  <li>
                    <img
                      src={icone3}
                      alt="mining"
                      style={{ width: "32px", height: "32px" }}
                    />
                    &nbsp;&nbsp;
                    {key3}
                  </li>
                  <li>
                    <img
                      src={icone4}
                      alt="mining"
                      style={{ width: "32px", height: "32px" }}
                    />
                    &nbsp;&nbsp;
                    {key4}
                  </li>
                  <li>
                    <img
                      src={icone5}
                      alt="mining"
                      style={{ width: "32px", height: "32px" }}
                    />
                    &nbsp;&nbsp;
                    {key5}
                  </li>
                </ul>
              </div>
            </div>
          )
        )}
      {MapCard &&
        MapCard.map(({ worldmap }) => (
          <div className="Page__description">
            <div className="Page__description__Portrait2">
              <img
                src={worldmap}
                alt="map"
                style={{ width: "350px", height: "30vh" }}
              />
            </div>

            <button
              className="Page__description__ButtonModal"
              type="button"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Explore the map
            </button>
            {openModal && <Modal closeModal={setOpenModal} />}
          </div>
        ))}
    </div>
  );
};

export default About;
