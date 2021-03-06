import React from "react";
import { Button } from "react-bootstrap";
import { CarouselItem, Carousel, Item, Caption } from "react-bootstrap";
import car from "../../photos/card/car.jpg";
import "./Carousel.css";

function CarouselComponent() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={car}
            alt="First slide"
            width="100%"
            height="700px"
          />
          <div className="centered">
            <h1>Let's Reach Our Goals Together</h1>
          </div>
          <Carousel.Caption>
            <h2>Join Our Worldwide Community</h2>
            <p>WeEvent.Com</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
            alt="Third slide"
            width="100%"
            height="700px"
          />
          <div className="centered">
            <h1>Let's Discuss Our Ideas Together</h1>
          </div>
          <Carousel.Caption>
            <h2>Join Our Worldwide Community</h2>
            <p>WeEvent.Com</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1566938064504-a379175168b3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
            width="100%"
            height="700px"
          />
          <div className="centered">
            <h1>Let's Make A Better World Together</h1>
          </div>
          <Carousel.Caption>
            <h2>Join Our Worldwide Community</h2>
            <p>WeEvent.Com</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1529156446057-63af7e5c1337?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
            alt="Second slide"
            width="100%"
            height="700px"
          />
          <div className="centered">
            <h1>Let's Enjoy The World Together</h1>
          </div>
          <Carousel.Caption>
            <h2>Join Our Worldwide Community</h2>
            <p>WeEvent.Com</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
            width="100%"
            height="700px"
          />
          <div className="centered">
            <h1>Let's Discover The World Together</h1>
          </div>
          <Carousel.Caption>
            <h2>Join Our Worldwide Community</h2>
            <p>WeEvent.Com</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
