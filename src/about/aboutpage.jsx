import React, { useState } from "react";
import "./aboutpage.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const navigate = useNavigate();
  const team = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      description: "Visionary leader with 15+ years in digital strategy. Transforms complex challenges into breakthrough solutions.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
      gradient: "blue-purple",
      skills: ["Strategy", "Leadership", "Innovation"],
      experience: "15+ Years"
    },
    {
      name: "Jane Smith",
      role: "Marketing Head",
      description: "Data-driven marketing expert specializing in growth hacking and brand transformation for global audiences.",
      img: "https://images.unsplash.com/photo-1494790108755-2616c04b9f55?w=300&h=400&fit=crop&crop=face",
      gradient: "pink-orange",
      skills: ["Growth Marketing", "Analytics", "Brand Strategy"],
      experience: "12+ Years"
    },
    {
      name: "Alex Johnson",
      role: "Creative Director",
      description: "Award-winning designer creating immersive digital experiences that captivate and convert audiences worldwide.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
      gradient: "green-teal",
      skills: ["UI/UX Design", "Creative Direction", "Brand Identity"],
      experience: "10+ Years"
    }
  ];

  return (
    <div className="about-container">
      {/* Background Elements */}
      
      <div className="content-wrapper">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
          
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="brand-name">Metalino</h1>
              <div className="brand-line"></div>
            </div>
            
            <p className="tagline">
              Digital marketing that delivers{" "}
              <span className="highlight-text">extraordinary results</span>
              {" "}— Let's grow your brand online with cutting-edge strategies
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => navigate('/contact')}>Get Started</button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-content">
            <div className="about-text">
              <div className="section-header">
                <h2 className="section-title">About Us</h2>
              </div>
              
              <p className="about-description">
                Metalino is a cutting-edge digital marketing agency where creativity meets strategy. 
                We specialize in transforming brands through innovative digital experiences that 
                captivate audiences and drive measurable results.
              </p>
              
              <p className="about-description">
                Whether you're a startup looking to make your mark or an established brand 
                seeking digital transformation, we craft bespoke solutions that elevate your 
                presence and create lasting connections with your audience.
              </p>
              
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