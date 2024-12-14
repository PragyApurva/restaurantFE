import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import Hero from "./components/page1/Hero.js";
import Promo from "./components/page1/Promo.js";
import Events from "./components/page1/Events.js";
import Gallery from "./components/page1/Gallery.js";
import MailingList from "./components/page1/MailingList.js";
import Location from "./components/Location.js";
import Menu from "./components/menu.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/mailing-list" element={<MailingList />} />
        <Route path="/location" element={<Location />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;