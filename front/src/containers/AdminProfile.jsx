/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import {
  Button, ButtonGroup, Jumbotron, Row, Col, Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminProfile extends React.Component {
  render() {
    return (
      <div className="adminPanel">
        <Container>
          <Row className="d-flex p-2">
            <Col>
              <ButtonGroup vertical>
                <Link to="/admin/productManagement/"><Button>Product management</Button></Link>
                <Link to="/admin/userManagement"><Button>User management</Button></Link>
                <Link to="/admin/orderManagement"><Button>Order management</Button></Link>
              </ButtonGroup>
            </Col>
            <Col>
              <Jumbotron>
                <h1>Hello admin user!</h1>
                <p>
                  Welcome to admin user dashboard
                </p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default AdminProfile;
