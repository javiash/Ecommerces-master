import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  setShowModal,
  fetchLogin,
  fetchUser,
  setLogin,
} from '../store/actions/actions';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    event.preventDefault();
    console.log(e)
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div id="username" style={{ width: '100%', textAlign: 'center', margin: '25px' }}>
              {<h2>{`${this.props.isLogin.email} Profile`}</h2>}
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
              <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder={this.props.isLogin.email} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="New Password" />
                </Form.Group>
                <Form.Group controlId="formGroupAdress">
                  <Form.Label>Adress</Form.Label>
                  <Form.Control type="text" placeholder={this.props.isLogin.adress || 'Input your adress'} />
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
}

function mapStateToProps(state) {
  return {
    showModal: state.login.showModal,
    isLogin: state.login.isLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setLogin: () => dispatch(setLogin()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
