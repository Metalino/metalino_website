import React from "react";
import "./footer.css";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>About</h3>
          <p>
            Building modern web apps, exploring cybersecurity, and 
            blending creativity with technology.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#lander">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3>Follow Me</h3>
          <div className="socials">
            <a href="#"><FaTwitter /> Twitter</a>
            <a href="#"><FaLinkedin /> LinkedIn</a>
            <a href="#"><FaInstagram /> Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Metalino. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
