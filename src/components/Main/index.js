import React from "react";
// Components
import { Link } from "../index";
import { Container, Img, Row, ProductsList } from "./main";

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
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/0-o_BcdTNSPdYyxcdQFymlnv_w3RvWR_oxKzvbh5NaPzvHXYwKZHEBU3LbEjPAYFZTb1-VmLIJJdRVjKk4OfPa1FTDWmXuX0klFVrdsW9wUkMGxNQCsPL1AoEwuW-uE"
            alt=""
          />
          {/* Click and update the cart state */}
          <p>Foldable Outdoor Backpack Travel Hiking Camping</p>
          <span>$34.47</span>
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/0-o_BcdTNSPdYyxcdQFymlnv_w3RvWR_oxKzvbh5NaPzvHXYwKZHEBU3LbEjPAYFZTb1-VmLIJJdRVjKk4OfPa1FTDWmXuX0klFVrdsW9wUkMGxNQCsPL1AoEwuW-uE"
            alt=""
          />
          {/* Click and update the cart state */}
          <p>Foldable Outdoor Backpack Travel Hiking Camping</p>
          <span>$34.47</span>
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/0-o_BcdTNSPdYyxcdQFymlnv_w3RvWR_oxKzvbh5NaPzvHXYwKZHEBU3LbEjPAYFZTb1-VmLIJJdRVjKk4OfPa1FTDWmXuX0klFVrdsW9wUkMGxNQCsPL1AoEwuW-uE"
            alt=""
          />
          {/* Click and update the cart state */}
          <p>Foldable Outdoor Backpack Travel Hiking Camping</p>
          <span>$34.47</span>
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/proxy/0-o_BcdTNSPdYyxcdQFymlnv_w3RvWR_oxKzvbh5NaPzvHXYwKZHEBU3LbEjPAYFZTb1-VmLIJJdRVjKk4OfPa1FTDWmXuX0klFVrdsW9wUkMGxNQCsPL1AoEwuW-uE"
            alt=""
          />
          {/* Click and update the cart state */}
          <p>Foldable Outdoor Backpack Travel Hiking Camping</p>
          <span>$34.47</span>
        </div>
      </ProductsList>
    </Container>
  );
}
