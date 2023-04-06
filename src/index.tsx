import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FullScreen } from "./utils/FullScreen";

ReactDOM.render(
  <React.StrictMode>
    <FullScreen />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
