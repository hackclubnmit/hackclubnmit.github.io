import React from "react";
import { Card, CardBody, Container, Row, CardImg, CardTitle, Button } from "reactstrap";
import Anurag from "../../assets/teamPic/anurag.jpg";
import rachetmudnur from "../../assets/teamPic/rachetmudnur.jpg";
import "./TeamPage.scss";

import { HashRouter, Switch, Link, Route } from "react-router-dom";
import {
  Team2019,
  Team2021,
} from "../../components/TeamComponents/Teams";

function TeamPage() {
  return (
    <div className="team">
      <Container className="container-team">
        <div className="teampage-main">
          <div className="teampage-main-head">
            <h1> Our Teams</h1>
          </div>
          <div>
            <h2> Founders</h2>
          </div>
          <Row className="founder">
            <div className="card-div">
            <Card className="Card-founder">
              <CardImg width="10%" src={Anurag} alt="founder Img" />
              <CardBody className="cardBody">
              <CardTitle className="cardTitle">Anurag Singh</CardTitle>              </CardBody>
            </Card>
           
            </div>
            <div className="card-div">
            <Card className="Card-founder">
              <CardImg width="10%" src={rachetmudnur} alt="founder Img" />
              <CardBody className="cardBody">
              <CardTitle className="cardTitle">Rachet Mudnur</CardTitle>              </CardBody>
            </Card>
           
            </div>
          </Row>
          <Row>
            <div>
              <HashRouter>
                <div className="timeline">
                  <ul>
                    <li>
                      <Link to="/2020"> <Button className="timeline_btn">2020</Button> </Link>
                    </li>

                

                    <li>
                      <Link to="/2021"> <Button className="timeline_btn">2021</Button> </Link>
                    </li>
                  </ul>
                </div>
                <Switch>
                  <Route path="/2020">
                    <Team2019 />
                  </Route>

                  <Route path="/2021">
                    <Team2021 />
                  </Route>
                </Switch>
              </HashRouter>
            </div>
          </Row>
        </div>
      </Container>
    </div> 
  );
}
export default TeamPage;
