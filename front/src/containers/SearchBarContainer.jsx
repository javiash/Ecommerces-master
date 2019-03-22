import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { withRouter }from 'react-router-dom'
import { fetchSearch, fetchSearchs } from "../store/actions/Searchs";

class SearchContainer extends React.Component {
  constructor() {
    super();
    this.state={
      SearchBarQuery:""
    }
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSearchInput(Searchs) {
    this.setState({ SearchBarQuery: Searchs });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.SearchBarQuery) {
      this.props.fetchSearchs(this.state.SearchBarQuery);
      this.props.history.push(`/search/${this.state.SearchBarQuery}`)
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

function mapStateToProps(state, ownProps) {
  return {
    search: state.searches.search,
    searchs: state.searches.searchs,
      };
}

function mapDispatchToProps(dispatch) {
  return {
    // fecthSearch: search => dispatch(fetchSearch(search)),
    fetchSearchs: searchs => dispatch(fetchSearchs(searchs))
  };
}

export default withRouter (connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer));
connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)