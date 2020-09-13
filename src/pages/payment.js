import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
// Components
import { Container } from '../components/Checkout/checkout';
import { Back, Divider, Button } from '../components/index';
import CheckoutProduct from '../components/Checkout';
import { CartRow } from '../components/Aside/aside';
import { ArrowBackRounded } from "@material-ui/icons";
// Checkout products component
import { useCartValue } from '../providers/cart';
import { cartTotalPrice } from '../providers/reducer';
// Payment
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../services/api';
import { db } from "../config/firebase";

export default function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useCartValue();
  // Payment
  const stripe = useStripe();
  const elements = useElements();
  // Changes
  const [succeeded, setSuccess] = useState(false);
  const [processing, setProcess] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  // Client
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${cartTotalPrice(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [basket])
  console.log("ClientSecret >>>", clientSecret);
  // Payment
  const handlePayment = async (event) => {
    // Stripe
    event.preventDefault();
    setProcess(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // Payment confirmation
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      setSuccess(true);
      setError(null);
      setProcess(false);

      dispatch({
        type: "EMPTY_BASKET"
      })

      history.replace("/orders");
    })
  }

  const handlePayChange = event => {
    // "Watch" payment changes in "CardElement" Stripe component
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  return (
    <Container>
      <div className="checkoutProducts">
        <div>
          <Back to="/checkout">
            <ArrowBackRounded />
          </Back>

          <h2>Payment</h2>
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

        <form onSubmit={handlePayment}>
          <CardElement onChange={handlePayChange} />

          <Divider />

          <CurrencyFormat
            renderText={(value) => (
              <>
                <CartRow>
                  <p>Total</p>
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

          <Button disabled={processing || disabled || succeeded}>
            {processing ? "Buying..." : "Buy now!"}
          </Button>

          {/* Error */}
          {error && <span>{error}</span>}
        </form>
      </div>
    </Container>
  )
}
