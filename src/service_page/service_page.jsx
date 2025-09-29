import React, { useEffect, useState } from "react";
import "./service_page.css";
import {
  FaBullhorn,
  FaSearch,
  FaPenFancy,
  FaChartLine,
  FaLaptopCode,
  FaChartPie,
  FaTv,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn />,
    description:
      "Grow your brand across platforms with engaging posts, targeted ad campaigns, and community-building strategies that drive real engagement and conversions.",
  },
  {
    title: "Search Engine Optimization (SEO)",
    icon: <FaSearch />,
    description:
      "Be found by the right people. We optimize your website structure, content, and keywords to rank higher, attract organic traffic, and improve your online visibility.",
  },
  {
    title: "Content Marketing",
    icon: <FaPenFancy />,
    description:
      "Create compelling blogs, graphics, and videos that capture attention, communicate your message effectively, and provide lasting value to your audience.",
  },
  {
    title: "Branding & Creative Design",
    icon: <FaChartLine />,
    description:
      "Develop distinctive logos, cohesive color palettes, and comprehensive design systems that make your brand instantly recognizable, memorable, and impactful.",
  },
  {
    title: "Website Design & Development",
    icon: <FaLaptopCode />,
    description:
      "Design responsive, fast, and visually appealing websites that provide a seamless user experience while showcasing your brand’s personality online.",
  },
  {
    title: "Analytics & Reporting",
    icon: <FaChartPie />,
    description:
      "We don’t just launch campaigns. We track performance, analyze data insights, and continuously optimize strategies to maximize growth and ROI.",
  },
  {
    title: "TV Commercials",
    icon: <FaTv />,
    description:
      "Produce professional, high-quality commercials that captivate your audience, convey your brand story, and increase awareness across television and digital platforms.",
  },
  {
    title: "Influencer Marketing",
    icon: <FaUsers />,
    description:
      "Connect with influencers who truly resonate with your target audience for authentic collaborations that amplify your reach and enhance brand credibility.",
  },
];

const ServicesPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set on first render
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="services-modern-page">
      <h1 className="services-modern-title">Our Services</h1>
      <p className="services-modern-subtitle">
        We blend <span className="highlight">creativity</span> and{" "}
        <span className="highlight">strategy</span> to help your brand grow in
        the digital world.
      </p>

      <div className="services-modern-list">
        {servicesData.map((service, index) => (
          <motion.div
            className={`services-modern-card ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={index}
            initial={isMobile ? { opacity: 0, x: index % 2 === 0 ? -100 : 100 } : {}}
            whileInView={isMobile ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="services-modern-icon">{service.icon}</div>
            <div className="services-modern-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
