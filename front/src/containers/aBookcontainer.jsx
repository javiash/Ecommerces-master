/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import Axios from 'axios';
import { userAddCart, noUserAddCart } from '../store/actions/actions';

import TableCart from '../components/tablecart';


class ABookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hide: true,
      book: {
        id: 1,
        name: 'Game of Thrones',
        author: 'George R. R. Martin',
        year: '6 de agosto de 1996',
        editorial: 'Bantam Spectra',
        description: 'Se trata de la primera entrega de la serie de gran popularidad Canción de hielo y fuego. La novela se caracteriza por su estética medieval, la descripción de numerosos personajes bien detallados, la contraposición de puntos de vista de los múltiples protagonistas, su trama con giros inesperados y un uso sutil y moderado de los aspectos mágicos tan comunes en otras obras de fantasía heroica.',
        quantity: 1,
        sold: 15400,
        price: 1500,
        stock: 200,
      },
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   Axios.get(this.props.url)
  //     .them(res => this.setState({ book: res.data }));
  // }
  handleClick() {
    if (this.props.isLogin) {
      this.props.userAddCart(this.state.book, this.props.isLogin.id);
    } else {
      this.props.noUserAddCart(this.state.book);
    }
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }


  render() {
    const { book, show } = this.state;
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
                  <strong>author: </strong>
                  {book.author}
                </Card.Text>
                <Card.Text>
                  <strong>year:</strong>
                  {book.year}
                </Card.Text>
                <Card.Text>
                  <strong>description:</strong>
                  {book.description}
                </Card.Text>
                <Card.Text>
                  <strong>editorial:</strong>
                  {book.editorial}
                </Card.Text>
                <Card.Text>
                  <strong>sold:</strong>
                  {book.sold}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: '20rem' }}>

              <Card.Body>
                <Card.Title>shopping cart</Card.Title>
                <Card.Text>
                  <strong>price:</strong>
                  {book.price}
                </Card.Text>
                <Card.Text>
                  <strong>stock:</strong>
                  {book.stock}
                </Card.Text>
                <Button variant="primary" onClick={this.handleClick}>add to cart</Button>
              </Card.Body>
            </Card>
          </div>

          <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={this.handleHide}
          >

            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Congratulation! Your book is added to your Shopping Cart
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TableCart />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleHide}>Continue shopping</Button>
              <Link to="/"><Button>Shopping Cart</Button></Link>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAddCart: (book, id) => dispatch(userAddCart(book, id)),
    noUserAddCart: (book, id) => dispatch(noUserAddCart(book, id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ABookContainer);
