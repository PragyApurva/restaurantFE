import React from 'react';
import menuData from '../data/menuData.json'; // Adjust path as needed
import './menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-heading">Menu</h1>
      {Object.entries(menuData).map(([category, items]) => (
        <div key={category}>
          <h2 className="menu-subheading">{category}</h2>
          <div className="menu-grid">
            {Object.entries(items).map(([itemName, price]) => (
              <div key={itemName} className="menu-item">
                <h3 className="menu-item-title">{itemName}</h3>
                <p className="menu-item-price">₹{price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
