
import React from 'react';
import {
  Button, ButtonGroup, Row, Col, Container, Form, Jumbotron, Tab, Nav,
} from 'react-bootstrap';
import CreateArticle from '../components/CreateArticle';
import EditArticle from '../components/EditArticle';
import CreateCategory from '../components/CreateCategory';


class ProductManagement extends React.Component {
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
                <Nav.Item>
                  <Nav.Link eventKey="second">Edit product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Create category</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <CreateArticle />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <EditArticle />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <CreateCategory />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>


    );
  }
}

export default ProductManagement;
