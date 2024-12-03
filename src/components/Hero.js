import React from "react";
import "./Hero.css";
import firstImage from "./public/ebb861_44a2a1bf89e44d739c45b60e48aeb4da_1.jpg";
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        {/* change font of header and add icon*/}
        <h1>California Republic</h1>
        <a href="#menu" className="menuButton">VIEW MENU</a>
        <img src="firstImage" alt="down arrow" className="downArrow"/>
      </div>
    </section>
  );
}

export default Hero;
