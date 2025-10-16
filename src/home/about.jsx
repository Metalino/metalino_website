import React from "react";
import "./about.css";
import aboutImage from "../assets/about.avif";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-container_h">
        <div className="about-text">
          <h2>About us</h2>
          <p>At Metalino , we help businesses grow with smart advertising and digital marketing. From social media to SEO and paid campaigns, 
          we craft strategies that deliver real results. Creative, data-driven, and focused on your success - that’s who we are.
          </p>
          <button className="about-btn">Let’s Connect</button>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="About me" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
