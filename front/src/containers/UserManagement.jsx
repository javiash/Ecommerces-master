
import React from 'react';
import { Button, FormControl, Row, Col, Container, Form, Jumbotron, Tab, Nav, ButtonToolbar } from 'react-bootstrap';

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentID: 1,
    }
  }

  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">User management</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Jumbotron>
                    <h1>User Management</h1>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-success">Search user</Button>
                    </Form>
                    <hr></hr><hr></hr><hr></hr>
                      <ButtonToolbar>
                        <Button variant="primary">Admin</Button>
                        <Button variant="danger">Delete</Button>
                      </ButtonToolbar>
                  </Jumbotron>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}


export default UserManagement;