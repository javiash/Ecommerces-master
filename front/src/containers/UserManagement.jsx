
/* eslint react/prop-types: 0 */
import React from 'react';
import {
  Button, FormControl, Row, Col, Form, Jumbotron, Tab, Nav,
} from 'react-bootstrap';
import Axios from 'axios';

import DeleteOrAdmin from '../components/DeleteOrAdmin';

class UserManagement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      desiredUser: '',
      modalShow: false,
      userNotFound: true,
      actionDone: false,
      isAdmin: true,
    };
    this.userOnChangeHandle = this.userOnChangeHandle.bind(this);
    this.userHandle = this.userHandle.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.adminConversion = this.adminConversion.bind(this);
    this.resetActionDone = this.resetActionDone.bind(this);
  }

  userOnChangeHandle(e) {
    e.preventDefault();
    this.state.desiredUser = e.target.value;
  }

  userHandle(e) {
    e.preventDefault();
    if (!this.state.desiredUser) {
      return;
    }

    Axios.get(`/admin/user/${this.state.desiredUser}`, { email: this.state.desiredUser })
      .then((user) => {
        if (user.data) {
          this.setState({ modalShow: true, userNotFound: false });
        }else {
          this.setState({ modalShow: true, userNotFound: true });
        }
      });
  }

  adminConversion(e) {
    e.preventDefault();
    Axios.get(`/admin/user/convertAdmin/${this.state.desiredUser}`)
      .then(
        this.setState({ actionDone: true, isAdmin: true }),
      );
  }

  deleteUser(e) {
    e.preventDefault();
    Axios.get(`/admin/user/deleteUser/${this.state.desiredUser}`)
      .then(
        (resp) => {
          this.setState({ actionDone: true, isAdmin: false });
        },
      );
  }

  resetActionDone() {
    this.state.actionDone = false;
  }

  render() {
    const modalClose = () => this.setState({ modalShow: false });
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
                    <Form inline onSubmit={this.userHandle}>
                      <FormControl type="text" onChange={e => this.userOnChangeHandle(e)} placeholder="Search user" className="mr-sm-2" />
                      <Button onClick={this.userHandle} type="submit" variant="outline-success">Search user</Button>
                    </Form>
                    <hr />
                    <hr />
                    <hr />

                    <DeleteOrAdmin
                      userNotFound={this.state.userNotFound}
                      show={this.state.modalShow}
                      onHide={modalClose}
                      adminConversion={this.adminConversion}
                      deleteUser={this.deleteUser}
                      userWho={this.state.desiredUser}
                      actionDone={this.state.actionDone}
                      resetActionDone={this.resetActionDone}
                      isAdmin={this.state.isAdmin}
                    />

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
