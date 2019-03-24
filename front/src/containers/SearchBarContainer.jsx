import React from 'react';
import { connect } from 'react-redux';
import { withRouter }from 'react-router-dom'
import SearchBar from "../components/SearchBar";
import { fetchSearch, fetchSearchs } from '../store/actions/Searchs';

class SearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      SearchBarQuery: '',
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchSearchs()
  }

  handleSearchInput(Searchs) {
    this.setState({ SearchBarQuery: Searchs });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.SearchBarQuery) {
      this.props.fetchSearchs(this.state.SearchBarQuery);
      this.props.history.push(`/search/${this.state.SearchBarQuery}`);
    }
  }

  render() {
    return (
      <div>
        <SearchBar
          value={this.props.searchs}
          setSearch={this.handleSearchInput}
          handleSubmit={this.handleSubmit}
          SearchBarQuery={this.state.SearchBarQuery}
        />
      </div>

    );
  }
}
  
function mapStateToProps(state) {
  return {
    searchs: state.searches.searchs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSearchs: searchs => dispatch(fetchSearchs(searchs)),
  };
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchContainer));
