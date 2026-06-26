import React from "react";
import { motion } from "framer-motion";
import "./services.css";
import {
  FaPalette,
  FaVideo,
  FaFilm,
  FaHashtag,
  FaBullhorn,
  FaMagic,
  FaPlayCircle,
  FaCalendarAlt,
  FaLaptopCode,
  FaGem,

} from "react-icons/fa";

const services = [
  { title: "Branding", icon: <FaGem /> },
  { title: "Video Production", icon: <FaVideo /> },
  { title: "Ad Films", icon: <FaFilm /> },
  { title: "Social Media Content", icon: <FaHashtag /> },
  { title: "Marketing", icon: <FaBullhorn /> },
  { title: "2D Animations", icon: <FaMagic /> },
  { title: "Motion Graphics", icon: <FaPlayCircle /> },
  { title: "Events", icon: <FaCalendarAlt /> },
  { title: "Website Development", icon: <FaLaptopCode /> },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
  key={index}
  className="service-card"
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: index * 0.05 }}
  viewport={{ once: true }}
  whileHover={{
    y: -10,
    scale: 1.03,
  }}
>
  <div className="service-card-glow"></div>

  <div className="icon">
    {service.icon}
  </div>

  <h3>{service.title}</h3>

  <span className="service-line"></span>
</motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
