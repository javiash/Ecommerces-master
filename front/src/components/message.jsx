/* eslint-disable no-unused-expressions */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Card, Button } from 'react-bootstrap';
import { setComment } from '../store/actions/actions';

const message = props => (
  <div>
    <Form>
      <div className="titlebook">
        <Card.Header>write your opinion</Card.Header>
      </div>
      <div className="messagesContainer">
        <div>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control ref={comment => this.inputCom = comment} as="textarea" rows="3" />
          </Form.Group>
        </div>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>punctuation</Form.Label>
          <Form.Control as="select" ref={rating => this.inputRat = rating} >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={props.setComment(this.inputCom.value, this.inputRat, this.props.isLogin.id  )}>add to coment</Button>
      </div>
    </Form>
  </div>
)

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setComment: (comment, rating, id) => dispatch(setComment(comment, rating, id)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(message));