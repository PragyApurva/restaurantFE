import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/happenings">Happenings</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/menu">Menu</Link></li>
      </ul>
      <Link to="/menu" className="menuButton">VIEW MENU</Link>
    </div>
  );
}

export default Navbar;