import React from 'react';
import {
  Button, ButtonGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => (

  <ButtonGroup vertical>
    <Link to="/admin/"><Button>Go back</Button></Link>
    <Link to="/admin/productManagement/create"><Button>Create product</Button></Link>
    <Link to="/admin/productManagement/create"><Button>Edit product</Button></Link>
    <Link to="/admin/productManagement/createCat"><Button>Create category</Button></Link>
    <Link to="/admin/productManagement/editCat"><Button>Edit product category</Button></Link>
    <Link to="/admin/productManagement/stockMan"><Button>Stock management</Button></Link>
  </ButtonGroup>
);
