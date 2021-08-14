import React from "react";
import { Card, CardBody, CardImg, CardTitle, Row } from "reactstrap";

import {photo} from "../../assets/teamPic/1.jpg"

import { team2021_tec, team2021_des, team2021_pr,team2021_op, team2019_tec} from "../TeamComponents/teamDb";

import './Teamsdetail.scss';

export  function Team2019() {
  return (
    <div>
      <Row>
      <div className="team_card_div">
          <h1> Club Leads</h1>
          <Card className="team_Card">
            <CardImg width="10%" src={photo} alt="club-lead Img" />
            <CardBody>
              <CardTitle tag="h5">RachetMudnur</CardTitle>
            </CardBody>
          </Card>
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> Tech Team</h1>
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> Design Team</h1>
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> PR Team</h1>
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> OP Team</h1>
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>
     

      
    </div>
  );
}

 
// Team 2020

export  function Team2020() {
  return (
    <div>
      <Row>
        <div>
          <h1> Club Leads</h1>
          <Card className="team_Card">
            <CardImg width="10%" src={photo} alt="club-lead Img" />
            <CardBody>
              <CardTitle tag="h5">RachetMudnur</CardTitle>
            </CardBody>
          </Card>
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> Tech Team</h1>
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> Tech Team</h1>
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> Tech Team</h1>
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> Tech Team</h1>
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>
     

      
    </div>
  );
}


 // team 2021

 export  function Team2021() {
  return (
    <div>
      <Row>
        <div>
          <h1> Club Leads</h1>
          <Card className="team_Card">
            <CardImg width="10%" src="https://www.hackbout.tech/static/media/satvik.470d6610.png" alt="club-lead Img" />
            <CardBody>
              <CardTitle tag="h5">Satvik</CardTitle>
            </CardBody>
          </Card>
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> Tech Team</h1>
          {team2021_tec.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> Design Team</h1>
          {team2021_des.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> PR Team</h1>
          {team2021_pr.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <Row>
        <div className="team_card_div">
          <h1> OP Team</h1>
          {team2021_op.map((teamDetails) => (
          <Card className="team_Card">
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody>
                  <CardTitle tag="h5">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>
     

      
    </div>
  );
}
