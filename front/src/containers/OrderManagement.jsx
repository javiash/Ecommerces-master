/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import {
  Row, Col, Tab, Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderList from '../components/OrderList';


class OrderManagement extends React.Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Link to="/admin">Go back</Link>
                </Nav.Item>
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
