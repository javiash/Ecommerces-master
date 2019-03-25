/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable class-methods-use-this */

import React from 'react';
import {
  Row, Col, Tab, Nav,
} from 'react-bootstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import CreateArticle from '../components/CreateArticle';
import EditArticle from '../components/EditArticle';
import CreateCategory from '../components/CreateCategory';


class ProductManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    this.createProductSubmit = this.createProductSubmit.bind(this);
  }

  createProductSubmit(e) {
    e.preventDefault();
    const newBookData = {
      name: e.target.elements[0].value,
      author: e.target.elements[1].value,
      year: e.target.elements[2].value,
      editorial: e.target.elements[3].value,
      description: e.target.elements[4].value,
      cover: e.target.elements[5].value,
      price: parseFloat(e.target.elements[6].value),
      stock: parseInt(e.target.elements[7].value, 10),
      sold: 0,
    };
    for (const i in newBookData) {
      if (newBookData[i] === '') {
        this.setState({ error: true });
        alert(`ERROR: Por favor chequee el campo "${i}" esten completos!`);
      }
      if (!newBookData.price || !newBookDatastock) {
        this.setState({ error: true });
      }
      if (this.state.error === false) {
        Axios.post('/singlebook/create', newBookData)
          .then(res => console.log(res));
      }
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
                  <Link to="/admin">Go back</Link>
                </Nav.Item>
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
                  <CreateArticle createProductSubmit={this.createProductSubmit} />
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
