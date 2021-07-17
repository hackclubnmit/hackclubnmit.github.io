import React from "react";
import "./about.scss";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Container } from "reactstrap";
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
                <Card className="about-con-left-card">
                  <p>
                    Do aliquip mollit sit esse veniam. Enim esse et ad veniam culpa qui.
                    Nulla mollit aliquip sit culpa. Nostrud do irure cillum veniam
                    aliquip ex fugiat consequat eiusmod.
                  </p>
                </Card>
                <Card className="about-con-left-card">
                  <p>
                    Do aliquip mollit sit esse veniam. Enim esse et ad veniam culpa qui.
                    Nulla mollit aliquip sit culpa. Nostrud do irure cillum veniam
                    aliquip ex fugiat consequat eiusmod.
                  </p>
                </Card>
              </Col>
              <Col lg="8" className="about-con-right">
             <img src= "https://hackclub.com/bank/laptop-light.png" alt="about-laptop" className="" />
                <Row className="about-con-row">
                    <Col className="" md="12" lg="5"> 
                    <Card className="about-con-right-card"> <p>
                    Do aliquip mollit sit esse veniam. Enim esse et ad veniam culpa qui.
                    Nulla mollit aliquip sit culpa. Nostrud do irure cillum veniam
                    aliquip ex fugiat consequat eiusmod.
                  </p></Card>
                    </Col>
                    <Col className="" md="12" lg="5"> 
                    <Card className="about-con-right-card"> <p>
                    Do aliquip mollit sit esse veniam. Enim esse et ad veniam culpa qui.
                    Nulla mollit aliquip sit culpa. Nostrud do irure cillum veniam
                    aliquip ex fugiat consequat eiusmod.
                  </p></Card>
                    </Col>
                    
                </Row>
                <Row className="about-con-row">
                <Col className="" md="12" lg="5"> 
                    <Card className="about-con-right-card"> card</Card>
                    </Col>
                    <Col className="" md="12" lg="5"> 
                    <Card className="about-con-right-card"> card</Card>
                    </Col>
                </Row>
              </Col>
            </Row>
            <div> <h1> have any doubt</h1></div>
        </Container>
      </Container>
    </div>
  );
}
