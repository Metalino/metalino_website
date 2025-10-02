import React from "react";
import "./footer.css";
import { FaTwitter, FaLinkedin, FaInstagram,FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="contactbtn">
        <button className="contact-btn">Contact Us</button>
    </div>
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-column">
          <h3>Our Address</h3>
          <p>
            No 5, 8th Cross St, Okkiayam, Thouraipakkam, Andal Nagar, Adambakkam, Chennai, Tamil Nadu 600088, India
          </p>
        </div>
        
        {/* Column 2 */}
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <img src={logo} alt="Metalino Logo" className="footer-logo" />
          <p className="footer-description">Made it to the end? That’s just the beginning for your brand. From creative campaigns to smart strategies, we’ve got your marketing covered.</p>
          
        </div>
        
      </div>

      
        {/* Column 2 */}
        <div className="footer-column">
          <div className="socials">
            <a href="https://wa.me/917550325126?text=Hello%20I%20want%20to%20know%20more!"><FaWhatsapp /></a>
            <a href="#"><FaLinkedin /> </a>
            <a href="https://www.instagram.com/metalino.madras?utm_source=ig_web_button_share_sheet&igsh=MWlicXV2ZmIzcTFvYg=="><FaInstagram /> </a>
          </div>
        </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Metalino. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
