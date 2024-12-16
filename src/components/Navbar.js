import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div 
        className={`menu-icon ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={`nav ${isMenuOpen ? 'mobile-menu' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/promo" onClick={closeMenu}>Happenings</Link></li>
        <li><Link to="/mailing-list" onClick={closeMenu}>Reservations</Link></li>
        <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
      </ul>
      <Link to="/menu" className="menuButton" onClick={closeMenu}>VIEW MENU</Link>
    </div>
  );
}

export default Navbar;