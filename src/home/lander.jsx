import React from "react";
import "./lander.css";
import gif from "../assets/animate.gif";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Lander = () => {
  return (
    <div className="lander">
      <div className="gif-container">
        <img src={gif} alt="Company Logo" />
        <div className="social-icons">
          <a href="https://www.facebook.com/share/1Beox4Nn6D/" target="_blank" rel="noreferrer" >
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/metalino.madras?utm_source=ig_web_button_share_sheet&igsh=MWlicXV2ZmIzcTFvYg==" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lander;
