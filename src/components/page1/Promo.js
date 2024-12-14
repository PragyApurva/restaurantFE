import React from 'react';
import './Promo.css';
const Promo = () => {
  const gridSections = [
    { bg: 'transparent', color: 'black', title: 'Welcome to Our Restaurant', text: 'Experience fine dining at its best', opacity: 0 },
    { bg: 'rgba(26, 26, 26, 1)', color: 'white', title: 'Welcome to Our Restaurant', text: 'Experience fine dining at its best' },
    { bg: 'rgba(26, 26, 26, 1)', color: 'white', title: 'Elegant Atmosphere', text: 'Perfect ambiance for memorable dining' },
    { bg: 'green', color: 'white', title: '', image: './img/juice2.jpg' },
  ];

  return (
    <div className="promo-grid">
      {gridSections.map((section, index) => (
        <div
          key={index}
          className="grid-item"
          style={{
            backgroundColor: section.bg,
            color: section.color,
            opacity: section.opacity || 1,
            backgroundImage: section.image ? `url(${section.image})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            
          }}
        >
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Promo;