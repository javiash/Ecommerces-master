import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
const test = [
  { name: "HarryPotter", content: "libro", img: "/Images/Carusel 1.jpg" },
  { name: "HarryPotter", content: "asdada", img: "/Images/Carusel 1.jpg" },
  { name: "HarryPotter", content: "asdada", img: "/Images/Carusel 1.jpg" },
  { name: "HarryPotter", content: "asdada", img: "/Images/Carusel 1.jpg" },
  { name: "HarryPotter", content: "asdada", img: "/Images/Carusel 1.jpg" },
  { name: "HarryPotter", content: "asdada", img: "/Images/Carusel 1.jpg" }
];
export default () => {
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
      {test.map(item => {
        return (
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.content}</Card.Text>
                <Link to="/">
                  <Button variant="secondary">Ir al Libro</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      <nav className="pagination item " aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link to="/">
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </Link>
          </li>
          <li className="page-item">
            <Link to="/">
              <a className="page-link">1</a>
            </Link>
          </li>
          <li className="page-item">
            <Link to="/">
              <a className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
