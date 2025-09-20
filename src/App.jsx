import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './home/navbar.jsx'
import Lander from './home/lander.jsx'
import AboutSection from './home/about.jsx'
import Footer from './home/footer.jsx'
import YouTubeSection from './home/videosection.jsx'
import Services from './home/services.jsx'


function App() {
  return (
    <div id="root">
      <Navbar />
      <Lander />
      <AboutSection />
      <Services />
      <YouTubeSection />
      <Footer />
    </div>
  )
}

export default App
