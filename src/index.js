/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filter-context";
import { AuthProvider } from "./context/auth-context";
import { CartProvider } from "./context/cart-context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <AuthProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
