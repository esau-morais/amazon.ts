import React from 'react';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
// Components
import { Container } from '../components/Checkout/checkout';
import { Back, Divider, Button } from '../components/index';
import { CartRow } from '../components/Aside/aside';
// Checkout products component
import CheckoutProduct from '../components/Checkout';
import { Tooltip } from "@material-ui/core";
import { ArrowBackRounded, InfoOutlined } from "@material-ui/icons";
// Cart values
import { useCartValue } from '../providers/cart';
import { cartTotalPrice } from '../providers/reducer';

export default function Checkout({ id, product, image, price }) {
  const [{ basket }, dispatch] = useCartValue();
  // push to payment page
  const history = useHistory();
  const pushToPayment = () => {
    history.push("/payment");
  }

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

        {basket.map(item => (
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
        <Button onClick={pushToPayment}>Checkout</Button>
      </div>
    </Container>
  )
}
