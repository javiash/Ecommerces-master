/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Table,
  Badge,
} from 'react-bootstrap';

export default ({ orderList }) => (
  <div>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th><h4><Badge pill variant="success">Status</Badge></h4></th>
          <th><h4><Badge pill variant="success">Order Description</Badge></h4></th>
          <th><h4><Badge pill variant="success">Address</Badge></h4></th>
          <th><h4><Badge pill variant="success">e-mail</Badge></h4></th>
        </tr>
      </thead>
      <tbody>
        {orderList.map((order, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{order.orderDesc}</td>
            <td>{order.status}</td>
            <td>{order.direccion}</td>
            <td>{order.mail}</td>
          </tr>
        ))
    }
      </tbody>
    </Table>
  </div>
);
