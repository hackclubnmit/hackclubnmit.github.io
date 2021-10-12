import React from "react";
import "./about.scss";
import { Card, CardText, CardBody, Row, Col, Container } from "reactstrap";
export default function About() {
  return (
    <div className="about" id="about">
      <Container className="about-container">
        <h1><div className="line_one"><div className="termblink">></div> Hack Club NMIT is the official student chapter </div>of the Hack Club network</h1>
        <p className="about-sub">
        <div>We conduct regular workshops and webinars, which are self led learn-to-code tutorials. In a nutshell,</div>
        we are the movement of students building the classes we wish we could take!
        </p>
        {/* description */}
        {/* end */}
        <Container className="about-con">
          <Row>
            <Col lg="4" className="about-con-left">
              <Card className="about-con-left-card">
                <CardBody>
                  <CardText>
                  The goal of Hack Club is to help you become a hacker. Being entirely student led, this provides you the space to learn and grow with the community.
                  </CardText>
                </CardBody>
              </Card>
              <Card className="about-con-left-card">
                <CardBody>
                  <CardText>
                  Learning to code is like gaining a superpower, converting  you from a consumer of technology to a creator. Suddenly, computers become a tool for creating and resolving problems.

                  </CardText>
                </CardBody>
              </Card>
              <Card className="about-con-left-card">
                <CardBody>
                  <CardText>
                  There’s never been a better time for making: anywhere in the world, anyone with a laptop and an internet connection can learn to make an app. Building things has never been so globally democratized
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col lg="8" className="about-con-right">
              <a href="# ">
                <img
                  src="https://hackclub.com/bank/laptop-light.png"
                  alt="about-laptop"
                  className=""
                />
              </a>
              <Row className="about-con-row">
                <Col className="" md="12" lg="6">
                  <Card className="about-con-left-card">
                    <CardBody>
                      <CardText>
                      Being well versed in programming concepts is inadequate if you do not know how to write real code. You learn as you build. Starting out, you won’t understand how the code works, but you’ll build understanding as you go
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="" md="12" lg="6">
                  <Card className="about-con-left-card">
                    <CardBody>
                      <CardText>
                      This is a community of young makers spanning across a broad spectrum. We create. We learn from creations. We help one another and have fun while at it. So hop aboard and become a part of the community!
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
