import React, { useState } from "react";
import "./navbar.css";
import  logo from "../assets/logo.svg";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <img src={logo} className="logo" alt="Logo" onClick={() => navigate("/")} />

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/team">Our Team</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
