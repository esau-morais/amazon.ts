import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'

// Components
import { Tooltip } from '@material-ui/core'
import { ArrowBackRounded, InfoOutlined } from '@material-ui/icons'

import { CartRow } from '../components/Aside/aside'
import CheckoutProduct from '../components/Checkout'
import { Container } from '../components/Checkout/checkout'
import { Back, Button, Divider } from '../components/index'

// Cart values
import { useCartValue } from '../providers/cart'
import { cartTotalPrice } from '../providers/reducer'

const Checkout = () => {
  const [{ basket }] = useCartValue()
  // push to payment page
  const history = useHistory()

  return (
    <Container>
      <div className="checkoutProducts">
        <div>
          <Back to="/">
            <ArrowBackRounded />
          </Back>

          <h2>My bag</h2>
        </div>

        <Divider />

        {basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            product={item.product}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>

      <div className="checkoutTotal">
        <CartRow>
          <h3>Items Number</h3>
          <span>{basket.length}</span>
        </CartRow>

        <Divider />

        <CurrencyFormat
          renderText={(value) => (
            <>
              <CartRow>
                <p>Sub-Total</p>
                <span>{value}</span>
              </CartRow>
            </>
          )}
          value={cartTotalPrice(basket)}
          decimalScale={2}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'}
        />

        <CartRow>
          <p>Delivery</p>
          <span>
            <Tooltip title="See your delivery time!" arrow>
              <InfoOutlined />
            </Tooltip>
          </span>
        </CartRow>
        <Button onClick={() => history.push('/payment')}>Checkout</Button>
      </div>
    </Container>
  )
}

export default Checkout
