import React from "react";
import { motion } from "framer-motion";
import "./services.css";
import { FaChartLine, FaBullhorn, FaSearch, FaPenFancy, FaLaptopCode, FaChartPie, FaTv, FaUsers } from "react-icons/fa";

const services = [
  { title: "Social Media Marketing", icon: <FaBullhorn /> },
  { title: "Search Engine Optimization (SEO)", icon: <FaSearch /> },
  { title: "Content Marketing", icon: <FaPenFancy /> },
  { title: "Branding & Creative Design", icon: <FaChartLine /> },
  { title: "Website Design & Development", icon: <FaLaptopCode /> },
  { title: "Analytics & Reporting", icon: <FaChartPie /> },
  { title: "TV Commercials", icon: <FaTv /> },
  { title: "Influencer Marketing", icon: <FaUsers /> },
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
            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
