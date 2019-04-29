import React from 'react';
import {
  Jumbotron,
  ButtonToolbar,
  Button,
  Container,
  Row,
  Col,
  Dropdown,

} from 'react-bootstrap';

import OrderListTable from './OrderListTable';

const compraTrucha = [{
  orderDesc: 'xxxxx-yyyy-qqqq',
  status: 'En progreso',
  direccion: 'Avenida Siempre Vivas 234',
  mail: 'piphole@mail.com',

},
{
  orderDesc: 'KKKKK-PPP-EEE',
  status: 'cerrado',
  direccion: 'Paranä 444',
  mail: 'sanchin@mail.com',

}];

export default () => (
  <Jumbotron>
    <h1>Order management</h1>
    <ButtonToolbar>
      <Container>
        <Row>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Filter by Status
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Change status
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Col>
          <Col><Button variant="danger">Delete</Button></Col>
          <Col><Button variant="primary">New order</Button></Col>
        </Row>
        <Row>
          <OrderListTable orderList={compraTrucha} />
        </Row>
        <Button variant="primary">Save</Button>
      </Container>
    </ButtonToolbar>
  </Jumbotron>
);
