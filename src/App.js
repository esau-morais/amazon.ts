import React from "react";

import Aside from "./components/Aside";
import Main from "./components/Main";

export default function App() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <Aside />
      <Main />
    </div>
  );
}
