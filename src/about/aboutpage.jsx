import React, { useState } from "react";
import "./aboutpage.css";
import { useNavigate } from "react-router-dom";
import  logo from "../assets/logo.svg";

const About = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <div className="about-container">
      {/* Background Elements */}
      
      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
          
          <div className="hero-content">
            <div className="hero-img-container">
              <img src={logo} alt="Metalino Logo" className="hero-logo" />
            </div>
            
            <p className="tagline">
            <span className="highlight-text">Metalino</span>
              {" "} transforms ideas into impactful brands, content, and campaigns
            that drive growth.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Get Started</button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-content">
              <div className="section-header">
                <h2 className="section-title">About Us</h2>
              
              <p className="about-description">
                Metalino helps brands grow through creative branding, compelling video production,
engaging social media content, and result-driven marketing. We turn ideas into impactful
stories that connect, inspire, and deliver results.</p>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number purple">98%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number pink">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </div>
            </div>
            
            
          </div>
        </section>

      
        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Brand?</h2>
            <p className="cta-description">
              Let's create something extraordinary together. Get in touch and discover how we can elevate your digital presence.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Start Your Project</button>
              <button className="btn btn-secondary">Schedule a Call</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;