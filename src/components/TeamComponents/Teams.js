import React from "react";
import { Card, CardBody, CardImg, CardTitle, Row,CardSubtitle} from "reactstrap";



import { team2021_tec, team2021_des, team2021_pr, team2021_op,team2021_gop, team2021_sponsorship, team2019_tec, team2019_des,team2019_pr, team2019_op,team2019_gop} from "./teamDb";

import './Teamsdetail.scss';

export  function Team2019() {
  return (
    <div className="team-div">
      <div className="div-title"><h1>Club Leads</h1></div>
      <Row>

      <div className="team_card_div">
          
          <Card className="team_Card">
          <CardImg width="10%" src={require(`../../assets/teamPic/satvik.jpg`)} alt="club lead Img" />
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">Satvik</CardTitle>
              <CardSubtitle className="cardSubTitle">Lead</CardSubtitle>

            </CardBody>
          </Card>
        </div>
        
        <div className="team_card_div">
          
          <Card className="team_Card">
          <CardImg width="10%" src={require(`../../assets/teamPic/anshul.jpg`)} alt="club co lead Img" />
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">Anshul</CardTitle>
              <CardSubtitle className="cardSubTitle">Co-Lead</CardSubtitle>
            </CardBody>
          </Card>
        </div>

      </Row>

      <div className="div-title"><h1>Tech Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2019_tec.map((teamDetails) => (
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
          
          {team2019_des.map((teamDetails) => (
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
          
          {team2019_pr.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="pr-team Img" />
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
          
          {team2019_op.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="op-team Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <div className="div-title"><h1>Ground Operations Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2019_gop.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="op-team Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

    {/*  <div className="div-title"><h1> Sponsorship Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2021_sponsorship.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="gop-team Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
          </Row> */}
     

      
    </div>
  );
}
 


 // team 2021

 export  function Team2021() {
  return (
    <div className="team-div">
      <div className="div-title"><h1>Club Leads</h1></div>
      <Row>

      <div className="team_card_div">
          
          <Card className="team_Card">
          <CardImg width="10%" src={require(`../../assets/teamPic/satvik.jpg`)} alt="club lead Img" />
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">Satvik</CardTitle>
              <CardSubtitle className="cardSubTitle">Lead</CardSubtitle>

            </CardBody>
          </Card>
        </div>
        
        <div className="team_card_div">
          
          <Card className="team_Card">
          <CardImg width="10%" src={require(`../../assets/teamPic/anshul.jpg`)} alt="club co lead Img" />
            <CardBody className="cardBody">
              <CardTitle className="cardTitle">Anshul</CardTitle>
              <CardSubtitle className="cardSubTitle">Co-Lead</CardSubtitle>
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
                  <CardSubtitle className="cardSubTitle">{teamDetails.subtitle}</CardSubtitle>
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
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="pr-team Img" />
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
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="op-team Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <div className="div-title"><h1>Ground Operations Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2021_gop.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="op-team Img" />
                <CardBody className="cardBody">
                  <CardTitle className="cardTitle">{teamDetails.name}</CardTitle>
                </CardBody>
              </div>
            
          </Card>
          ))}
        </div>
      </Row>

      <div className="div-title"><h1> Sponsorship Team</h1></div>
      <Row>
        <div className="team_card_div">
          
          {team2021_sponsorship.map((teamDetails) => (
          <Card className="team_Card" key={teamDetails.id}>
           
              <div>
                <CardImg width="10%" src={require(`../../assets/teamPic/${teamDetails.photo}`)} alt="gop-team Img" />
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
