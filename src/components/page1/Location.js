import React from "react";
import "./Location.css";

function Location() {
  return (
    <section className="location" id="reservations">
      <h2>Location & Hours</h2>
      <p>500 Terry Francine St, San Francisco, CA 94158</p>
      <p>Open Daily 6PM till 1AM</p>
      <form className="reservation-form">
        <label htmlFor="party-size">Party size:</label>
        <select id="party-size">
          <option value="2">2 guests</option>
          <option value="4">4 guests</option>
          <option value="6">6 guests</option>
        </select>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" required />
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" required />
        <button type="submit" className="btn">Find a Table</button>
      </form>
    </section>
  );
}

export default Location;
