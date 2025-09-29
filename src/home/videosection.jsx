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

  return (
    <section className="youtube-section">
      <h2 className="youtube-title">Our work</h2>
      <div className="youtube-container">
        <button 
          className="scroll-arrow left" 
          onClick={scrollLeft}
          aria-label="Scroll left"
        ></button>
        
        <div className="youtube-grid" ref={gridRef}>
          <div className="youtube-card">
            <iframe
              src="https://youtube.com/embed/dJebcmKZ5gI"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="youtube-card">
            <iframe
              src="https://www.youtube.com/embed/kYU2erRrs0w"
              title="YouTube video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
             <div className="youtube-card">
            <iframe
              src="https://youtube.com/embed/dJebcmKZ5gI"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="youtube-card">
            <iframe
              src="https://www.youtube.com/embed/kYU2erRrs0w"
              title="YouTube video 4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="youtube-card">
            <iframe
              src="https://www.youtube.com/embed/O8_h-uInRt0"
              title="YouTube video 5"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="youtube-card">
            <iframe
              src="https://www.youtube.com/embed/7e2ZhXDO_dE"
              title="YouTube video 6"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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