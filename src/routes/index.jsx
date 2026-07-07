import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import Category from "../pages/Category";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Admin from "../pages/Admin";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ScrollToTop from "../pages/ScrollToTop";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;