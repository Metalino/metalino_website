import React, { useState, useEffect } from "react";
import "./lander.css";
import gif from "../assets/logo.gif";
import fallbackImage from "../assets/land.avif";
import mobileImage from "../assets/mlogo.gif"; // <-- your mobile-specific image
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Lander = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 784);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 784);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="lander">
      <div className="gif-container">
        <img
          src={isMobile ? mobileImage : gif}
          alt="Company Logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
        <div className="social-icons">
          <a
            href="https://www.facebook.com/share/1Beox4Nn6D/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/metalino.madras?utm_source=ig_web_button_share_sheet&igsh=MWlicXV2ZmIzcTFvYg=="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/917200533967?text=Hi%20Metalino%21%20I%27m%20interested%20in%20your%20services.%20Could%20you%20please%20share%20your%20pricing%20and%20more%20details%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <FaWhatsapp />
          </a>      
        </div>
      </div>
    </div>
  );
};

export default Lander;
