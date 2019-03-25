import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { userRemoveCart } from '../store/actions/actions';


class ShoppingCart extends React.Component {
  handlerClick(e) {
    e.preventDefault();
    { console.log('PROPS', e.target.value); }
    this.props.userRemoveCart(e.target.value, this.props.isLogin.id);
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Sub total</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cart, i) => (
              <tr key={cart.name}>
                <td>{++i}</td>
                <td>{cart.name}</td>
                <td>{cart.quantity}</td>
                <td>
                  <Button
                    value={cart.id}
                    onClick={this.handlerClick.bind(this)}
                  >
                  Remove book
                  </Button>

                </td>
                <td>{cart.price * cart.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
    cart: state.cart.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userRemoveCart: (bookid, userid) => dispatch(userRemoveCart(bookid, userid)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
