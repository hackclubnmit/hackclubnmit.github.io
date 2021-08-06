import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  Button,
  
} from "reactstrap";
import "./Donate.scss";
import { donarName } from "./db";

function Donate() {
  return (
    <div>
      <div className="donate">
        <Container>
          <div className="donate-heading">
            {" "}
            <h3> DONATE TO HACK CLUB</h3>
            <h1> We rely on people like you to bring coding to the world.</h1>
          </div>

          <div className="donate-card">
            <Card className="donate-card-c1">
              <CardBody>
                <h1> Become a patron</h1>
                <p>Just $3 supports a student for a month</p>
              </CardBody>
              <Button className="donate-card-c1-btn">
                <span>DONATE NOW</span>
              </Button>
            </Card>
          </div>
          <div className="donate-sec-2">
            <h1>Contribute beyond just dollars. </h1>
            <div>
              {" "}
              <p>
                {" "}
                We accept donations of time, technical or hard science fiction
                books, stocks/other securities, and cryptocurrency. Please get
                in touch at donate@hackclub.com if you’re interested in making a
                contribution with an unsupported token or have questions.
              </p>
            </div>
            <div className="donate-card">
              <Card className="donate-card-c2">
                <CardTitle tag="h3"> Contribute beyond just dollars.</CardTitle>
                <CardBody>
                  <p> We also accept donations In the form of CRYPTOCURRENCY</p>
                </CardBody>
                <Button className="donate-card-c2-btn">
                  <span>DONATE WITH CRYPTOCURRENCY </span>
                </Button>
              </Card>
            </div>
          </div>

          <div className="table-div">
            <h2> Our Donars</h2>
            <div>
              <table>
                <tr>
                  {" "}
                  <th> donar Names</th>
                </tr>

                {donarName.map((names) => (
                  <tr>
                    <td><a href={names.link}> {names.name}</a></td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Donate;
