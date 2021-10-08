import React, { useState } from "react";
import "./events.scss";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Container,
  CardImg,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import classnames from "classnames";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'

function CarouselCard(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
          name: "Random Name #3",
          description: "Hello World!"
        },
        {
          name: "Random Name #4",
          description: "Hello World!"
        },
        {
          name: "Random Name #5",
          description: "Hello World!"
        },
        {
          name: "Random Name #6",
          description: "Hello World!"
        },
        {
          name: "Random Name #7",
          description: "Hello World!"
        }
        
    ]

    return (
        <Carousel animation="slide">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper elevation={3}>
            <Card body color="dark">
                  <CardImg
                    top
                    width="100%"
                    src="https://cdn.discordapp.com/attachments/635122710086942742/894179685590769674/eb58d258-0b75-47b7-91a5-5a1d02bca042.png"
                    alt="Card image cap"
                    className="card_img"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {props.item.name}
                    </CardSubtitle>
                    <CardText>
                    {props.item.description}
                    </CardText>
                    <Button>Check it out!</Button>
                  </CardBody>
                </Card>
        </Paper>
    )
}




 
const Events = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="about">
      <Container>
        <h1 className="text-center mb-5">Events</h1>

        <Nav tabs className="d-flex justify-content-around mb-3">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Past
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Current
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Upcoming
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
              <h4>List of past events (This heading will be deleted after API integration)</h4>
              <CarouselCard/>
          </TabPane>

          <TabPane tabId="2">
          <h4>List of current events (This heading will be deleted after API integration)</h4>
          <CarouselCard/>
          </TabPane>

          <TabPane tabId="3">
          <h4>List of upcoming events (This heading will be deleted after API integration)</h4>
          <CarouselCard/>
          </TabPane>

        </TabContent>
      </Container>
    </div>
  );
};

export default Events;
