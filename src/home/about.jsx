import React from "react";
import "./about.css";
import aboutImage from "../assets/about.avif";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
const navigate = useNavigate();

  return (
    <section className="about">
      <div className="about-container_h">
        <div className="about-text">
          <h2>About us</h2>
          <p>Metalino helps brands grow through creative branding, compelling video production,
engaging social media content, and result-driven marketing. We turn ideas into impactful
stories that connect, inspire, and deliver results.
          </p>
          <button className="about-btn" onClick={() => navigate("/contact")}>Let’s Connect</button>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="About me" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
