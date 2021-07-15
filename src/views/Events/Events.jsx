import React , { useState } from 'react'
import "./events.scss";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container,
    CardImg, CardBody, CardSubtitle
} from 'reactstrap';
import classnames from 'classnames';

const Events = () => {


    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
     }

    return(
        <div className="about">
            <Container>
        <h1 className="text-center mb-5">Events</h1>

    <Nav tabs className="d-flex justify-content-around mb-3">

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            All
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Upcoming
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Past
          </NavLink>
        </NavItem>

    </Nav>

    <TabContent activeTab={activeTab}>

        <TabPane tabId="1">
          <Row>

            <Col sm="4">
            <Card body color="dark">
                <CardImg top width="100%" src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>

            <Col sm="4">
            <Card body color="dark">
                <CardImg top width="100%" src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>

            <Col sm="4">
            <Card body color="dark">
                <CardImg top width="100%" src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
          <Row>

            <Col sm="6">
              <Card body color="dark">
              <CardImg top width="100%" src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            
            <Col sm="6">
              <Card body color="dark">
              <CardImg top width="100%" src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </TabPane>

        <TabPane tabId="3">
        <Row>

<Col sm="4">
<Card body color="dark">
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card image cap" />
    <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
    </CardBody>
  </Card>
</Col>

<Col sm="4">
<Card body color="dark">
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card image cap" />
    <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
    </CardBody>
  </Card>
</Col>

<Col sm="4">
<Card body color="dark">
    <CardImg top width="100%" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card image cap" />
    <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        <Button>Button</Button>
    </CardBody>
  </Card>
</Col>
</Row>
        </TabPane>

      </TabContent>



            </Container>
            
        </div>
    )
}

export default Events
