
import React from 'react';
import { Button, FormControl, Row, Col, Form, Jumbotron, Tab, Nav, ButtonToolbar } from 'react-bootstrap';
import Axios from 'axios';

import DeleteOrAdmin from '../components/DeleteOrAdmin'

class UserManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentID: 1,
    }
    this.state={
      desiredUser: "",
      modalShow: false ,
      userNotFound: true,
    }
    this.userOnChangeHandle= this.userOnChangeHandle.bind(this);
    this.userHandle= this.userHandle.bind(this);
    this.deleteUser= this.deleteUser.bind(this);
    this.adminConversion= this.adminConversion.bind(this);
  }

  userOnChangeHandle(e){
    e.preventDefault();
    this.state.desiredUser= e.target.value;
  }

  userHandle(e){
    e.preventDefault();
    console.log('Mando a buscar el usuario', this.state.desiredUser);
    if(!this.state.desiredUser){
      return;
    }
    else{
      Axios.get(`/admin/user/${this.state.desiredUser}`, { email: this.state.desiredUser })
      .then( user => {
        console.log("LLEGO EL USER?",user.data)
        if (user.data) {
          this.setState({ modalShow: true , userNotFound: false})
        }else{
          this.setState({ userNotFound: true, modalShow: true})
        }

      })
    }
  }
  adminConversion(e){
    e.preventDefault();
    console.log("adminConversion");
    Axios.get(`/admin/user/convertAdmin/${this.state.desiredUser}`)
    .then(
      resp => console.log('Actualizo, user admin!')
    )
    
    
  }
  deleteUser(e){
    e.preventDefault();
    console.log("deleteUser");

    
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });
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
                      <FormControl type="text" onChange={(e) => this.userOnChangeHandle(e)} placeholder="Search user" className="mr-sm-2" />
                      <Button onClick={this.userHandle} type="submit" variant="outline-success">Search user</Button>
                    </Form>
                    <hr></hr><hr></hr><hr></hr>

                      <DeleteOrAdmin
                        userNotFound={this.state.userNotFound}
                        show={this.state.modalShow}
                        onHide={modalClose}
                        adminConversion={this.adminConversion}
                        deleteUser={this.deleteUser}
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