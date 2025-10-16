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
    {video: "https://www.youtube.com/embed/fmST-TVypgs", title: "video1"},
    //{video: "https://www.youtube.com/embed/FQLUTU8x18o", title: "video2"},
    //{video: "https://www.youtube.com/embed/amjc_iw3448", title: "video3"},
    {video: "https://www.youtube.com/embed/DKEdqZ6fkTg", title: "video4"},
    //{video: "https://www.youtube.com/embed/l_PqCc18bd4", title: "video5"},
    {video: "https://www.youtube.com/embed/we3gfBtI9Xc", title: "video6"},
    {video: "https://www.youtube.com/embed/NMvWSOvnrqY", title: "video7"},
    {video: "https://www.youtube.com/embed/sShFX-BZgho", title: "video8"},
    {video: "https://www.youtube.com/embed/J0ZQlVKKHp0", title: "video9"},
    {video: "https://www.youtube.com/embed/R_CV9YIcFw4", title: "video10"}
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