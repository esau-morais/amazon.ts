import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Payment
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// Components
import Aside from "./components/Aside";
// Pages
import Main from "./components/Main";
import Checkout from "./pages/checkout";
import Payment from "./pages/payment";
import Login from "./pages/login";
// Firebase auth
import { auth } from "./config/firebase";
// User dispatch
import { useCartValue } from "./providers/cart";
// Custom style
const appStyle = {
  display: "flex",
  height: "100%"
}
// Payment "call" promise
// This is PUBLISHABLE test key
const promise = loadStripe("pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL");

export default function App() {
  const [{ user }, dispatch] = useCartValue();

  useEffect(() => {
    // when the user is authenticated
    auth.onAuthStateChanged(authUser => {
      console.log("This is you >>> ", authUser);
      if (authUser) {
	// if the user logged in
	dispatch({
	  type: "SET_USER",
	  user: authUser
	})
      } else {
	// if the user logged out
	dispatch({
	  type: "SET_USER",
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
	  <Elements stripe={promise}>
	    <Route path="/payment" component={Payment} />
	  </Elements>
        </Switch>
      </Router>
    </div>
  );
}
