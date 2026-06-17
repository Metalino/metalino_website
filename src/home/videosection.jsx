import React, { useRef } from "react";
import "./videosection.css";

const YouTubeSection = () => {
  const gridRef = useRef(null);

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

const urls = [
  { video: "https://www.youtube.com/embed/BZJOxRHL-7M", title: "video1" },
  { video: "https://www.youtube.com/embed/FfmsgrALkbM", title: "video2" },
  { video: "https://www.youtube.com/embed/g_30Jcar0xI", title: "video3" },
  { video: "https://www.youtube.com/embed/znNojQO1SBo", title: "video4" },
  { video: "https://www.youtube.com/embed/mH-sv1KvpH4", title: "video5" },
  { video: "https://www.youtube.com/embed/D0HEHip0Rm4", title: "video6" },
  { video: "https://www.youtube.com/embed/JOYHASwYi4c", title: "video7" },
  { video: "https://www.youtube.com/embed/Gt4IABLQQKo", title: "video8" },
  { video: "https://www.youtube.com/embed/P0YUorymQAk", title: "video9" },
  { video: "https://www.youtube.com/embed/ZP7871y8UxM", title: "video10" },
  { video: "https://www.youtube.com/embed/fjPjbU-9oa8", title: "video11" }
];

  // Duplicate the array for infinite loop
  const duplicatedUrls = [...urls, ...urls];

  return (
    <section className="youtube-section">
      <h2 className="youtube-title">Our work</h2>
      <div className="youtube-container">
        <button 
          className="scroll-arrow left" 
          onClick={scrollLeft}
          aria-label="Scroll left"
        ></button>
        
        <div className="youtube-grid-wrapper">
          <div className="youtube-grid" ref={gridRef}>
            {duplicatedUrls.map((videos, index) => (
              <div className="youtube-card" key={index}>
                <iframe
                  src={videos.video}
                  title={`${videos.title}-${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="scroll-arrow right" 
          onClick={scrollRight}
          aria-label="Scroll right"
        ></button>
      </div>
    </section>
  );
};

export default YouTubeSection;