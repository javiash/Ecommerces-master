/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */

import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import {
  Button, Card, Modal,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import Axios from 'axios';
import { userAddCart, noUserAddCart } from '../store/actions/actions';
import { fetchSearch } from '../store/actions/Searchs';
import MessegeUser from '../components/message';

import TableCart from '../components/tablecart';


class ABookContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      hide: true,
      messages: [{
        author: 'leo',
        mess: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ea officiis molestias quam corporis assumenda, perspiciatis nostrum maiores optio minima voluptas harum exercitationem. Molestiae commodi nostrum quam voluptas consequuntur omnis.',
      }, {
        author: 'juan',
        mess: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolor adipisci, voluptas voluptate, saepe facilis quisquam quasi nam dolores facere in porro nostrum necessitatibus enim ipsam ratione quia sint quo.',
      }],

    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  componentDidMount(){
    this.props.fetchSearch(this.props.match.params.id)
  }
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
    const { search }=this.props
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
                  <strong>year:</strong>
                  {search.year}
                </Card.Text>
                <Card.Text>
                  <strong>description:</strong>
                  {search.description}
                </Card.Text>
                <Card.Text>
                  <strong>editorial:</strong>
                  {search.editorial}
                </Card.Text>
                <Card.Text>
                  <strong>sold:</strong>
                  {search.sold}
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
                  {search.price}
                </Card.Text>
                <Card.Text>
                  <strong>stock:</strong>
                  {search.stock}
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
        <div className="titlebook">
          <Card.Header>Opinion of the book</Card.Header>
        </div>
        <div>
          {this.state.messages.map((mes, i) => (
            <div className="messagesContainer" key={i}>

              <Card>
                <Card.Body>
                  <Card.Title>{mes.author}</Card.Title>
                  <Card.Text>
                    {mes.mess}
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
          ))}
          {this.props.isLogin ? <MessegeUser /> : <span />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
    search: state.searches.search
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userAddCart: (book, id) => dispatch(userAddCart(book, id)),
    noUserAddCart: (book, id) => dispatch(noUserAddCart(book, id)),
    fetchSearch: search => dispatch(fetchSearch(search)),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(ABookContainer));
