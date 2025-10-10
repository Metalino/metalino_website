import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from "./home/navbar.jsx";
import Lander from "./home/lander.jsx";
import AboutSection from "./home/about.jsx";
import Footer from "./home/footer.jsx";
import YouTubeSection from "./home/videosection.jsx";
import Services from "./home/services.jsx";
import Contact from "./contact/contact.jsx";
import About from "./about/aboutpage.jsx";
import Team from "./team/team.jsx";
import ServicePage from "./service_page/service_page.jsx";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function HomePage() {
  return (
    <>
      <Navbar />
      <Lander />
      <AboutSection />
      <Services />
      <YouTubeSection />
      <Footer />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}

function TeamPage() {
  return (
    <>
      <Navbar />
      <Team />
      <Footer />
    </>
  );
}

function Service_Page() {
  return (
    <>
      <Navbar />
      <ServicePage />
      <Footer />
    </>
  );
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/team" element={<TeamPage/>} />
        <Route path="/services" element={<Service_Page/>} />
      </Routes>
    </Router>
  );
}

export default App;
