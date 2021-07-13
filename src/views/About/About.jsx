import React from "react";
import "./about.scss";
import { Row, Col, Container } from "reactstrap";
export default function About() {
  return (
    <div className="about">
      <Container>
        <div className="about-div" />
        <h1>A full-stack toolkit for organizing anything.</h1>
        <p>
          Invoice sponsors, issue debit cards to your team, and view history.
          Ongoing support so you can focus on organizing, not the paperwork.
        </p>
        {/* description */}
        {/* end */}
        <Container className="about-con">
            <Row>
              <Col lg="4" className="about-con-left">
                Do aliquip mollit sit esse veniam. Enim esse et ad veniam culpa qui.
                Nulla mollit aliquip sit culpa. Nostrud do irure cillum veniam
                aliquip ex fugiat consequat eiusmod.
              </Col>
              <Col lg="8" className="about-con-right">
              Add Image Here
                <Row className="about-con-row">
                    <Col className="about-con-cards" md="12" lg="5"> Cards</Col>
                    <Col className="about-con-cards" md="12" lg="5"> Cards</Col>
                </Row>
                <Row className="about-con-row">
                    <Col className="about-con-cards" md="12" lg="5"> cards</Col>
                    <Col className="about-con-cards" md="12" lg="5"> cards</Col>
                </Row>
              </Col>
            </Row>
        </Container>
      </Container>
    </div>
  );
}
