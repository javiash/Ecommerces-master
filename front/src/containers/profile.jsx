import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import {
  setShowModal,
  fetchLogin,
  fetchUser,
  setLogin,
} from '../store/actions/actions';


function Profile() {
  return (
    <Container>
      <Row>
        <Col>
          <div id="username" style={{ width: '100%', textAlign: 'center', margin: '25px' }}>
            <h1>{state.login.isLogin.email} User Profile</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={2} />
        <Col xs={4}>
          <div id="menu" style={{ padding: '25px' }}>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/history">History</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin">Admin Panel</a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={4}>
          <div id="info" style={{ padding: '25px' }}>
            <h2>Information</h2>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" />
              </Form.Group>
              <Form.Group controlId="formGroupAdress">
                <Form.Label>Adress</Form.Label>
                <Form.Control type="password" placeholder="Adress" />
              </Form.Group>
              <Button variant="primary" type="submit">Update</Button>
            </Form>
          </div>
        </Col>
        <Col xs={2} />
      </Row>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    showModal: state.login.showModal,
    isLogin: state.login.isLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setShowModal: () => dispatch(setShowModal()),
    setLogin: () => dispatch(setLogin()),
    fetchLogin: user => dispatch(fetchLogin(user)),
    fetchUser: user => dispatch(fetchUser(user)),
  };
}

export default Profile(connect(mapStateToProps, mapDispatchToProps)(Profile));
