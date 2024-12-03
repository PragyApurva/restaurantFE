import React from "react";
import "./Events.css";

function Events() {
  return (
    <section className="events" id="happenings">
      <h2>DJ's Playing This Weekend</h2>
      <div className="events-grid">
        <div>
          <h3>Nov. 18</h3>
          <p>San Pedro</p>
        </div>
        <div>
          <h3>Nov. 19</h3>
          <p>Mexico</p>
        </div>
        <div>
          <h3>Nov. 20</h3>
          <p>Carmen</p>
        </div>
      </div>
    </section>
  );
}

export default Events;
