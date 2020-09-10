import React from "react";
// Components
import { Link } from "../index";
import { Container, Img, Row, ProductsList } from "./main";
import { ToolTip } from '@material-ui/core';

export default function Main() {
  return (
    /* Main */
    <Container>
      <div>
        <Img />
      </div>
      <Row>
        <p>Recommended deals: 12 Days of Deals</p>
        <Link href="/">See all</Link>
      </Row>
      <ProductsList>
        <ToolTip title="Add to basket" arrow>
          <div className="productCard">
            <div className="productImage">
              <img
                src="/images/Product1.jpeg"
                alt="Travel Hiking Camping"
              />
            </div>
            {/* Click and update the cart state */}
            <div className="productDesc">
              <p>Travel Hiking Camping</p>
              <span>$34.47</span>
            </div>
          </div>
        </ToolTip>
        <ToolTip title="Add to basket" arrow>
          <div className="productCard">
            <div className="productImage">
              <img
                src="/images/Product2.jpeg"
                alt="Hippih Classic Unisex"
              />
            </div>
            {/* Click and update the cart state */}
            <div className="productDesc">
              <p>Hippih Classic Unisex</p>
              <span>$8.99</span>
            </div>
          </div>
        </ToolTip>
        <ToolTip title="Add to basket" arrow>
          <div className="productCard">
            <div className="productImage">
              <img
                src="/images/Product3.jpeg"
                alt="Amazon Cloud Cam Indoor"
              />
            </div>
            {/* Click and update the cart state */}
            <div className="productDesc">
              <p>Amazon Cloud Cam Indoor</p>
              <span>$89.99</span>
            </div>
          </div>
        </ToolTip>
        <ToolTip title="Add to basket" arrow>
          <div className="productCard">
            <div className="productImage">
              <img
                src="/images/Product4.jpeg"
                alt="CoolBELL 15.6 Inch Nylon"
              />
            </div>
            {/* Click and update the cart state */}
            <div className="productDesc">
              <p>CoolBELL 15.6 Inch Nylon</p>
              <span>$29.99</span>
            </div>
          </div>
        </ToolTip>
        <ToolTip title="Add to basket" arrow>
          <div className="productCard">
            <div className="productImage">
              <img
                src="/images/Product5.jpeg"
                alt="Medical Ear Thermometer"
              />
            </div>
            {/* Click and update the cart state */}
            <div className="productDesc">
              <p>Medical Ear Thermometer</p>
              <span>$7.69</span>
            </div>
          </div>
        </ToolTip>
      </ProductsList>
    </Container>
  );
}
