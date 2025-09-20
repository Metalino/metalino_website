import React from "react";
import "./videosection.css";

const YouTubeSection = () => {
  return (
    <section className="youtube-section">
      <h2 className="youtube-title">Our work</h2>
      <div className="youtube-grid">
        <div className="youtube-card">
          <iframe
            src="https://www.youtube.com/embed/abcd1234"
            title="YouTube video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-card">
          <iframe
            src="https://www.youtube.com/embed/efgh5678"
            title="YouTube video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-card">
          <iframe
            src="https://www.youtube.com/embed/ijkl9012"
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
