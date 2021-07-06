import React from "react";
import "./Event.css";
const Event = () => {
  return (
    <div className="event-container">
      <h1 className="event-heading"> Events</h1>

      <center>
        <hr />
      </center>
      <div className="event-card-container">
        <div className="event-card"> Card</div>
      </div>
      <h1 className="event-heading-2"> Upcomming</h1>
      <div className="register" > Register</div>
    </div>
  );
};

export default Event;
