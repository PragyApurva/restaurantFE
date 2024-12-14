import React from "react";
import Promo from "./Promo.js"; 
import Gallery from "./Gallery.js"; 
import MailingList from "./MailingList.js"; 
import Location from "../Location.js"; 
import "./Hero.css"; 

function Hero() {
  return (
    <section className="hero" id="home">
      <img src="/images/background.png" alt="background" className="bg" />
      <div className="hero-overlay">
        <img src="/images/logog.png" alt="logo" className="logo" />
        <h1>California Republic</h1>
        <div className="firstImage"></div>
      </div>
    
      <div className="page1">
        <Promo />
        <Gallery />
        <MailingList />
      </div>
      <Location />
    </section>
  );
}

export default Hero;