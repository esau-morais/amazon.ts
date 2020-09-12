import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Aside from "./components/Aside";
// Pages
import Main from "./components/Main";
import Checkout from "./pages/checkout";
import Login from "./pages/login";
// Firebase auth
import { auth } from "./config/firebase";
// User dispatch
import { useCartValue } from "./providers/cart";

const appStyle = {
  display: "flex",
  height: "100%"
}

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
          {/* Product's pages */}
          <Route path="/checkout" component={Checkout} />
	  <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}
