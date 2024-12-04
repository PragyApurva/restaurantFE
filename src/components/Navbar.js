import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#happenings">Happenings</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#menu">Menu</a></li>
      </ul>
      <a href="#menu" className="menuButton">VIEW MENU</a>
    </div>
  );
}

export default Navbar;
