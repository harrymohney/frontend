import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../../pages/ProductList";
import Cart from "../../pages/Cart";
import Checkout from "../../pages/Checkout";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </main>
  );
};

export default Main;
