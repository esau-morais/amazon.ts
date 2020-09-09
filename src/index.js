import React from "react";
import ReactDOM from "react-dom";

import Global from "./styles/global";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  rootElement
);
