import React from "react";
import "./Promo.css";

const gridSections = [
  {
    color: "black",
    title: "Welcome to Our Restaurant",
    text: "Experience fine dining at its best",
    height: "300px"
  },
  {
    bg: "black",
    color: "white",
    title: "California's best Mexican-Inspired restaurant",
    text: "Fusion of traditional and contemporary flavors",
    height: "300px"
  },
  {
    bg: "black",
    color: "white",
    title: "Elegant Atmosphere",
    text: "Perfect ambiance for memorable dining",
    height: "300px"
  }
];

function Promo() {
  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "1fr 1fr",
      marginTop: "4rem"
    }}>
      {gridSections.map((section, index) => (
        <section key={index} style={{ 
          backgroundColor: section.bg, 
          color: section.color,
          padding: "40px",
          textAlign: "center"
        }}>
          <h2>{section.title}</h2>
          <p>{section.text}</p>
        </section>
      ))}
      <div class="imageInsertion" />
    </div>
  );
}

export default Promo;
