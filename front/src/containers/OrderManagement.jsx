
import React from 'react';
import {
 Button, ButtonGroup, Row, Col, Container, Form, Jumbotron, Tab, Nav 
} from 'react-bootstrap';
import OrderList from '../components/OrderList';


class OrderManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentID: 1,
    };
  }

  render() {
    return (


          <div>

              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                      <Col sm={3}>
                          <Nav variant="pills" className="flex-column">
                              <Nav.Item>
                                  <Nav.Link eventKey="first">Create Product</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                      <Col sm={9}>
                          <Tab.Content>
                              <Tab.Pane eventKey="first">
                                  <OrderList />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>


    );
  }
}

export default OrderManagement;
