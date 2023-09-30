import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./features/store";
import { BrowserRouter } from "react-router-dom";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
