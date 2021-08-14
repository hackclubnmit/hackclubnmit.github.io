import React from "react";
import {
  Card,
  CardBody,
  Container,
  Row,
  CardImg,
  CardTitle,
  
} from "reactstrap";
import RachetMudnur from "../../assets/teamPic/RachetMudnur.jpeg";
import "./TeamPage.scss";

import { HashRouter, Switch, Link, Route } from "react-router-dom";
import {Team2019,Team2020, Team2021 } from "../../components/TeamComponents/Team2019";


function TeamPage() {
  return (
    <>
      <Container className="container-team">
        <div className="teampage-main">
          <div className="teampage-main-head">
            <h1> Our Teams</h1>
          </div>
          <div>
            <h1> Founders</h1>
          </div>
          <Row className="founder">
            <Card className="Card-founder">
              <CardImg width="10%" src={RachetMudnur} alt="founder Img" />
              <CardBody>
                <CardTitle tag="h5">Rachet Mudnur</CardTitle>
              </CardBody>
            </Card>
            <Card className="Card-founder">
              <CardImg width="10%" src={RachetMudnur} alt="founder Img" />
              <CardBody>
                <CardTitle tag="h5">Anurag Singh</CardTitle>
              </CardBody>
            </Card>
          </Row>
          <Row className="timeline">
            <div>
              
                <HashRouter>
                  <div>
                    <ul>
                      <li> <Link to="/2019"> 2019</Link></li>
                      <li> <Link to="/2020"> 2020</Link></li>
                      <li> <Link to="/2021"> 2021</Link></li>
                    </ul>
                  </div>
                  <Switch>
                    <Route path="/2019">
                      <Team2019 />
                    </Route>
                    <Route path="/2020">
                      <Team2020 />
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
    </>
  );
}
export default TeamPage;
