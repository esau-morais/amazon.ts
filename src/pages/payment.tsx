import { SyntheticEvent, useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'

// Components
import { ArrowBackRounded } from '@material-ui/icons'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { StripeCardElement, StripeCardElementChangeEvent } from '@stripe/stripe-js'

import { CartRow } from '../components/Aside/aside'
import CheckoutProduct from '../components/Checkout'
import { Container } from '../components/Checkout/checkout'
import { Back, Button, Divider } from '../components/index'

// Checkout products component
import { db } from '../config/firebase'
import { useCartValue } from '../providers/cart'
import { cartTotalPrice } from '../providers/reducer'

// Payment

import axios from '../services/api'

const Payment = () => {
  const history = useHistory()
  const [{ basket, user }, dispatch] = useCartValue()
  // Payment
  const stripe = useStripe()
  const elements = useElements()
  // Changes
  const [succeeded, setSuccess] = useState<boolean>(false)
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [disabled, setDisabled] = useState<boolean>(true)
  const [clientSecret, setClientSecret] = useState('')
  // Client
  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${cartTotalPrice(basket) * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [basket])

  // Payment
  const handlePayment = async (event: SyntheticEvent<HTMLFormElement>) => {
    // Stripe
    event.preventDefault()
    setIsProcessing(true)

    await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements?.getElement(CardElement) as StripeCardElement
      }
    }).then(({ paymentIntent }) => {
      // Payment confirmation
      db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent?.id)
        .set({
          basket: basket,
          amount: paymentIntent?.amount,
          created: paymentIntent?.created
        })

      setSuccess(true)
      setError(null)
      setIsProcessing(false)

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders')
    })
  }

  const handlePayChange = (event: StripeCardElementChangeEvent) => {
    // "Watch" payment changes in "CardElement" Stripe component
    setDisabled(event.empty)
    setError(event.error ? event.error.message : '')
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

          <Button disabled={isProcessing || disabled || succeeded}>
            {isProcessing ? 'Buying...' : 'Buy now!'}
          </Button>

          {/* Error */}
          {error && <span>{error}</span>}
        </form>
      </div>
    </Container>
  )
}

export default Payment
