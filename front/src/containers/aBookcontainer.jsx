/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */

import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import {
  Button, Card, Modal, Form,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  userAddCart, noUserAddCart, setComment, fetchComments,
} from '../store/actions/actions';
import { fetchSearch } from '../store/actions/Searchs';
import TableCart from '../components/tablecart';


class ABookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hide: true,
      quantity: 1,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearch(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
  }


  handleClick() {
    if (this.props.isLogin) {
      this.props.userAddCart({
        ...this.props.search, quantity: this.state.quantity,
      }, this.props.isLogin.id);
    } else {
      this.props.noUserAddCart(
        { ...this.props.search, quantity: this.state.quantity }, this.state.quantity,
      );
    }
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handlerChange(e) {
    e.preventDefault();
    console.log(parseInt(e.target.value, 10));
    this.setState({ quantity: parseInt(e.target.value, 10) });
  }

  postcomment() {
    this.props.setComment(
      this.inputCom.value, this.inputRat.value, this.props.isLogin.id, this.props.search.id,
    );
  }

  render() {
    const { show } = this.state;
    const { search, comments } = this.props;
    const more5 = (
      <Form.Control as="select" onChange={this.handlerChange.bind(this)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Control>
    );
    const createOptions = () => {
      const table = [];
      for (let i = 0; i < search.stock; i++) {
        table.push(<option value={i + 1} key={i + 1}>{i + 1}</option>);
      }
      return table;
    };

    const less5 = (
      <Form.Control as="select" onChange={this.handlerChange.bind(this)}>
        {createOptions()}
      </Form.Control>
    );


    const quantity = search.stock > 5 ? more5 : less5;

    const messages = (
      <Form>
        <div className="titlebook">
          <Card.Header>write your opinion</Card.Header>
        </div>
        <div className="messagesContainer">
          <div>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control ref={(comment) => { this.inputCom = comment; }} as="textarea" rows="3" />
            </Form.Group>
          </div>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>punctuation</Form.Label>
            <Form.Control as="select" ref={(rating) => { this.inputRat = rating; }}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Control>
          </Form.Group>
          <Button
            variant="primary"
            onClick={
              this.postcomment.bind(this)
            }
          >
            add to coment
          </Button>
        </div>
      </Form>
    );

    return (
      <div>
        <div>
          <h1>{search.name}</h1>
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
                <Card.Title>{search.name}</Card.Title>
                <Card.Text>
                  <strong>author: </strong>
                  {search.author}
                </Card.Text>
                <Card.Text>
                  <strong>year: </strong>
                  {search.year}
                </Card.Text>
                <Card.Text>
                  <strong>description: </strong>
                  <br />
                  {search.description}
                </Card.Text>
                <Card.Text>
                  <strong>editorial:</strong>
                  {search.editorial}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '20rem' }}>
              <Card.Body>

                <Form>
                  <Card.Text>
                    <strong>price:</strong>
                    {search.price}
                  </Card.Text>
                  <Card.Text>
                    <strong>stock:</strong>
                    {search.stock}
                  </Card.Text>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Quantity</Form.Label>
                    {quantity}
                  </Form.Group>
                  <Button variant="primary" onClick={this.handleClick}>add to cart</Button>
                </Form>
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
        <div className="titlebook">
          <Card.Header>Reviews</Card.Header>
        </div>
        <div>
          {comments.map((mes, i) => (
            <div className="messagesContainer" key={i}>

              <Card>
                <Card.Header>{mes.from.email}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    {mes.content}
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
          ))}
          {this.props.isLogin ? messages : <span />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
    search: state.searches.search,
    comments: state.searches.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAddCart: (book, id) => dispatch(userAddCart(book, id)),
    noUserAddCart: (book, id) => dispatch(noUserAddCart(book, id)),
    fetchSearch: search => dispatch(fetchSearch(search)),
    setComment: (comment, rating, id, bookid) => dispatch(setComment(comment, rating, id, bookid)),
    fetchComments: id => dispatch(fetchComments(id)),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ABookContainer));
