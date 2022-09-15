import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import mail from "../assets/amail.png";
import ally from "../assets/acoffre.png";
import coffre from "../assets/ally.png";

const Modal = ({ closeModal }) => {
  // THAT SECTION IS THE MODAL FROM THE MAP
  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__box">
          <button
            onClick={() => closeModal(false)}
            className="modal__close"
            type="button"
          >
            X
          </button>
          <div className="modal__icons">
            <a href="mailto:mrbreenalexis@gmail.com">
              <img
                src={mail}
                alt=""
                style={{ width: "42px", height: "42px" }}
              />{" "}
            </a>
            <a href="https://github.com/alexis92140">
              <img
                src={ally}
                alt=""
                style={{ width: "50px", height: "42px" }}
              />
            </a>
            <a href="https://www.youtube.com/channel/UCIgjzPwOFN4X_OX1RezKMrA">
              <img
                src={coffre}
                alt=""
                style={{ width: "50px", height: "68px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.string.isRequired,
};

export default Modal;
