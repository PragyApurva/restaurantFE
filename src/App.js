import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/page1/Hero.js";
import Promo from "./components/page1/Promo.js";
import Events from "./components/page1/Events.js";
import Gallery from "./components/page1/Gallery.js";
// import Newsletter from "./components/NewsLetter";
import Location from "./components/page1/Location.js";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <div class="page1">
        <Hero />
        <Promo />
        <Events />
        <Gallery />
        {/* <Newsletter /> */}
        <Location />

      </div>
      <Footer />
    </>
  );
}

export default App;
