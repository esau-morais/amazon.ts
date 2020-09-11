import React from "react";
// Components
import { Container, RouteLink } from "../index";
import { Img, Row, ProductsList } from "./main";
import Product from './products';

export default function Main({ id, title, image, price }) {

  return (
    /* Main */
    <Container primary="true">
      <div>
        <Img />
      </div>
      <Row>
        <p>Recommended deals: 12 Days of Deals</p>
        <RouteLink to="/">See all</RouteLink>
      </Row>
      <ProductsList>
        <Product product="Travel Hiking Camping" image="/images/Product1.jpeg" price="34.47" />
        <Product product="Hippih Classic Unisex" image="/images/Product2.jpeg" price="8.99" />
        <Product product="Amazon Cloud Cam Indoor" image="/images/Product3.jpeg" price="89.99" />
        <Product product="CoolBELL 15.6 Inch Nylon" image="/images/Product4.jpeg" price="29.99" />
        <Product product="Medical Ear Thermometer" image="/images/Product5.jpeg" price="7.69" />
      </ProductsList>
    </Container>
  );
}
