import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Payment
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

// Components
import Aside from './components/Aside'
// Pages
import Main from './components/Main'
import { auth } from './config/firebase'
import Checkout from './pages/checkout'
import Login from './pages/login'
import Orders from './pages/orders'
import Payment from './pages/payment'
// Firebase auth
// User dispatch
import { useCartValue } from './providers/cart'
// Custom style
const appStyle = {
  display: 'flex',
  height: '100%'
}
// Payment "call" promise
// This is PUBLISHABLE test key
const promise = loadStripe('pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL')

const App = () => {
  const [, dispatch] = useCartValue()

  useEffect(() => {
    // when the user is authenticated
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // if the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // if the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div style={appStyle}>
      <Router>
        <Aside />
        <Switch>
          <Route exact path="/" component={Main} />
          {/* Login/Register page */}
          <Route path="/login" component={Login} />
          {/* Product's pages */}
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Elements stripe={promise}>
            <Route path="/payment" component={Payment} />
          </Elements>
        </Switch>
      </Router>
    </div>
  )
}

export default App
