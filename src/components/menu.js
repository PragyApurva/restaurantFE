import React from 'react';
import './menu.css'; // Import the CSS file
import photo1 from './page1/images/logog.png'; 
const Menu = () => {
  return (
    <div className="menu-container page1">
      
      <div className="hero-overlay">
        <img src={photo1} alt="logo" className="logo" />
        <h1>California Republic</h1>
      </div>
      <h1 className="menu-heading">Drinks</h1>
      <p className="menu-description">
        I’m a menu description. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.
      </p>
      
      <h2 className="menu-subheading">Cocktail</h2>
      <p className="menu-description">
        I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.
      </p>

      <div className="menu-item">
        <h3 className="menu-item-title">Classic Margarita</h3>
        <p className="menu-item-description">A classic cocktail with lime and tequila.</p>
        <p className="menu-item-price">₹9.00</p>
      </div>

      <div className="menu-item">
        <h3 className="menu-item-title">Pink Margarita</h3>
        <p className="menu-item-description">A refreshing twist with a pink hue.</p>
        <p className="menu-item-price">₹9.00</p>
      </div>

      <div className="menu-item">
        <h3 className="menu-item-title">Classic Mohito</h3>
        <p className="menu-item-description">Minty and fresh, the perfect summer drink.</p>
        <p className="menu-item-price">₹9.00</p>
      </div>

      <div className="menu-item">
        <h3 className="menu-item-title">Tequila Sunrise</h3>
        <p className="menu-item-description">A stunning mix of tequila, orange, and grenadine.</p>
        <p className="menu-item-price">₹9.00</p>
      </div>

      <h2 className="menu-subheading">Tequila</h2>
      <p className="menu-description">
        I’m a description for a section of your menu. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.
      </p>

      <div className="menu-item">
        <h3 className="menu-item-title">Tequila Silver</h3>
        <p className="menu-item-description">Smooth and crisp silver tequila.</p>
        <p className="menu-item-price">₹9.00</p>
      </div>

      <div className="menu-item">
        <h3 className="menu-item-title">Tequila Reposado</h3>
        <p className="menu-item-description">Aged to perfection, available in 300 gr and 400 gr.</p>
        <p className="menu-item-price">300 gr - ₹12.00</p>
        <p className="menu-item-price">400 gr - ₹14.00</p>
      </div>

      <div className="menu-item">
        <h3 className="menu-item-title">Tequila Anejo</h3>
        <p className="menu-item-description">Rich and flavorful, aged tequila.</p>
        <p className="menu-item-price">₹9.00</p>
      </div>

      <div className="menu-item">
        <h3 className="menu-item-title">Tequila Especial</h3>
        <p className="menu-item-description">Premium blend tequila for special occasions.</p>
        <p className="menu-item-price">₹9.00</p>
      </div>
    </div>
  );
};

export default Menu;
