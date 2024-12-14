import React from "react";
import Promo from "./Promo.js"; 
import Gallery from "./Gallery.js"; 
import MailingList from "./MailingList.js"; 
import Location from "../Location.js"; 
import photo1 from './images/logog.png'; 
import photo2 from './images/background.png';
import "./Hero.css"; 

function Hero() {
  return (
    <section className="hero" id="home">
     < img src={photo2} alt="logo" className="bg" />
      <div className="hero-overlay">
        <img src={photo1} alt="logo" className="logo" />
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