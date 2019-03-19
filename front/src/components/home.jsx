import React from 'react';
import { Carousel } from 'react-bootstrap';


export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/Images/Carusel 1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/Images/Carusel 2.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/Images/Carusel 3.jpg" alt="Mattonit's item" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
