import React, { useState, useEffect } from "react";
import "./lander.css";
import gif from "../assets/LOGO.avif";
import fallbackImage from "../assets/land.avif";
import mobileImage from "../assets/mlogo.avif"; // <-- your mobile-specific image
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
            href="https://wa.me/917550325126?text=Hello%20I%20want%20to%20know%20more!"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lander;
