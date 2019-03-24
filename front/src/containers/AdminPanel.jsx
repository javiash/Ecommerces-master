import React from 'react';
import { Button, ButtonGroup, Jumbotron, Row, Col, Container, Form } from 'react-bootstrap';

export default () => (

    <ButtonGroup vertical>

        <Button href='/admin/productManagement/create'>Create product</Button>
        <Button href='/admin/productManagement/edit'>Edit product</Button>
        <Button href='/admin/productManagement/createCat'>Create category</Button>
        <Button href='/admin/productManagement/editCat'>Edit product category</Button>
        <Button href='/admin/productManagement/stockMan'>Stock management</Button>

    </ButtonGroup>
)