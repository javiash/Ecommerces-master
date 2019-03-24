import React from 'react';
import { Card, Button } from 'react-bootstrap';


export default function BookView({ message }) {
  return (
    <div>
      <div>
        <h1>{message.name}</h1>

      </div>
      <div className="bookContainer">
        <div>
          <Card style={{ width: '15rem' }}>
            <div>
              <Card.Img variant="top" src="/Images/gameOfTrones.jpg" />
            </div>
          </Card>
        </div>

        <div>
          <Card style={{ width: '25rem' }}>

            <Card.Body>
              <Card.Title>{message.name}</Card.Title>
              <Card.Text>
                <strong>author: </strong>
                {message.author}
              </Card.Text>
              <Card.Text>
                <strong>year:</strong>
                {message.year}
              </Card.Text>
              <Card.Text>
                <strong>description:</strong>
                {message.description}
              </Card.Text>
              <Card.Text>
                <strong>editorial:</strong>
                {message.editorial}
              </Card.Text>
              <Card.Text>
                <strong>sold:</strong>
                {message.sold}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: '20rem' }}>

            <Card.Body>
              <Card.Title>shopping cart</Card.Title>
              <Card.Text>
                <p>
                  <strong>price:</strong>
                  {message.price}
                </p>
                <p>
                  <strong>stock:</strong>
                  {message.stock}
                </p>
              </Card.Text>
              <Button variant="primary">add to cart</Button>
            </Card.Body>
          </Card>

        </div>
      </div>
    </div>
  );
}
