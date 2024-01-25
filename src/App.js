import React, { useEffect } from "react";
import "./App.css";
import CartContainer from "./components/cart/CartContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./components/Context/Context";
import LoginForm from "./components/authentication/LoginForm";
import HomePage from "./components/home";
import ShopIndex from "./components/shop";
import ProductDetails from "./components/single-product/ProductDetails";
import CheckOut from "./components/CheckOut/index.jsx";
import Contact from "./components/contact/index.jsx";
import Stores from "./components/Stores/Stores.jsx";
import Craftsmen from "./components/Craftsmen/index.jsx";

function App() {
  const { cart } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/all-products" element={<ShopIndex />} />
        <Route path="/cart" element={<CartContainer cartContainer={cart} />} />
        <Route path="/products/:id" element={<ProductDetails cart={cart} />} />
        <Route path="/checkout" element={<CheckOut cart={cart} />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/craftsmen" element={<Craftsmen />} />
        <Route path="/sign-up" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
