import React from 'react';
// Components
import { Tooltip } from '@material-ui/core';
// Cart dispatch
import { useCartValue } from "../../providers/cart";

export default function Product({ id, product, image, price }) {
  const [{ basket }, dispatch] = useCartValue();
  console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        product: product,
        image: image,
        price: price
      }
    });
  }

  return (
    <Tooltip title="Add to basket" arrow>
      <button className="productCard" onClick={addToBasket}>
        <div className="productImage">
          <img
            src={image}
            alt={product}
          />
        </div>
        {/* Click and update the cart state */}
        <div className="productDesc">
          <p>{product}</p>
          <span>${price}</span>
        </div>
      </button>
    </Tooltip>
  )
}
