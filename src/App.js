import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Hero from "./components/page1/Hero";
import Menu from "./components/menu";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route 
          path="/promo" 
          element={<Hero scrollTo="promo" />} 
        />
        <Route 
          path="/mailing-list" 
          element={<Hero scrollTo="mailing-list" />} 
        />
        <Route 
          path="/menu" 
          element={<Menu/>} 
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;