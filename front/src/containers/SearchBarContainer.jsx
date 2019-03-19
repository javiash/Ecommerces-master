import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { fetchSearch, fetchSearchs } from "../store/actions/Searchs";

class SearchContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      SearchBarQuery: '',
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchInput(Search) {
    this.setState({ SearchBarQuery: Search });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.SearchBarQuery) {
      this.props.fetchSearchs(this.state.SearchBarQuery);
    }
  }

  render() {
    console.log(this.props)
    return (
      <SearchBar
      search={this.props.search}
        setSearch={this.handleSearchInput}
        SearchBarQuery={this.state.SearchBarQuery}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search,
    searchs: state.searchs
  };
}

function mapDispatchToProps() {
  return {
    fecthSearch: search => dispatch(fetchSearch(search)),
    fetchSearchs: searchs => dispatch(fetchSearchs(searchs))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
