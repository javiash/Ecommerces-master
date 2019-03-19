/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Modal, Button, Form, Tabs, Tab,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  setShowModal, setHideModal, fetchLogin, fetchUser,
} from '../store/actions/actions';


class LogReg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usedEmail: false,
    };
  }

  handleLogin(e) {
    e.preventDefault();
    const email = this.inputLoginEmail.value;
    const password = this.inputLoginPass.value;
    axios.post('/auth/login', {
      email,
      password,
    })
      .then((user) => {
        this.props.fetchUser(user.data);
        this.props.setHideModal();
      });
  }

  handleRegister(e) {
    e.preventDefault();
    const email = this.inputEmail.value;
    const password = this.inputPass.value;
    axios.post('/auth/register', {
      email,
      password,
    })
      .then((status) => {
        if (status.data === 'no') {
          this.setState({ usedEmail: true });
        }
      });
  }

  render() {
    return (
      <Modal
        show={this.props.showModal}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={this.props.setHideModal}
      >
        <Modal.Body>
          <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
            <Tab eventKey="login" title="Login">
              <Form>
                <Form.Group controlId="formBasicLoginEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control ref={(email) => { this.inputLoginEmail = email; }} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicLoginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={(password) => { this.inputLoginPass = password; }} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={this.handleLogin.bind(this)}>
                  Login
                </Button>
              </Form>
            </Tab>
            <Tab eventKey="Sign Up" title="Sign Up">
              <Form>
                <Form.Group controlId="formBasicRegisterEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control ref={(email) => { this.inputEmail = email; }} type="email" placeholder="Enter email" />
                  {this.state.usedEmail === true ? (
                    <Form.Text className="text-muted">
                      Email allready used
                    </Form.Text>
                  ) : <span />}
                </Form.Group>

                <Form.Group controlId="formBasicRegisterPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={(password) => { this.inputPass = password; }} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" onClick={this.handleRegister.bind(this)}>
                  Register
                </Button>
              </Form>
            </Tab>
          </Tabs>

        </Modal.Body>
        <Modal.Footer>
          <a href="/auth/google">
            <Button>Sign in Google</Button>
          </a>
          <Button onClick={this.props.setHideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
    showModal: state.login.showModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setShowModal: () => dispatch(setShowModal()),
    setHideModal: () => dispatch(setHideModal()),
    fetchLogin: user => dispatch(fetchLogin(user)),
    fetchUser: user => dispatch(fetchUser(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogReg);
