/* eslint-disable no-unused-expressions */
import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

export default () => (
  <div>
    <Form>
      <div className="titlebook">
        <Card.Header>write your opinion</Card.Header>
      </div>
      <div className="messagesContainer">
        <div>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>punctuation</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary">add to coment</Button>
      </div>
    </Form>
  </div>
);
