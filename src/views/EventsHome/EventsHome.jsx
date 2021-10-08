import React from "react";
import { Link } from "react-router-dom";
import "./EventsHome.scss";
import EventCard from "../../components/EventCard/EventCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function EventsHome() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: true,
  };
  return (
    <div className="evnt">
      <div className="eventhome container">
        <div className="eventhome_head">
          <h1 className="eventhome_head__text">Recent Events</h1>
          <Link className="eventhome_head__link" to="/events">
            View More
          </Link>
        </div>
        <div className="eventhome_slider">
          <Slider {...settings}>
            <EventCard url="https://images.unsplash.com/photo-1483443487168-a49ed320d532?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=25a13b3cccc5f22a2d4cb32c4171e3c4" />
            <EventCard url="https://images.unsplash.com/photo-1483443487168-a49ed320d532?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=25a13b3cccc5f22a2d4cb32c4171e3c4" />
            </Slider>
        </div>
      </div>
    </div>
  );
}
