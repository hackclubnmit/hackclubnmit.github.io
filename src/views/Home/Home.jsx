import React from "react";
import "./home.scss";
import { Container, Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Container className="home_container">
          <h1>The bank for hackers to make ideas real</h1>
          <p>
            The team behind Hack Arizona is one of 100+ teams who uses Hack Club
            Bank to run world-class hackathons.
          </p>
          <Button className="btn">Apply Now</Button>
          <div className="home_container__arrow" />
        </Container>
      </div>
    </div>
  );
};

export default Home;
