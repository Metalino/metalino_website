import React from "react";
import "./about.css";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About us</h2>
          <p>
            At Metalino, we believe that digital marketing is more than just ads and analytics — it’s about creating meaningful connections between brands and people. Our mission is to help businesses shine in the digital space with strategies that are as strong as metal and as fluid as innovation.
            Whether you’re a startup looking to make your mark or an established business aiming to scale, we tailor solutions that match your vision and drive measurable results.
            With a team of creative thinkers, strategists, and tech-savvy marketers, Metalino blends creativity with performance.
          </p>
          <button className="about-btn">Let’s Connect</button>
        </div>

        <div className="about-image">
          <img src="https://picsum.photos/400/400" alt="About me" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
