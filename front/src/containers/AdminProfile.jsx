
import React from 'react';
import { Button, ButtonGroup, Jumbotron, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AdminProfile extends React.Component {
  constructor(props) {
    super(props);

  }




  render() {
    return (
      <div className="adminPanel">
        <Container>
          <Row className="d-flex p-2">
            <Col>
              <ButtonGroup vertical>

                <Button href="/admin/productManagement">Product management</Button>
                <Button href="/admin/userManagement">User management</Button>
                <Button href="/admin/orderManagement">Order management</Button>

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
