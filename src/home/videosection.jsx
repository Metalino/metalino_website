import React from "react";
import "./videosection.css";

const YouTubeSection = () => {
  return (
    <section className="youtube-section">
      <h2 className="youtube-title">Our work</h2>
      <div className="youtube-grid">
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
            title="YouTube video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="youtube-card">
          <iframe
            src="https://www.youtube.com/embed/O8_h-uInRt0"
            title="YouTube video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
        <div className="youtube-card">
          <iframe
            src="https://www.youtube.com/embed/7e2ZhXDO_dE"
            title="YouTube video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
