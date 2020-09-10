import React, { useState } from "react";
// Components
import { Nav, Row, SearchBar, Cart, CartRow, CartPrices } from "./aside";
import { Link } from "../index";
import { Badge } from "@material-ui/core";
import {
  LocalMallOutlined,
  ArrowBackIosRounded,
  ArrowForwardIosRounded
} from "@material-ui/icons";

export default function Aside() {
  // Define state to open/hide the side bar
  const [open, setOpen] = useState(false);

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
                <ArrowBackIosRounded
                  style={{ fontSize: "0.9rem", marginRight: "0.4rem" }}
                />
                Roll
              </>
            ) : (
              <>
                Open
                <ArrowForwardIosRounded
                  style={{ fontSize: "0.9rem", marginLeft: "0.4rem" }}
                />
              </>
            )}
          </span>
        </CartRow>
        {/* Prices section */}
        <CartPrices open={open}>
          <div>
            {/* The badge content will be/is dynamic */}
            <Badge
              badgeContent={4}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              color="primary"
            >
              <LocalMallOutlined />
            </Badge>
            <span className="totalPrice">$970.12</span>
          </div>

          <Link href="/">View my cart</Link>

          <hr />
        </CartPrices>
      </Cart>
    </Nav>
  );
}
