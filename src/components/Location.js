import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import "./Location.css";

function Location() {
  const position = { lat: 12.997014435146525, lng: 77.69106675409003 }; // San Francisco coordinates
  
  const handleMapClick = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${position.lat},${position.lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <section className="location" id="reservations">
      <h2>Location</h2>
      <div className="location-grid">
        <div className="location-info">
          <p>2310/25, Mahadevpura Main Road, Badavala Nagar, B Narayanapura, Mahadevpura, Bengaluru, Karnataka, 560048</p>
          <p>Open Daily 8AM till 8PM</p>
          <form className="reservation-form">
            <label htmlFor="party-size">Party size:</label>
            <select id="party-size">
              <option value="1">1 guests</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
              <option value="6">6 guests</option>
            </select>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" required />
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" required />
            <button type="submit" className="btn">Find a Table</button>
          </form>
        </div>
        <div className="addMaps" style={{ height: '400px', width: '100%', marginTop: '20px' }}>
          <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY}>
            <Map
              defaultCenter={position}
              defaultZoom={15}
              mapId="RESTAURANT_MAP"
            >
              <Marker position={position} title="Our Restaurant" />
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
}

export default Location;
