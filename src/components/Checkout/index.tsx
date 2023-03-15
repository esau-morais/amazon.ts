
// Components
import { Tooltip } from '@material-ui/core'

// Cart
import { useCartValue } from '../../providers/cart'
import { ProductsList } from '../Main/main'
import { ProductProps } from '../Main/products'
import { ProductInfo } from './checkout'

const CheckoutProduct = ({ id, product, image, price }: ProductProps) => {
  const [, dispatch] = useCartValue()

  const removeFromBasket = () => {
    // Remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }

  return (
    <ProductInfo className="productInfo">
      <ProductsList>
        <Tooltip title="Remote from basket" arrow>
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
        </Tooltip>
      </ProductsList>
    </ProductInfo>
  )
}

export default CheckoutProduct
