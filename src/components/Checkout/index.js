import React from 'react';
// Components
import { ProductInfo } from './checkout';
import { ProductsList } from '../Main/main';
import { Tooltip } from "@material-ui/core";
// Cart
import { useCartValue  } from '../../providers/cart';

export default function CheckoutProduct({ id, product, image, price, hideButton }) {
  const [{ basket }, dispatch] = useCartValue();

  const removeFromBasket = () => {
    // Remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  }

  return (
    <ProductInfo className="productInfo">
      <ProductsList>
          <Tooltip title="Remote from basket" arrow>
	  {
	    <button className="productCard" onClick={removeFromBasket}>
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
	  }
        </Tooltip>
      </ProductsList>
    </ProductInfo>
  )
}
