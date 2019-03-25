/* eslint-disable no-global-assign */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { Link, withRouter } from 'react-router-dom';
import {
  Form, Button, ButtonToolbar, ButtonGroup, DropdownButton, Dropdown,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  setShowModal, fetchLogin, fetchUser, setLogin, setLogout,
} from '../store/actions/actions';
import LogReg from '../containers/logreg';


class Header extends React.Component {
  logOut() {
    this.props.setLogout();
  }

  render() {
    if (this.props.isLogin != null) {
      name = this.props.isLogin.email;
    }
    const profile = this.props.isLogin != null ? this.props.isLogin.id : 'meh';

    const userLogin = (
      <ButtonGroup>
        <DropdownButton as={ButtonGroup} title={name} id="bg-nested-dropdown" drop="left">
          <Dropdown.Item key="1" eventKey="1" name="profile"><Link to={`/profile/${profile}`}>Profile</Link></Dropdown.Item>
          <Dropdown.Item key="2" eventKey="2" name="purchases"> My purchases</Dropdown.Item>
          <Dropdown.Item key="3" eventKey="3" onClick={this.logOut.bind(this)}>
            <Link to="/"> Log Out </Link>
          </Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    );


    const logReg = (
      <ButtonToolbar>
        <Button
          variant="primary"
          onClick={this.props.setShowModal}
        >
        Sign in/sign Up
        </Button>

        <LogReg />
      </ButtonToolbar>
    );

    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="mr-auto">
          <Link to="/">
            <img width="150px" src="/Images/BookStore.png" alt="" />
          </Link>
        </Navbar.Brand>
        <div>
          <Form inline>
            {this.props.isLogin ? userLogin : logReg }
          </Form>
        </div>
      </Navbar>
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
    setShowModal: () => dispatch(setShowModal()),
    setLogin: user => dispatch(setLogin(user)),
    fetchLogin: user => dispatch(fetchLogin(user)),
    fetchUser: user => dispatch(fetchUser(user)),
    setLogout: () => dispatch(setLogout()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
