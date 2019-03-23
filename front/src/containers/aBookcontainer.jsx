/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React from 'react';

import { Button, Card } from 'react-bootstrap';
import Axios from 'axios';


class ABookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      book: {
        name: 'Game of Thrones',
        author: 'George R. R. Martin',
        year: '6 de agosto de 1996',
        editorial: 'Bantam Spectra',
        description: 'Se trata de la primera entrega de la serie de gran popularidad Canción de hielo y fuego. La novela se caracteriza por su estética medieval, la descripción de numerosos personajes bien detallados, la contraposición de puntos de vista de los múltiples protagonistas, su trama con giros inesperados y un uso sutil y moderado de los aspectos mágicos tan comunes en otras obras de fantasía heroica.',
        sold: 15400,
        price: 1500,
        stock: 200,
      },
    };
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   Axios.get(this.props.url)
  //     .them(res => this.setState({ book: res.data }));
  // }


  render() {
    const { book } = this.state;
    return (

      <div>
        <div>
          <h1>{book.name}</h1>

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
                <Card.Title>{book.name}</Card.Title>
                <Card.Text>
                  <p>
                    <strong>author: </strong>
                    {book.author}
                  </p>
                  <p>
                    <strong>year:</strong>
                    {book.year}
                  </p>
                  <p>
                    <strong>description:</strong>
                    {book.description}
                  </p>
                  <p>
                    <strong>editorial:</strong>
                    {book.editorial}
                  </p>
                  <p>
                    <strong>sold:</strong>
                    {book.sold}
                  </p>
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
                    {book.price}
                  </p>
                  <p>
                    <strong>stock:</strong>
                    {book.stock}
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
}

export default ABookContainer;
