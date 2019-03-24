import React from 'react';
import { Jumbotron, Form, Button } from 'react-bootstrap';


export default () => (
    <Jumbotron>
        <h1>Create Category</h1>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>New category</Form.Label> <Form.Control type="text" placeholder="New category" />

                <hr></hr><hr></hr>
                <Button as="input" type="submit" value="Submit" />
            </Form.Group>
        </Form>
    </Jumbotron>
)