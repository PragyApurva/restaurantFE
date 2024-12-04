import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <section className="gallery">
      <h2>Our Gallery</h2>
      <div className="gallery-grid">
        <div className="gallery-item"></div>
        <div className="gallery-item"></div>
        <div className="gallery-item"></div>
        <div className="gallery-item"></div>
      </div>
      <button className="btn">Load More</button>
    </section>
  );
}

export default Gallery;
