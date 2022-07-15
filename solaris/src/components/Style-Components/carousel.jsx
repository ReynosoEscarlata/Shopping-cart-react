import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="carousel-dark slide" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50 img-fluid"
          src={require('../../img/xbox.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Xbox Series S</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50 img-fluid"
          src={require('../../img/Nike.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tennis Nike</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50 img-fluid"
          src={require('../../img/tv.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tv</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
