import React from 'react';
import { Card, CardBody,  CardImg, CardTitle } from "reactstrap";

import {photo} from '../../assets/teamPic/RachetMudnur.jpeg';
function Team2019(){

    return(
        <div>
            <Card className="Card-club-lead">
                <CardImg
                    width="10%"
                  src={photo}
                  alt="club-lead Img"
                />
                <CardBody>
                  <CardTitle tag="h5">RachetMudnur</CardTitle>
                </CardBody>
              </Card>

              <Card className="Card-club-lead">
                <CardImg
                    width="10%"
                  src={photo}
                  alt="club-lead Img"
                />


                <CardBody>
                  <CardTitle tag="h5">RachetMudnur</CardTitle>
                </CardBody>
              </Card>
        </div>
    )

}

export default Team2019;