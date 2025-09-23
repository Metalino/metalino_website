import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        
        {/* Contact Form */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <form action={"https://formsubmit.co/connect.metalino@outlook.com"} className="form" method="POST">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows="4"></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="send-btn"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Contact Info</h2>

          <div className="info-item">
            <FaEnvelope className="icon email" />
            <p>connect.metalino@outlook.com</p>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="icon phone" />
            <p>+91 7550325126</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="icon location" />
            <p>Chennai, India</p>
          </div>

          <div className="socials">
            <a href="#"><FaFacebook /></a>
            <a href="https://www.instagram.com/metalino.madras?utm_source=ig_web_button_share_sheet&igsh=MWlicXV2ZmIzcTFvYg=="><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
