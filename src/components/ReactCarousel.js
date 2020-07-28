import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import stratocaster from "../assets/stratocaster.jpg";
import telecaster from "../assets/telecaster.jpg";
import jazzmaster from "../assets/jazzmaster.jpg";
import jaguar from "../assets/jaguar.jpg";

import "../App.css";

export const ReactCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="carouselContainer">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={stratocaster}
            alt="First slide"
            id="image"
          />
          <Carousel.Caption>
            <h3>Stratocaster</h3>
            <p>The sound that creates legends</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={telecaster}
            alt="Second slide"
            id="image"
          />

          <Carousel.Caption>
            <h3>Telecaster</h3>
            <p>Timeless design</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            id="image"
            src={jazzmaster}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Jazzmaster</h3>
            <p>The definitive offset instrument</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            id="image"
            src={jaguar}
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Jaguar</h3>
            <p>Adventurous design</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
