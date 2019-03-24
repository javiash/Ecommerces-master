/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


function TableCart(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th />
          <th>Book</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.cart.map((cart, i) => (
          <tr key={cart.name}>
            <td>{++i}</td>
            <td>{cart.name}</td>
            <td>{cart.quantity}</td>
            <td>{cart.price * cart.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}


function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
  };
}

function mapDispatchToProps() {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableCart);
