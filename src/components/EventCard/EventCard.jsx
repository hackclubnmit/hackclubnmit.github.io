import React from "react";
import "./EventCard.scss";

export default function EventCard({ url }) {
  return (
    <div class="event_container">
      <div
        class="event_bg"
        style={{
          backgroundImage: `url(
            "https://images.unsplash.com/photo-1483443487168-a49ed320d532?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=25a13b3cccc5f22a2d4cb32c4171e3c4"
          )`,
        }}
      ></div>
      <div class="event_info">
        <div class="event_title">
          <h4>
            Christmas Challenge, so i can trust in others, you ask a question
          </h4>
        </div>
        <div class="event_desc">
          <p>
            a litle description of the event, before you make me this way, you
            make me this way.
          </p>
        </div>
        <div class="event_footer">
          <div class="event_date">
            <p>16 de Dez, 2017</p>
          </div>
          <div class="event_more">
            <a href="/" class="btn_more">
              learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
