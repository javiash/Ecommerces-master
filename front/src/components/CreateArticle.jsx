import React from 'react';
import { Jumbotron, Form, Button } from 'react-bootstrap';


export default ({ createProductSubmit }) => (
  <Jumbotron>
    <h1>Create new article</h1>
    <Form onSubmit={createProductSubmit}>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label> <Form.Control type="text" placeholder="Book title" />
        <Form.Label>Author</Form.Label> <Form.Control type="text" placeholder="Author name" />
        <Form.Label>Year of release</Form.Label> <Form.Control type="text" placeholder="Year of release" />
        <Form.Label>Editorial</Form.Label> <Form.Control type="text" placeholder="Editorial" />
        <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image url" />
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" />
        <Form.Label>Stock</Form.Label>
        <Form.Control type="text" placeholder="Stock" />
        <hr></hr><hr></hr>
        <Button as="input" type="submit" value="Submit"/>
      </Form.Group>
    </Form>
  </Jumbotron>
)
