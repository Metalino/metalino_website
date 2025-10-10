import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Contact Form */}
        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <form
            action="https://formsubmit.co/connectatmetalino@gmail.com"
            className="form"
            method="POST"
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
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
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="section-title">Contact Info</h2>

          <div className="info-item">
            <FaEnvelope className="icon email" />
              <p>connectatmetalino@gmail.com</p>
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
            <a href="https://www.facebook.com/share/1Beox4Nn6D/"><FaFacebook /></a>
            <a href="https://www.instagram.com/metalino.madras"><FaInstagram /></a>
            <a href="https://wa.me/917550325126?text=Hello%20I%20want%20to%20know%20more!"><FaWhatsapp /></a>
          </div>

          
        </motion.div>
      </div>
    </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8488049542793!2d80.20706559999999!3d12.9815206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d380a028d7d%3A0x1d76de91351efbc2!2sMetalino%20Advertising%20and%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1759322054494!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
</div>  
);
}
