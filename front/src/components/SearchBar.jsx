/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Button,
  FormControl,
  Form,
  NavDropdown,
  Nav,
  Navbar,
  Badge,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const test = [
  { name: 'categoria 1' },
  { name: 'categoria 2' },
  { name: 'categoria 3' },
  { name: 'categoria 4' },
];
const SearchBar = (props) => {
  const SetChange = (e) => {
    props.setSearch(e.target.value);
  };
  return (
    <Navbar bg="light" expand="lg" width="10px">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="categories" id="basic-nav-dropdown">
            {test.map(items => (
              <div key={items.name}>
                <Nav.Link>{items.name}</Nav.Link>
              </div>
            ))}
          </NavDropdown>
        </Nav>

        <Button variant="warning">
          <Link to="/shoppingcart">
            <Badge variant="light">{props.cart.length}</Badge>
          U$S
            {props.cart.reduce((acc, val) => acc + Math.ceil(val.price * val.quantity), 0)}
          </Link>
        </Button>


        <Form inline onSubmit={props.handleSubmit}>
          <FormControl
            size="sm"
            value={props.SearchBarQuery}
            onChange={SetChange}
            style={{ width: '190px' }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button size="sm" type="submit" variant="outline-success">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
    cart: state.cart.cart,
  };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
