import React, { useState } from 'react';
import './Gallery.css';
import img1 from './images/01.jpg'; // Import your images
import img2 from './images/02.jpeg';
import img3 from './images/03.jpg';
import img4 from './images/04.jpg';
import img5 from './images/05.jpg';
import img6 from './images/06.jpg';

const Gallery = () => {
  const [showMore, setShowMore] = useState(false);

  const images = [img1, img2, img3, img4, img5, img6];
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