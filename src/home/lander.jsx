import React from "react";
import "./lander.css";
import gif from "../assets/g1.gif";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Lander = () => {
  return (
    <div className="lander">
      <div className="gif-container">
        <img src={gif} alt="Company Logo" />
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" >
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
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
