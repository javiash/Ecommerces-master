import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const searches = props => (
  console.log("alfiinnnnn",props.searchs),
  (
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
      {props.searchs.map(item => (
      <div key={item.name}>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
          <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle>{item.author}</Card.Subtitle>
            <Card.Text> Price:{item.price}$</Card.Text>
            <Card.Text> release date {item.year}</Card.Text>
            <Link to="/">
              <Button variant="secondary">Ir al Libro</Button>
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
<<<<<<< HEAD
  </div>
=======
    </div>
  )
>>>>>>> f76e3c59423a9efc62a70bb45ed28c2f9fe96f80
);
function mapStateToProps(state) {
  return {
    searchs: state.searches.searchs
  };
}
const mapDispatchToProps = (dispatch) => ({
  
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(searches);
