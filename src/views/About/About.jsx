import React from "react";
import "./about.scss";
import { Card, CardText, CardBody, Row, Col, Container } from "reactstrap";
export default function About() {
  return (
    <div className="about">
      <Container className="about-container">
        <h1>A full-stack toolkit for organizing anything.</h1>
        <p className="about-sub">
          Invoice sponsors, issue debit cards to your team, and view history.
          Ongoing support so you can focus on organizing, not the paperwork.
        </p>
        {/* description */}
        {/* end */}
        <Container className="about-con">
          <Row>
            <Col lg="4" className="about-con-left">
              <Card className="about-con-left-card">
                <CardBody>
                  <CardText>
                    Do aliquip mollit sit esse veniam. Enim esse et ad veniam
                    culpa qui. Nulla mollit aliquip sit culpa.
                  </CardText>
                </CardBody>
              </Card>
              <Card className="about-con-left-card">
                <CardBody>
                  <CardText>
                    Do aliquip mollit sit esse veniam. Enim esse et ad veniam
                    culpa qui. Nulla mollit aliquip sit culpa.
                  </CardText>
                </CardBody>
              </Card>
              <Card className="about-con-left-card">
                <CardBody>
                  <CardText>
                    Do aliquip mollit sit esse veniam. Enim esse et ad veniam
                    culpa qui. Nulla mollit aliquip sit culpa.
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
                        Do aliquip mollit sit esse veniam. Enim esse et ad
                        veniam culpa qui. Nulla mollit aliquip sit culpa.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="" md="12" lg="6">
                  <Card className="about-con-left-card">
                    <CardBody>
                      <CardText>
                        Do aliquip mollit sit esse veniam. Enim esse et ad
                        veniam culpa qui. Nulla mollit aliquip sit culpa.
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
