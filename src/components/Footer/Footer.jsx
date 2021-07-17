import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <Container className="footer-con">
      
        <Row >
            < Col />
            <Col lg="2" >
              <h4> Hack Club</h4>
              <Row className="footer-con-link"> hello</Row>
              <Row className="footer-con-link"> hello</Row>
              <Row className="footer-con-link"> hello</Row>
              <Row className="footer-con-link"> hello</Row>
            </Col>
            <Col lg="2">
              <h4> Resources</h4>
              <Row className="footer-con-link"> hello</Row>
              <Row className="footer-con-link"> hello</Row>
              <Row className="footer-con-link"> hello</Row>
              <Row className="footer-con-link"> hello</Row>
            </Col>
            <Col lg="3" className="">
              <h4> Join The Club</h4>
              <Row>
                <a href="# "    className="footer-con-sociallink"><span><i class="fab fa-facebook fa-2x" ></i></span> </a>
                <a href="# "  className="footer-con-sociallink"><span><i class="fab fa-github fa-2x"></i></span> </a>
                <a href="# "  className="footer-con-sociallink"><span><i class="fab fa-twitter fa-2x"></i></span> </a>
              </Row>
              <a href="# "  className="footer-con-sociallink"><span><i class="fab fa-instagram fa-2x"></i></span> </a>
              <a href="# "  className="footer-con-sociallink"><span><i class="fab fa-youtube fa-2x"></i></span> </a>
              <a href="# "  className="footer-con-sociallink"><span><i class="fas fa-envelope fa-2x"></i></span> </a>
              <br /> 

            </Col>
            
        </Row>
        <p className="copyright">© 2021 Hack Club.</p>
      </Container>
      
    </div>
  );
}

export default Footer;
