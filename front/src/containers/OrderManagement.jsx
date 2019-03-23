
import React from 'react';
import { Button, ButtonGroup, Jumbotron, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class OrderManagement extends React.Component {
  constructor(props) {
    super(props);

  }




  render() {
    return (
      <div className="adminPanel">
        <Container>
          <Row class="d-flex p-2">
            <Col>
              <ButtonGroup vertical>

                <Link to="/admin/productManagement"><Button>Product management</Button></Link>
                <Link to="/admin/userManagement"><Button >User management</Button></Link>
                <Link to="/admin/orderManagement"> <Button>Order management</Button></Link>

              </ButtonGroup>
            </Col>
            <Col>
              <Jumbotron>
                <h1>Order management</h1>
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

export default OrderManagement;