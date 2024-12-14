import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  const images = [
    '/img/burger.jpg',
    '/img/fruits.jpg',
    '/img/shake.jpg',
    '/img/juice.jpg',
    '/img/salad.jpg',
    '/img/smoothie.jpg'
  ];
  const initialImages = images.slice(0, 3);
  const moreImages = images.slice(3, 6);

  return (
    <section className="gallery">
      <h2>Hola Amigos!</h2>
      <h2>HASHTAG #CaliforniaRepublic to show up on our INSTAGRAM</h2>
      <div className="gallery-grid">
        {initialImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
        {showMore && moreImages.map((image, index) => (
          <div key={index + 3} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 4}`} />
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Load More'}
      </button>
    </section>
  );
};

export default Gallery;