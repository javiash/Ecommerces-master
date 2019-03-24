/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/home';
import Log from './log';
import Header from '../components/Header';
import Search from '../components/Search';
import SearchBarContainer from './SearchBarContainer';
import { fetchLogin, fetchShopcart, setCart } from '../store/actions/actions';
import ABookContainer from './aBookcontainer';
import Profile from './profile';

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchLogin()
      .then(() => {
        if (this.props.isLogin) {
          this.props.fetchShopcart(this.props.isLogin.id);
        } else {
          const local = JSON.parse(localStorage.getItem('Carrito'));
          if (typeof local === 'object' && local != null) {
            this.props.setCart(local.cart);
          }
        }
      });
  }

  render() {
    return (
      <div>
        <section>
          <Header />
          <SearchBarContainer />
        </section>
        <Switch>
          <Route path="/home" render={() => <Home />} />
          <Route path="/log" render={() => <Log />} />
          <Route path="/book/:id" exact render={({ match }) => <ABookContainer bookId={match} />} />
          <Route path="/search/:name" render={({ match }) => <Search nameId={match}/>} />
          <Route path="/book" render={() => <ABookContainer />} />
          <Route path="/profile" render={() => <Profile />} />

          <Redirect from="/" to="/home" />
        </Switch>
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
    fetchLogin: () => dispatch(fetchLogin()),
    fetchShopcart: id => dispatch(fetchShopcart(id)),
    setCart: cart => dispatch(setCart(cart)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
