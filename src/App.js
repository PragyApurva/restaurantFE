import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Promo from "./components/Promo";
import Events from "./components/Events.js";
import Gallery from "./components/Gallery";
import Newsletter from "./components/NewsLetter";
import Location from "./components/Location.js";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Promo />
      <Events />
      <Gallery />
      <Newsletter />
      <Location />
      <Footer />
    </>
  );
}

export default App;
