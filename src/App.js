import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Aside from "./components/Aside";
// Pages
import Main from "./components/Main";
import Checkout from "./pages/checkout";
import Login from "./pages/login";

const appStyle = {
  display: "flex",
  height: "100%"
}

export default function App() {
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
