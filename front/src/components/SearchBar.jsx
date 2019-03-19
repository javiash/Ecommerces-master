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
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const test = [
  { name: 'categoria 1' },
  { name: 'categoria 2' },
  { name: 'categoria 3' },
  { name: 'test' },
];
export default (props) => {
  const SetChange = (e) => {
    props.setSearch(e.target.value);
  };
  return (
    <Navbar bg="light" expand="lg" width="10px">
      {console.log(props)}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="categories" id="basic-nav-dropdown">
            {test.map(items => (
              <div>
                <Nav.Link key={items.id}>{items.name}</Nav.Link>
              </div>
            ))}
          </NavDropdown>
        </Nav>
        <Form inline onSubmit={props.handleSubmit}>
          <FormControl
            size="sm"
            value={props.SearchQuery}
            onChange={SetChange}
            style={{ width: '190px' }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Link to="/Search">
            <Button size="sm" type="submit" variant="outline-success">
              Search
            </Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
