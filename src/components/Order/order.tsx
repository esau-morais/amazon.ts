
// Components
import { Product } from '@/types/data'

import { ProductInfo } from '../Checkout/checkout'
import { ProductsList } from '../Main/main'

const CheckoutOrder = ({ product, image, price }: Omit<Product, 'id'>) => {
  return (
    <ProductInfo className="productInfo">
      <ProductsList>
        <button className="productCard">
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
      </ProductsList>
    </ProductInfo>
  )
}

export default CheckoutOrder
