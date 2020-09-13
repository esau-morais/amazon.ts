import React from "react";
// Moment → Date formatter
import moment from "moment";
// Components
import CheckoutOrder from "./order";
import { Divider } from "../index";

export default function Order({ order }) {
 return (
   <>
     <span>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</span>
     {order.data.basket?.map(item => (
       <CheckoutOrder
         id={item.id}
	 product={item.title}
	 image={item.image}
	 price={item.price}
       />
     ))}
     <Divider />
   </>
 )
}
