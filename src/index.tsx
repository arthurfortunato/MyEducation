import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const fullScreenEnabled =
  document.fullscreenEnabled ||
  (document as any).webkitFullscreenEnabled ||
  (document as any).mozFullScreenEnabled ||
  (document as any).msFullscreenEnabled ||
  false;

if (isMobile && fullScreenEnabled) {
  document.documentElement.requestFullscreen();
}  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
