import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Join Our Mailing List</h2>
      <form>
        <input type="email" placeholder="Enter your email here" required />
        <div>
          <input type="checkbox" id="subscribe" name="subscribe" />
          <label htmlFor="subscribe">Yes, subscribe me to your newsletter</label>
        </div>
        <button type="submit" className="btn">Subscribe Now</button>
      </form>
    </section>
  );
}

export default Newsletter;
