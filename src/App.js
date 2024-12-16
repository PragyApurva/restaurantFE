import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/page1/Hero";
// import Promo from "./components/page1/Promo";
import Footer from "./components/footer";
import Menu from "./components/menu";
import "./App.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/promo" element={<Hero scrollTo="promo" />} />
        <Route path="/mailing-list" element={<Hero scrollTo="mailing-list" />} />
        <Route path="/menu" element={<Menu/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;