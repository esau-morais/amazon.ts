import React, { useState } from "react";
// Components
import { Nav, Row, SearchBar, Cart, CartRow, CartPrices } from "./aside";
import { RouteLink } from "../index";
import { Badge } from "@material-ui/core";
import {
  LocalMallOutlined,
  ArrowBackIosRounded,
  ArrowForwardIosRounded
} from "@material-ui/icons";
// Basket
import { useCartValue } from "../../providers/cart";

const iconStyle = {
  fontSize: "0.9rem",
  marginRight: "0.4rem"
}

export default function Aside() {
  // Define state to open/hide the side bar
  const [open, setOpen] = useState(false);
  // Define state to the cart items and total price
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [{ basket }, dispatch] = useCartValue();

  return (
    <Nav open={open}>
      {/* Logo */}
      <img src="/images/AmazonLogo.png" alt="Amazon" />
      {/* Selection */}
      <Row open={open}>
        <select>
          <option>Departments</option>
        </select>

        <select>
          <option>My Amazon</option>
        </select>
      </Row>
      {/* Search bar */}
      <SearchBar open={open}>
        <label htmlFor="search">Search your products</label>
        <div>
          <input
            id="search"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>
      </SearchBar>
      {/* Cart section */}
      <Cart open={open}>
        <CartRow>
          {/* If the side bar is open, return both.
              Otherwise, return just "Open"
          */}
          {open ? <p>Your total price</p> : <></>}
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <>
                <ArrowBackIosRounded style={iconStyle} />
                Roll
              </>
            ) : (
                <>
                  Open
                  <ArrowForwardIosRounded style={iconStyle} />
                </>
              )}
          </span>
        </CartRow>
        {/* Prices section */}
        <CartPrices open={open}>
          <div>
            {/* The badge content will be/is dynamic */}
            <Badge
              badgeContent={basket.length}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              color="primary"
            >
              <LocalMallOutlined />
            </Badge>
            {/* The total price will be/is dynamic */}
            <span className="totalPrice">${total}</span>
          </div>

          <RouteLink to="/checkout">View my cart</RouteLink>

          <hr />
        </CartPrices>
      </Cart>
    </Nav>
  );
}
