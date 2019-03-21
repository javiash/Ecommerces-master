/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/home";
import Log from "./log";
import Header from "../components/Header";
import Search from "../components/Search"
import SearchBarContainer from "./SearchBarContainer";
import { fetchLogin } from "../store/actions/actions";
import ABookContainer from "./aBookcontainer";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchLogin();
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
          <Route path="/search" render={() => <Search/>} />
          <Route path="/book" render={() => <ABookContainer />} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLogin: state.login.isLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchLogin: () => dispatch(fetchLogin())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
