import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        {/* change font of header and add icon*/}
        <h1>California Republic</h1>
        <a href="#menu" className="menuButton">VIEW MENU</a>
        <img src="https://img.icons8." alt="down arrow" className="downArrow"/>
      </div>
    </section>
  );
}

export default Hero;