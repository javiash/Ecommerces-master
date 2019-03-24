/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
import React from 'react';

import { Button, Card, Form } from 'react-bootstrap';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MessegeUser from '../components/message';
import BookView from '../components/bookview';


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
      messages: [{
        author: 'leo',
        mess: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ea officiis molestias quam corporis assumenda, perspiciatis nostrum maiores optio minima voluptas harum exercitationem. Molestiae commodi nostrum quam voluptas consequuntur omnis.',
      }, {
        author: 'juan',
        mess: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolor adipisci, voluptas voluptate, saepe facilis quisquam quasi nam dolores facere in porro nostrum necessitatibus enim ipsam ratione quia sint quo.',
      }],

    };
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   Axios.get(this.props.url)
  //     .them(res => this.setState({ book: res.data }));
  // }


  render() {
    //const { book } = this.state;
    return (

      <div>
        <BookView message={this.state.book} />
        <div className="titlebook">
          <Card.Header>Opinion of the book</Card.Header>
        </div>
        <div>
          {this.state.messages.map(mes => (
            <div className="messagesContainer">

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
        </div>
        {this.props.isLogin ? <MessegeUser /> : <span />}
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

  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ABookContainer));
