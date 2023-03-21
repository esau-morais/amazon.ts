// Cart dispatch
import { Product as ProductProps } from '@/types/data'
import { Tooltip } from '@material-ui/core'

import { useCartValue } from '../../providers/cart'

const Product = ({ id, product, image, price }: ProductProps) => {
  const [, dispatch] = useCartValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        product: product,
        image: image,
        price: price
      }
    })
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

export default Product
