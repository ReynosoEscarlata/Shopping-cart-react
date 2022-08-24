import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className="carousel-dark slide carousel-size" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src="https://firebasestorage.googleapis.com/v0/b/solaris-ac85d.appspot.com/o/iphone.jpg?alt=media&token=b6a2dbfa-5958-4a54-a090-a65634b244c1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src="https://firebasestorage.googleapis.com/v0/b/solaris-ac85d.appspot.com/o/lenovo.jpg?alt=media&token=b4009969-7a4b-42c8-86ab-5b022f767987"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-carousel"
          src="https://firebasestorage.googleapis.com/v0/b/solaris-ac85d.appspot.com/o/tv.jpg?alt=media&token=d840b9fc-29c8-44fa-aa5b-c481421c853f"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
