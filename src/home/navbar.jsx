import React, { useState } from "react";
import "./navbar.css";
import  logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <img src={logo} className="logo" alt="Logo" />

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <ul>
        <li><Link to="metalino/">Home</Link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
