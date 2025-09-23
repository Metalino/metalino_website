import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./home/navbar.jsx";
import Lander from "./home/lander.jsx";
import AboutSection from "./home/about.jsx";
import Footer from "./home/footer.jsx";
import YouTubeSection from "./home/videosection.jsx";
import Services from "./home/services.jsx";
import Contact from "./contact/contact.jsx";

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

function App() {
  return (
    <Router basename="/metalino">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
