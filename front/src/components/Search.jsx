import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchSearch } from "../store/actions/Searchs";
import { connect } from "react-redux";

class searches extends React.Component {
  constructor() {
    super();
    this.state={
      search:{}
    }
  }

  handleSubmit(event) {
    if (this.props) {
      this.props.fetchSearch(event);
      // this.props.history.push(`/search/${this.state.SearchBarQuery}`)
    }
  }

  
  render() {
    console.log("alooooooooo", this.props.search);
    return (
      <div className="Books">
        <div className="itemA">
          <ButtonGroup vertical>
            <Link to="/searchBooks">
              <Button>Los Mas Vendidoss</Button>
            </Link>
            <Button>Menor Precio</Button>
            <Button>Mayor Precio</Button>
            <Button>Año de publicacion</Button>
          </ButtonGroup>
        </div>
        {this.props.searchs.map(item => (
          <div key={item.name}>
            {console.log(item.id)}
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle>{item.author}</Card.Subtitle>
                <Card.Text> Price:{item.price}$</Card.Text>
                <Card.Text> release date {item.year}</Card.Text>
                <Link to={`/book/${item.id}`}>
                  <Button
                  value={item.id}
                    Onclick={this.handleSubmit(item.id)}
                    variant="secondary"
                  >
                    Ir al Libro
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
        <nav className="pagination item " aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link to="/" className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </Link>
            </li>
            <li className="page-item">
              <Link to="/" className="page-link">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link to="/" className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchs: state.searches.searchs,
    // search: state.seaches.search
  };
}
const mapDispatchToProps = dispatch => {
  return {
    fetchSearch: search => dispatch(fetchSearch(search))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searches);
