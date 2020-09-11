import React from "react";
import ReactDOM from "react-dom";

import Global from "./styles/global";
import { CartProvider } from './providers/cart';
import reducer, { initialState } from './providers/reducer';
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <Global />
    <CartProvider initialState={initialState} reducer={reducer}>
      <App />
    </CartProvider>
  </>,
  rootElement
);
