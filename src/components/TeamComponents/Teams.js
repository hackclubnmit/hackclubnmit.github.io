import React from "react";
import { Card, CardBody, CardImg, CardTitle, Row } from "reactstrap";

import {photo} from "../../assets/teamPic/1.jpg"

import { team2021_tec, team2021_des, team2021_pr,team2021_op, team2019_tec} from "./teamDb";

import './Teamsdetail.scss';

export function Team2019() {
  return (
    <div  > 
      <div className="div-title"><h1> Club Lead</h1></div>
      <Row>
      <div className="team_card_div">
          <Card className="team_Card">
            <CardImg width="10%" src={photo} alt="club-lead Img" />
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">Rachet Mudnur</CardTitle>
            </CardBody>
          </Card>
        </div>
      </Row>


      <div className="div-title"><h1>Tech Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
             
          </Card>
          ))}
          
        </div>
      </Row>

      
      <div className="div-title"><h1>Design Team</h1></div>
      <Row>
        <div className="team_card_div">
          

          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}

        </div>
      </Row>

      <div className="div-title"><h1>PR Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>


      <div className="div-title"><h1>Operations Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
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
      <div className="div-title"><h1>Club Lead</h1></div>
      <Row>
      <div className="team_card_div">
          
          <Card className="team_Card">
            <CardImg width="10%" src="https://www.hackbout.tech/static/media/satvik.470d6610.png" alt="club-lead Img" />
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">Rachet Mudnur</CardTitle>
            </CardBody>
          </Card>
        </div>
      </Row>

      <div className="div-title"><h1>Tech Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <div className="div-title"><h1>Design Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <div className="div-title"><h1>PR Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <div className="div-title"><h1>Operations Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2019_tec.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
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
    <div className="team-div">
      <div className="div-title"><h1>Club Lead</h1></div>
      <Row>
      <div className="team_card_div">
          
          <Card className="team_Card">
            <CardImg className="cardImage" width="10%" src="https://www.hackbout.tech/static/media/satvik.470d6610.png" alt="club-lead Img" />
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">Satvik</CardTitle>
            </CardBody>
          </Card>
        </div>
      </Row>

      <div className="div-title"><h1>Tech Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2021_tec.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="tech team Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              
            
          </Card>
          ))}
        </div>
      </Row>

      <div className="div-title"><h1>Design Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2021_des.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="design team Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <div className="div-title"><h1>PR Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2021_pr.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <div className="div-title"><h1>Operations Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2021_op.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={teamDetails.photo} alt="club-lead Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>
     

      
    </div>
  );
}
