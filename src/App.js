import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/page1/Hero.js";
import Promo from "./components/page1/Promo.js";
import Events from "./components/page1/Events.js";
import Gallery from "./components/page1/Gallery.js";
import MailingList from "./components/page1/MailingList.js";
// import Newsletter from "./components/NewsLetter";
import Location from "./components/Location.js";
// import "./index.css";
import "./App.css";
import {APIProvider} from '@vis.gl/react-google-maps';
function App() {
  return (
    <>
      <Navbar />
      <div class="page1">
        <Hero />
        <Promo />
        {/* <Events /> */}
        <Gallery /> 
        <MailingList/>
        {/* {/* <Newsletter /> */}

      </div>
      <Location />
    </>
  );
}

export default App;
